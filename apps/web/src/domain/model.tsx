import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Event as EventModel } from './event/event.model'

import { Attendee as AttendeeModel } from './attendee/attendee.model'

import { Eventattendee as EventattendeeModel } from './eventattendee/eventattendee.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  
  export class User extends UserModel {}
  
  export class Notification extends NotificationModel {}
  
  export class Event extends EventModel {}
  
  export class Attendee extends AttendeeModel {}
  
  export class Eventattendee extends EventattendeeModel {}
  
}
