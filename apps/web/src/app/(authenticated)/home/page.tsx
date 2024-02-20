'use client'
import { PageLayout } from '@web/layouts/Page.layout' // Assuming this can stay the same
import { Divider, Flex, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography

export default function HomePage() {
  return (
    <PageLayout layout="super-narrow">
      <Flex align="center" vertical>
        <Title level={1} style={{ marginBottom: 5 }}>
          Welcome to Attend 👋
        </Title>
        <Title level={5} style={{ marginTop: 0, marginBottom: 15 }}>
          {' '}
          Attend is a event check in and attendance system. It's a great way to
          track your attendees and make sure they're all there.
        </Title>

        <Divider />
        <Text type="secondary">
          If you have any problems, send me a{' '}
          <a href="mailto:angus.macapella1@gmail.com">email</a>
        </Text>

        <Text type="secondary">
          Made with ❤️ by{' '}
          <a href="https://www.linkedin.com/in/angus-macapella/">
            Angus Macapella
          </a>
          👋
          <br />
        </Text>
      </Flex>
    </PageLayout>
  )
}
