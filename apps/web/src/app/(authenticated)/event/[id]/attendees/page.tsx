'use client'

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
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
  Space,
  Table,
  Tag,
  Typography,
} from 'antd'
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
  const [form] = Form.useForm()

  useEffect(() => {
    if (params.id) {
      fetchAttendees(params.id)
    }
  }, [params.id])

  const fetchAttendees = async (eventId: string) => {
    setLoading(true)
    try {
      const attendeesFound = await Api.Attendee.findManyByEventId(eventId, {
        includes: ['event'],
      })
      setAttendees(attendeesFound)
      setLoading(false)
    } catch (error) {
      enqueueSnackbar('Failed to fetch attendees', { variant: 'error' })
      setLoading(false)
    }
  }

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
        <Form form={form} layout="vertical">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
