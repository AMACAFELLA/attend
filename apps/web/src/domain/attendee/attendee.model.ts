import { Event } from '../event'

import { Eventattendee } from '../eventattendee'

export class Attendee {
  id: string

  firstName: string

  lastName: string

  email: string

  phoneNumber: string

  age: string

  roomNumber: string

  tShirtSize: string

  teamColor: string

  status: string

  eventId: string

  event?: Event

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  eventattendees?: Eventattendee[]
}
