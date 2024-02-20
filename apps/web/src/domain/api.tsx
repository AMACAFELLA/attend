import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { EventApi } from './event/event.api'

import { AttendeeApi } from './attendee/attendee.api'

import { EventattendeeApi } from './eventattendee/eventattendee.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}
  
  export class User extends UserApi {}
  
  export class Notification extends NotificationApi {}
  
  export class Event extends EventApi {}
  
  export class Attendee extends AttendeeApi {}
  
  export class Eventattendee extends EventattendeeApi {}
  
}
