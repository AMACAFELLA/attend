import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AttendeeDomainModule } from '../domain'
import { AttendeeController } from './attendee.controller'

import { EventDomainModule } from '../../../modules/event/domain'

import { AttendeeByEventController } from './attendeeByEvent.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AttendeeDomainModule,

EventDomainModule,

],
  controllers: [
    AttendeeController,
    
    AttendeeByEventController,
    
  ],
  providers: [],
})
export class AttendeeApplicationModule {}
