import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { EventApplicationModule } from './event/application'

import { AttendeeApplicationModule } from './attendee/application'

import { EventattendeeApplicationModule } from './eventattendee/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

EventApplicationModule,

AttendeeApplicationModule,

EventattendeeApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
