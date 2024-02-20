'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography, Row, Col, DatePicker } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateEventPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    try {
      await Api.Event.createOneByUserId(userId, {
        title: values.title,
        description: values.description,
        userId: userId,
      })
      enqueueSnackbar('Event created successfully', { variant: 'success' })
      router.push('/events')
    } catch (error) {
      enqueueSnackbar('Failed to create event', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <Title level={2}>Create New Event</Title>
          <Paragraph>
            Fill in the details below to create a new event.
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="title"
              label="Event Title"
              rules={[{ required: true, message: 'Please input the event title!' }]}
            >
              <Input placeholder="Enter event title" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Event Description"
            >
              <Input.TextArea rows={4} placeholder="Enter event description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
                Create Event
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}