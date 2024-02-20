export namespace AttendeeApplicationEvent {
  export namespace AttendeeCreated {
    export const key = 'attendee.application.attendee.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
