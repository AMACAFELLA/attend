'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Statistic, Card } from 'antd'
import { UserOutlined, TeamOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EventAnalyticsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [event, setEvent] = useState<any>(null)
  const [attendees, setAttendees] = useState<any[]>([])
  const [checkedInCount, setCheckedInCount] = useState<number>(0)
  const [checkedOutCount, setCheckedOutCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventFound = await Api.Event.findOne(params.id, { includes: ['attendees'] })
        setEvent(eventFound)
        setAttendees(eventFound.attendees || [])
        // Calculate checked in and checked out attendees
        const checkedInAttendees = eventFound.attendees?.filter(attendee => attendee.status === 'checked in').length || 0
        const checkedOutAttendees = eventFound.attendees?.filter(attendee => attendee.status === 'checked out').length || 0
        setCheckedInCount(checkedInAttendees)
        setCheckedOutCount(checkedOutAttendees)
      } catch (error) {
        enqueueSnackbar('Failed to fetch event details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchEvent()
    }
  }, [params.id])

  if (loading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Event Analytics</Title>
      <Text>This page provides various analytics related to the specific event.</Text>
      <Row gutter={16} style={{ marginTop: '20px' }} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="Total Attendees"
              value={attendees.length}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="Event Date"
              value={event ? dayjs(event.dateCreated).format('DD MMM YYYY') : 'N/A'}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        {/* Checked In Attendees */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="Checked In Attendees"
              value={checkedInCount}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        {/* Checked Out Attendees */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic
              title="Checked Out Attendees"
              value={checkedOutCount}
              prefix={<CloseCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}