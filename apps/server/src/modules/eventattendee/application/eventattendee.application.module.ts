import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { EventattendeeDomainModule } from '../domain'
import { EventattendeeController } from './eventattendee.controller'

import { EventDomainModule } from '../../../modules/event/domain'

import { EventattendeeByEventController } from './eventattendeeByEvent.controller'

import { AttendeeDomainModule } from '../../../modules/attendee/domain'

import { EventattendeeByAttendeeController } from './eventattendeeByAttendee.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    EventattendeeDomainModule,

EventDomainModule,

AttendeeDomainModule,

],
  controllers: [
    EventattendeeController,
    
    EventattendeeByEventController,
    
    EventattendeeByAttendeeController,
    
  ],
  providers: [],
})
export class EventattendeeApplicationModule {}
