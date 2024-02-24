'use client'

import { InboxOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Button, Typography, Upload, message } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import Papa from 'papaparse'
import { useState } from 'react'

const { Title, Paragraph } = Typography
const { Dragger } = Upload

export default function ImportAttendeesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])

  // Add a new function to handle the file before uploading
  const beforeUpload = file => {
    // Update the file list with the new file
    setFileList([file])
    // Return false to stop auto uploading because we will handle it manually
    return false
  }

  const handleUpload = async file => {
    const reader = new FileReader()

    reader.onload = async e => {
      const text = e.target.result
      Papa.parse(text, {
        header: true,
        complete: async function (results) {
          const attendeesToAdd = results.data
          const attendeesPromises = attendeesToAdd.map(attendeeData => {
            const attendee = {
              firstName: attendeeData.firstName,
              lastName: attendeeData.lastName,
              email: attendeeData.email,
              phoneNumber: attendeeData.phoneNumber,
              age: attendeeData.age,
              roomNumber: attendeeData.roomNumber,
              tShirtSize: attendeeData.tShirtSize,
              teamColor: attendeeData.teamColor,
              status: 'pending',
            }
            return Api.Attendee.createOneByEventId(params.id, attendee).catch(
              handleAddAttendeeError,
            )
          })

          try {
            console.log('Parsed attendees data:', attendeesToAdd)
            await Promise.all(attendeesPromises)
            enqueueSnackbar('Attendees imported successfully', {
              variant: 'success',
            })
            router.push(`/event/${params.id}/attendees`)
          } catch (error) {
            console.error('Error adding attendees:', error)
            enqueueSnackbar(
              'Failed to add attendees. Please try again later.',
              {
                variant: 'error',
              },
            )
          }
        },
        error: function (error) {
          enqueueSnackbar('Failed to parse the CSV file', { variant: 'error' })
        },
      })
    }

    reader.onerror = e => {
      enqueueSnackbar('Error reading file: ' + e.target.error, {
        variant: 'error',
      })
    }

    reader.readAsText(file)
  }

  const handleAddAttendeeError = error => {
    console.error('Failed to add attendee:', error)
    enqueueSnackbar('Failed to add attendee. Please try again later.', {
      variant: 'error',
    })
  }

  const handleImport = () => {
    if (fileList.length === 0) {
      message.error('Please upload a file before importing.')
      return
    }

    // Ensure that we have a File object before attempting to read
    if (fileList[0] instanceof File) {
      handleUpload(fileList[0])
    } else {
      message.error('Please select a valid file.')
    }
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Import Attendees</Title>
      <Paragraph>
        Use this page to import attendees for your event. Please upload a CSV or
        Excel file containing the attendees' information.
      </Paragraph>
      <Dragger
        name="file" // This is required by Ant Design's Dragger for proper file handling
        fileList={fileList.map(file => ({
          uid: file.uid,
          name: file.name,
          status: 'done',
        }))}
        beforeUpload={beforeUpload}
        onRemove={() => setFileList([])}
        multiple={false}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibit from uploading company
          data or other band files
        </p>
      </Dragger>
      <Button
        type="primary"
        onClick={handleImport}
        style={{ marginTop: 16 }}
        disabled={fileList.length === 0}
      >
        Import Attendees
      </Button>
    </PageLayout>
  )
}
