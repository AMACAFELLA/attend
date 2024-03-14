import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Attendee } from './attendee.model'

export class AttendeeApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Attendee>,
  ): Promise<Attendee[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/attendees${buildOptions}`)
  }

  static findOne(
    attendeeId: string,
    queryOptions?: ApiHelper.QueryOptions<Attendee>,
  ): Promise<Attendee> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/attendees/${attendeeId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Attendee>,
  ): Promise<Attendee> {
    return HttpService.api.post(`/v1/attendees`, values)
  }

  static updateOne(
    attendeeId: string,
    values: Partial<Attendee>,
  ): Promise<Attendee> {
    return HttpService.api.patch(
      `/v1/attendees/${attendeeId}`,
      values,
    )
  }

  static deleteOne(attendeeId: string): Promise<void> {
    return HttpService.api.delete(`/v1/attendees/${attendeeId}`)
  }

static findManyByEventId(
    eventId: string,
    queryOptions?: ApiHelper.QueryOptions<Attendee>,
  ): Promise<Attendee[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/events/event/${eventId}/attendees${buildOptions}`,
    )
  }

  static createOneByEventId(
    eventId: string,
    values: Partial<Attendee>,
  ): Promise<Attendee> {
    return HttpService.api.post(
      `/v1/events/event/${eventId}/attendees`,
      values,
    )
  }

}
