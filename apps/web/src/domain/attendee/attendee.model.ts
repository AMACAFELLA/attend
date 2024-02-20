

import { Event } from "../event"

import { Eventattendee } from "../eventattendee"

export class Attendee {

id: string

firstName: string

lastName: string

email: string

status: string

eventId: string

event?: Event

dateCreated: string

dateDeleted: string

dateUpdated: string

eventattendees?: Eventattendee[]

}
