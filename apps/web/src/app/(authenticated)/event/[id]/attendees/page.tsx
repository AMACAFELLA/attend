'use client'

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  HomeOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  SkinOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd'
import { Option } from 'antd/es/mentions'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
const { Title, Text } = Typography

export default function EventAttendeesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [attendees, setAttendees] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [roomsWithKeysTaken, setRoomsWithKeysTaken] = useState([]);
  const [roomKeyHolders, setRoomKeyHolders] = useState({});
  const [form] = Form.useForm()

  useEffect(() => {
    if (params.id) {
      fetchAttendees(params.id)
    }
  }, [params.id])

  const fetchAttendees = async (eventId: string) => {
    setLoading(true);
    try {
      const attendeesFound = await Api.Attendee.findManyByEventId(eventId, {
        includes: ['event'],
      });
  
      // Assign key holder information to each attendee
      const updatedAttendees = attendeesFound.map(attendee => {
        const keyHolderInfo = roomKeyHolders[attendee.roomNumber];
        if (keyHolderInfo) {
          return { ...attendee, ...keyHolderInfo, keyTaken: attendee.keyTaken };
        }
        return attendee;
      });
  
      setAttendees(updatedAttendees);
      setLoading(false);
    } catch (error) {
      enqueueSnackbar('Failed to fetch attendees', { variant: 'error' });
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleStatusChange = async (attendeeId: string, newStatus: string) => {
    try {
      await Api.Attendee.updateOne(attendeeId, { status: newStatus })
      enqueueSnackbar(`Attendee status updated to ${newStatus}`, {
        variant: 'success',
      })
      fetchAttendees(params.id)
    } catch (error) {
      enqueueSnackbar('Failed to update attendee status', { variant: 'error' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      await Api.Attendee.createOneByEventId(params.id, {
        ...values,
        status: 'pending',
      })
      enqueueSnackbar('Attendee added successfully', { variant: 'success' })
      setIsModalVisible(false)
      fetchAttendees(params.id)
    } catch (error) {
      enqueueSnackbar('Failed to add attendee', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  // This function updates the key holder information for all attendees in the same room
  const updateKeyHolderInfo = async (roomNumber, keyHolderId, keyTaken) => {
    // Fetch all attendees in the same room
    const roomAttendees = attendees.filter(attendee => attendee.roomNumber === roomNumber);
  
    // If a key is taken, update the key holder's information for the room
    if (keyTaken) {
      const keyHolderAttendee = attendees.find(attendee => attendee.id === keyHolderId);
      const keyHolderInfo = {
        keyHolder: `${keyHolderAttendee.firstName} ${keyHolderAttendee.lastName}`,
        keyHolderPhoneNumber: keyHolderAttendee.phoneNumber,
      };
  
      // Update the roomKeyHolders state
      setRoomKeyHolders(prev => ({ ...prev, [roomNumber]: keyHolderInfo }));
  
      // Update all attendees in the same room with the key holder's information
      const updatedAttendees = attendees.map(attendee => {
        if (attendee.roomNumber === roomNumber) {
          return { ...attendee, ...keyHolderInfo, keyTaken: attendee.id === keyHolderId };
        }
        return attendee;
      });
  
      setAttendees(updatedAttendees);
  
      // Update the backend for each attendee in the room
      for (const attendee of roomAttendees) {
        await Api.Attendee.updateOne(attendee.id, {
          keyHolder: keyHolderInfo.keyHolder,
          keyHolderPhoneNumber: keyHolderInfo.keyHolderPhoneNumber,
          keyTaken: attendee.id === keyHolderId,
        });
      }
    } else {
      // If the key is returned, clear the key holder's information for the room
      setRoomKeyHolders(prev => {
        const updated = { ...prev };
        delete updated[roomNumber];
        return updated;
      });
  
      // Update all attendees in the same room to clear the key holder's information
      const updatedAttendees = attendees.map(attendee => {
        if (attendee.roomNumber === roomNumber) {
          return { ...attendee, keyHolder: null, keyHolderPhoneNumber: null, keyTaken: false };
        }
        return attendee;
      });
  
      setAttendees(updatedAttendees);
  
      // Update the backend for each attendee in the room
      for (const attendee of roomAttendees) {
        await Api.Attendee.updateOne(attendee.id, {
          keyHolder: null,
          keyHolderPhoneNumber: null,
          keyTaken: false,
        });
      }
    }
  };
  

const handleKeyTaken = async (attendeeId, keyTaken, roomNumber) => {
  // Find the current key holder in the room if any
  const currentKeyHolder = attendees.find(a => a.roomNumber === roomNumber && a.keyTaken);
  
  // Update the backend and frontend state
  await updateKeyHolderInfo(roomNumber, keyTaken ? attendeeId : null, keyTaken);
  
  if (!keyTaken && currentKeyHolder) {
    // If key is being returned, update keyTaken to false for the current key holder
    await Api.Attendee.updateOne(currentKeyHolder.id, { keyTaken: false });
  }

  // Refresh the list of attendees to ensure UI is up to date
  fetchAttendees(params.id);
};


  const filteredAttendees = attendees.filter(attendee =>
    `${attendee.firstName} ${attendee.lastName}`
      .toLowerCase()
      .includes(searchText.toLowerCase()),
  )

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <Space>
          <Avatar
            src={record.pictureUrl || undefined}
            icon={<UserOutlined />}
          />
          <Text>{`${record.firstName} ${record.lastName}`}</Text>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text: string, record: any) => (
        <Space>
          <MailOutlined />
          <a href={`mailto:${record.email}`}>{record.email}</a>
        </Space>
      ),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (text: string, record: any) => (
        <Space>
          <PhoneOutlined />
          <a href={`tel:${record.phoneNumber}`}>{record.phoneNumber}</a>
        </Space>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text: string, record: any) => (
        <Space>
          <UserOutlined />
          {record.age}
        </Space>
      ),
    },
    {
      title: 'Room Number',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
      render: (text: string, record: any) => (
        <Space>
          <HomeOutlined />
          {record.roomNumber}
        </Space>
      ),
    },
    {
      title: 'T-Shirt Size',
      dataIndex: 'tShirtSize',
      key: 'tShirtSize',
      render: (text: string, record: any) => (
        <Space>
          <SkinOutlined />
          {record.tShirtSize}
        </Space>
      ),
    },
    {
      title: 'Team Color',
      dataIndex: 'teamColor',
      key: 'teamColor',
      render: (text: string, record: any) => (
        <Space>
          <TeamOutlined />
          {record.teamColor}
        </Space>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag
          color={
            status === 'checked in'
              ? 'green'
              : status === 'checked out'
                ? 'volcano'
                : 'geekblue'
          }
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: any) => (
        <Space>
          <Button
            icon={<CheckCircleOutlined />}
            onClick={() => handleStatusChange(record.id, 'checked in')}
          >
            Check In
          </Button>
          <Button
            icon={<CloseCircleOutlined />}
            onClick={() => handleStatusChange(record.id, 'checked out')}
          >
            Check Out
          </Button>
        </Space>
      ),
    },
    {
      title: 'Key Taken',
      key: 'keyTaken',
      render: (text: string, record: any) => (
        <Space>
          <KeyOutlined />
          <Button
            onClick={() => handleKeyTaken(record.id, true, record.roomNumber)}
            disabled={!record.roomNumber || attendees.some(attendee => attendee.roomNumber === record.roomNumber && attendee.keyTaken)}
          >
            Yes
          </Button>
          <Button
            onClick={() => handleKeyTaken(record.id, false, record.roomNumber)}
            disabled={!record.roomNumber || !record.keyTaken}
          >
            No
          </Button>
        </Space>
      ),
    },    
    {
      title: 'Key Holder',
      key: 'keyHolder',
      render: (text: string, record: any) => (
        <Space>
          <KeyOutlined />
          {record.keyHolder ? (
            <>
              <Text>{record.keyHolder}</Text>
              {record.phoneNumber ? (
  <Text>{record.phoneNumber}</Text>
) : (
  <Text>No Phone Number</Text>
)}
            </>
          ) : (
            <Text>No Key Holder</Text>
          )}
        </Space>
      ),
    },
  ]

  const checkedInCount = attendees.filter(
    attendee => attendee.status === 'checked in',
  ).length
  const checkedOutCount = attendees.filter(
    attendee => attendee.status === 'checked out',
  ).length

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Event Attendees</Title>
      <Text>This page displays all attendees for the selected event.</Text>
      <br />
      <Space style={{ margin: '20px 0' }}>
        <Input
          placeholder="Search attendees"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
        />
        <Button type="primary" onClick={showModal}>
          Add Attendee
        </Button>
        {/* <Text>Checked In: {checkedInCount}</Text>
        <Text>Checked Out: {checkedOutCount}</Text> */}
      </Space>
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={filteredAttendees}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 'max-content' }} // Add this line to enable horizontal scrolling
      />
      <Modal
        title="Add Attendee"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            age: '',
            roomNumber: '',
            tShirtSize: '',
            teamColor: '',
          }}
        >
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: 'Please input the first name!' },
            ]}
            label="First Name"
          >
            <Input prefix={<UserOutlined />} placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input the last name!' }]}
            label="Last Name"
          >
            <Input prefix={<UserOutlined />} placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
            label="Email"
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: 'Please input the phone number!' },
              {
                pattern: /^[0-9]{10}$/,
                message: 'Please enter a valid phone number!',
              },
            ]}
            label="Phone Number"
          >
            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="age"
            rules={[
              { required: true, message: 'Please input the age!' },
              {
                pattern: /^[0-9]{1,3}$/,
                message: 'Please enter a valid age!',
              },
            ]}
            label="Age"
          >
            <Input prefix={<UserOutlined />} placeholder="Age" />
          </Form.Item>
          <Form.Item
            name="roomNumber"
            rules={[
              { required: false, message: 'Please input the room number!' },
              {
                pattern: /^[0-9]{1,2}$/,
                message: 'Please enter a valid room number!',
              },
            ]}
            label="Room Number"
          >
            <Input prefix={<HomeOutlined />} placeholder="Room Number" />
          </Form.Item>
          <Form.Item
            name="tShirtSize"
            rules={[
              { required: false, message: 'Please select a t-shirt size!' },
            ]}
            label="T-Shirt Size"
          >
            <Select placeholder="Select a t-shirt size" allowClear>
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="teamColor"
            label="Team Color"
            rules={[
              { required: false, message: 'Please select a team color!' },
              {
                pattern: /^[a-zA-Z]{3,}$/,
                message: 'Please enter a valid team color!',
              },
            ]}
          >
            <Input prefix={<TeamOutlined />} placeholder="Team Color" />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}