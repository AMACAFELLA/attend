'use client'

import { InboxOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Button, Modal, Typography, Upload, message } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
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

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('File upload failed', { variant: 'error' })
    }
  }

  const handleImport = async () => {
    if (fileList.length === 0) {
      message.error('Please upload a file before importing.')
      return
    }
    // Assuming the backend can directly import from the uploaded file URL
    // This part of the code is pseudo and may vary based on the actual API implementation
    try {
      // Here you would call an API to import attendees using the file URL
      // For demonstration, just showing a success message
      Modal.success({
        title: 'Import Successful',
        content: `Attendees have been successfully imported from the file.`,
      })
    } catch (error) {
      Modal.error({
        title: 'Import Failed',
        content:
          'There was an issue importing the attendees. Please try again.',
      })
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
        fileList={fileList}
        customRequest={handleUpload}
        maxCount={1}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        beforeUpload={() => false} // Prevent auto upload
        onRemove={() => setFileList([])}
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
        disabled={fileList.length === 0}
        onClick={handleImport}
        style={{ marginTop: 16 }}
      >
        Import Attendees
      </Button>
    </PageLayout>
  )
}
