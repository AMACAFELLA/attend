'use client'

import React, { useEffect, useState } from 'react';
import { Typography, List, Avatar, Button, Space } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AllEventsPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['events', 'events.attendees'] }) // Modified to include 'events.attendees'
        .then((user) => {
          setEvents(user.events || []);
        })
        .catch(() => {
          enqueueSnackbar('Failed to fetch events', { variant: 'error' });
        });
    }
  }, [userId]);

  const navigateToEventDetails = (eventId) => {
    router.push(`/event/${eventId}`);
  };

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2}>My Events</Title>
        <Text type="secondary">Manage and track your events.</Text>
        <List
          itemLayout="horizontal"
          dataSource={events}
          renderItem={(event) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => navigateToEventDetails(event.id)}>Details</Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<CalendarOutlined />} />}
                title={<a onClick={() => navigateToEventDetails(event.id)}>{event.title}</a>}
                description={dayjs(event.dateCreated).format('DD MMM YYYY')}
              />
              <div>
                <Space>
                  <UserOutlined />
                  <Text>{event.attendees?.length || 0} Attendees</Text> {/* Updated to display the correct number of attendees */}
                </Space>
              </div>
            </List.Item>
          )}
        />
      </div>
    </PageLayout>
  );
}