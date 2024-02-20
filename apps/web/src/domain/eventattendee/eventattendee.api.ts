import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Eventattendee } from './eventattendee.model'

export class EventattendeeApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Eventattendee>,
  ): Promise<Eventattendee[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/eventattendees${buildOptions}`)
  }

  static findOne(
    eventattendeeId: string,
    queryOptions?: ApiHelper.QueryOptions<Eventattendee>,
  ): Promise<Eventattendee> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/eventattendees/${eventattendeeId}${buildOptions}`,
    )
  }

  static createOne(
    eventattendee: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    return HttpService.api.post(`/v1/eventattendees`, eventattendee)
  }

  static updateOne(
    eventattendeeId: string,
    values: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    return HttpService.api.patch(
      `/v1/eventattendees/${eventattendeeId}`,
      values,
    )
  }

  static deleteOne(eventattendeeId: string): Promise<void> {
    return HttpService.api.delete(`/v1/eventattendees/${eventattendeeId}`)
  }

static findManyByEventId(
    eventId: string,
    queryOptions?: ApiHelper.QueryOptions<Eventattendee>,
  ): Promise<Eventattendee[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/events/event/${eventId}/eventattendees${buildOptions}`,
    )
  }

  static createOneByEventId(
    eventId: string,
    values: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    return HttpService.api.post(
      `/v1/events/event/${eventId}/eventattendees`,
      values,
    )
  }

static findManyByAttendeeId(
    attendeeId: string,
    queryOptions?: ApiHelper.QueryOptions<Eventattendee>,
  ): Promise<Eventattendee[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/attendees/attendee/${attendeeId}/eventattendees${buildOptions}`,
    )
  }

  static createOneByAttendeeId(
    attendeeId: string,
    values: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    return HttpService.api.post(
      `/v1/attendees/attendee/${attendeeId}/eventattendees`,
      values,
    )
  }

}
