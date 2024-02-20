import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { EventDomainModule } from './event/domain'

import { AttendeeDomainModule } from './attendee/domain'

import { EventattendeeDomainModule } from './eventattendee/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

EventDomainModule,

AttendeeDomainModule,

EventattendeeDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
