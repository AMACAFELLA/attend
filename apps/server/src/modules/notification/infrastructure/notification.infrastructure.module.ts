import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationEventSubscriber } from './subscribers/notification.event.subscriber'

import { NotificationAttendeeSubscriber } from './subscribers/notification.attendee.subscriber'

import { NotificationEventattendeeSubscriber } from './subscribers/notification.eventattendee.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationEventSubscriber,

NotificationAttendeeSubscriber,

NotificationEventattendeeSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
