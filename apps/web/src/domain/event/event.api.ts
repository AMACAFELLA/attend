import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Event } from './event.model'

export class EventApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/events${buildOptions}`)
  }

  static findOne(
    eventId: string,
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/events/${eventId}${buildOptions}`,
    )
  }

  static createOne(
    event: Partial<Event>,
  ): Promise<Event> {
    return HttpService.api.post(`/v1/events`, event)
  }

  static updateOne(
    eventId: string,
    values: Partial<Event>,
  ): Promise<Event> {
    return HttpService.api.patch(
      `/v1/events/${eventId}`,
      values,
    )
  }

  static deleteOne(eventId: string): Promise<void> {
    return HttpService.api.delete(`/v1/events/${eventId}`)
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Event>,
  ): Promise<Event[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/events${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Event>,
  ): Promise<Event> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/events`,
      values,
    )
  }

}
