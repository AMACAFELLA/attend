export namespace EventattendeeApplicationEvent {
  export namespace EventattendeeCreated {
    export const key = 'eventattendee.application.eventattendee.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
