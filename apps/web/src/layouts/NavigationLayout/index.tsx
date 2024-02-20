import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [

{
      key: '/events',
      label: 'All Events',
      onClick: () => goTo('/events'),
    },

{
      key: '/event/create',
      label: 'Create Event',
      onClick: () => goTo('/event/create'),
    },

]

  const itemsUser = [

]

  const itemsTopbar = [
    
  ]

  const itemsSubNavigation = [
    
    {
      key: '/events',
      label: 'All Events',
    },
    
    {
      key: '/event/:id',
      label: 'Event Details',
    },
    
    {
      key: '/event/:id/attendees',
      label: 'Event Attendees',
    },
    
    {
      key: '/event/:id/analytics',
      label: 'Event Analytics',
    },
    
    {
      key: '/event/create',
      label: 'Create Event',
    },
    
    {
      key: '/event/:id/attendee/add',
      label: 'Add Attendee',
    },
    
    {
      key: '/event/:id/attendee/:attendeeId',
      label: 'Attendee Details',
    },
    
    {
      key: '/event/:id/import',
      label: 'Import Attendees',
    },
    
    {
      key: '/event/:id/export',
      label: 'Export Attendees',
    },
    
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
