'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Card, Avatar, Descriptions, Spin } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AttendeeDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [attendee, setAttendee] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchAttendee = async () => {
      try {
        const attendeeData = await Api.Attendee.findOne(params.attendeeId, { includes: ['event'] })
        setAttendee(attendeeData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch attendee details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchAttendee()
  }, [params.attendeeId])

  const handleCheckInOrOut = async (status: string) => {
    try {
      await Api.Attendee.updateOne(attendee.id, { status: status })
      setAttendee({ ...attendee, status: status })
      enqueueSnackbar(`Attendee ${status === 'checked-in' ? 'checked in' : 'checked out'} successfully`, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(`Failed to ${status === 'checked-in' ? 'check in' : 'check out'} attendee`, { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <Title level={2}>Attendee Details</Title>
        <Text>This page displays detailed information about an attendee of a specific event, including their status and options to check them in or out.</Text>
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <Card style={{ width: 300 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Avatar src={attendee?.pictureUrl || 'https://joeschmoe.io/api/v1/random'} size={64} />
              <Title level={4}>{attendee?.firstName} {attendee?.lastName}</Title>
              <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="Email">{attendee?.email}</Descriptions.Item>
                <Descriptions.Item label="Event">{attendee?.event?.title}</Descriptions.Item>
                <Descriptions.Item label="Status">{attendee?.status}</Descriptions.Item>
                <Descriptions.Item label="Check-In Time">{attendee?.checkInTime ? dayjs(attendee.checkInTime).format('YYYY-MM-DD HH:mm') : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label="Check-Out Time">{attendee?.checkOutTime ? dayjs(attendee.checkOutTime).format('YYYY-MM-DD HH:mm') : 'N/A'}</Descriptions.Item>
              </Descriptions>
              <Button 
                type="primary" 
                icon={attendee?.status === 'checked-in' ? <CloseCircleOutlined /> : <CheckCircleOutlined />} 
                onClick={() => handleCheckInOrOut(attendee?.status === 'checked-in' ? 'checked-out' : 'checked-in')}
                style={{ marginTop: '10px' }}
              >
                {attendee?.status === 'checked-in' ? 'Check Out' : 'Check In'}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </PageLayout>
  )
}