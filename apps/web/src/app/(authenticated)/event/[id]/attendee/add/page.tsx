'use client'

import {
  CheckCircleOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { Button, Form, Input, Select, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
const { Title, Text } = Typography
const { Option } = Select

export default function AddAttendeePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    try {
      await Api.Attendee.createOneByEventId(params.id, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        age: values.age,
        roomNumber: values.roomNumber,
        tShirtSize: values.tShirtSize,
        teamColor: values.teamColor,
        status: values.status,
        eventId: params.id,
      })
      enqueueSnackbar('Attendee added successfully', { variant: 'success' })
      router.push(`/event/${params.id}/attendees`)
    } catch (error) {
      enqueueSnackbar('Failed to add attendee', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Add Attendee</Title>
        <Text>Add a new attendee to the event.</Text>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ marginTop: '20px' }}
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
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
            label="Email"
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: 'Please input the phone number!' },
            ]}
            label="Phone Number"
          >
            <Input prefix={<MailOutlined />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="age"
            rules={[{ required: true, message: 'Please input the age!' }]}
            label="Age"
          >
            <Input prefix={<MailOutlined />} placeholder="Age" />
          </Form.Item>
          <Form.Item
            name="roomNumber"
            rules={[
              { required: true, message: 'Please input the room number!' },
            ]}
            label="Room Number"
          >
            <Input prefix={<MailOutlined />} placeholder="Room Number" />
          </Form.Item>
          <Form.Item
            name="tShirtSize"
            rules={[
              { required: true, message: 'Please select a t-shirt size!' },
            ]}
            label="T-Shirt Size"
          >
            <Select placeholder="Select a t-shirt size" allowClear>
              <Option value="xs">XS</Option>
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
              <Option value="xl">XL</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="teamColor"
            rules={[{ required: true, message: 'Please select a team color!' }]}
            label="Team Color"
          >
            <Input prefix={<MailOutlined />} placeholder="Team Color" />
          </Form.Item>
          <Form.Item
            name="status"
            rules={[{ required: true, message: 'Please select a status!' }]}
            label="Status"
          >
            <Select placeholder="Select a status" allowClear>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<CheckCircleOutlined />}
            >
              Add Attendee
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
