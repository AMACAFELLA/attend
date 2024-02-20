export namespace EventApplicationEvent {
  export namespace EventCreated {
    export const key = 'event.application.event.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
