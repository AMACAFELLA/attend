

import { Event } from "../event"

import { Attendee } from "../attendee"

export class Eventattendee {

id: string

checkInTime?: string

checkOutTime?: string

eventId: string

event?: Event

attendeeId: string

attendee?: Attendee

dateCreated: string

dateDeleted: string

dateUpdated: string

}
