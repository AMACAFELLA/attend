'use client'

import { DownloadOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { Button, Col, Row, Select, Spin, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select

export default function ExportAttendeesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [exportFormat, setExportFormat] = useState<string>('csv')
  const [attendees, setAttendees] = useState<any[]>([])

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await Api.Event.findOne(params.id, {
          includes: ['attendees'],
        })
        setEvent(fetchedEvent)
        setAttendees(fetchedEvent.attendees || [])
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch event details', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  const handleExport = async () => {
    try {
      let dataStr = ''
      switch (exportFormat) {
        case 'csv':
          dataStr = attendees
            .map(
              a =>
                `${a.firstName},${a.lastName},${a.email}, ${a.phoneNumber}, ${a.age}, ${a.roomNumber}, ${a.tShirtSize}, ${a.teamColor}, ${a.status}`,
            )
            .join('\n')
          break
        case 'xls':
          // Simplified for demonstration; real XLS export would require a library which is not allowed per the instructions
          dataStr = `<table>${attendees.map(a => `<tr><td>${a.firstName}</td><td>${a.lastName}</td><td>${a.email}</td><td>${a.phoneNumber}</td><td>${a.age}</td><td>${a.roomNumber}</td><td>${a.tShirtSize}</td><td>${a.teamColor}</td><td>${a.status}</td></tr>`).join('')}</table>`
          break
        case 'pdf':
          // Simplified for demonstration; real PDF export would require a library which is not allowed per the instructions
          dataStr = attendees
            .map(
              a =>
                `Name: ${a.firstName} ${a.lastName}, Email: ${a.email}, Phone: ${a.phoneNumber}, Age: ${a.age}, Room: ${a.roomNumber}, T-Shirt: ${a.tShirtSize}, Team: ${a.teamColor}, Status: ${a.status}`,
            )
            .join('\n')
          break
        default:
          throw new Error('Unsupported format')
      }
      const blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `attendees.${exportFormat}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      enqueueSnackbar(
        `Attendees list exported in ${exportFormat.toUpperCase()} format.`,
        { variant: 'success' },
      )
    } catch (error) {
      enqueueSnackbar('Export failed', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Export Attendees</Title>
          <Text>
            Export the list of attendees for the event:{' '}
            {loading ? <Spin size="small" /> : event?.title}
          </Text>
          <br />
          <br />
          <Select
            defaultValue="csv"
            style={{ width: 120 }}
            onChange={value => setExportFormat(value)}
          >
            <Option value="csv">CSV</Option>
            <Option value="xls">XLS</Option>
            <Option value="pdf">PDF</Option>
          </Select>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleExport}
            style={{ marginLeft: '10px' }}
          >
            Export
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
