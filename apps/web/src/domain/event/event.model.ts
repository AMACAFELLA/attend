

import { User } from "../user"

import { Attendee } from "../attendee"

import { Eventattendee } from "../eventattendee"

export class Event {

id: string

title: string

description?: string

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

attendees?: Attendee[]

eventattendees?: Eventattendee[]

}
