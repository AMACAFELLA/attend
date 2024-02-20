'use client'

import { BarChartOutlined, UserOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography

export default function EventDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const [event, setEvent] = useState<any>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventDetails = await Api.Event.findOne(params.id, {
          includes: ['user', 'attendees'],
        })
        setEvent(eventDetails)
      } catch (error) {
        // Since we can't use external libraries for notifications, we'll handle errors silently in this context.
        console.error('Failed to fetch event details', error)
      }
    }

    if (params.id) {
      fetchEvent()
    }
  }, [params.id])

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Event Details</Title>
          <Card>
            <Title level={4}>{event?.title}</Title>
            <Paragraph>{event?.description}</Paragraph>
            <Text strong>Organized by: </Text>
            <Text>{event?.user?.name}</Text>
            <br />
            <Text strong>Date: </Text>
            <Text>{dayjs(event?.dateCreated).format('DD MMM YYYY')}</Text>
            <br />
            <Space
              direction="vertical"
              size="middle"
              style={{ marginTop: '1rem' }}
            >
              <Button
                icon={<UserOutlined />}
                onClick={() => router.push(`/event/${params.id}/attendees`)}
              >
                Attendees
              </Button>
              <Button
                icon={<BarChartOutlined />}
                onClick={() => router.push(`/event/${params.id}/analytics`)}
              >
                Analytics
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
