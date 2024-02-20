'use client'

import { useState } from 'react'
import { Button, Form, Input, Select, Typography } from 'antd'
import { UserOutlined, MailOutlined, CheckCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

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
        <Form form={form} layout="vertical" onFinish={handleSubmit} style={{ marginTop: '20px' }}>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input the first name!' }]}
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
            rules={[{ required: true, message: 'Please input the email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
            label="Email"
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
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
            <Button type="primary" htmlType="submit" icon={<CheckCircleOutlined />}>
              Add Attendee
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}