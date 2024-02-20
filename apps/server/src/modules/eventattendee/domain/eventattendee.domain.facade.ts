import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Eventattendee } from './eventattendee.model'

import { Event } from '../../event/domain'

import { Attendee } from '../../attendee/domain'

@Injectable()
export class EventattendeeDomainFacade {
  constructor(
    @InjectRepository(Eventattendee)
    private repository: Repository<Eventattendee>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    return this.repository.save(values)
  }

  async update(
    item: Eventattendee,
    values: Partial<Eventattendee>,
  ): Promise<Eventattendee> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Eventattendee): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Eventattendee> = {},
  ): Promise<Eventattendee[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Eventattendee> = {},
  ): Promise<Eventattendee> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByEvent(
    event: Event,
    queryOptions: RequestHelper.QueryOptions<Eventattendee> = {},
  ): Promise<Eventattendee[]> {
    if (!event) {
      this.databaseHelper.invalidQueryWhere('event')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        eventId: event.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

async findManyByAttendee(
    attendee: Attendee,
    queryOptions: RequestHelper.QueryOptions<Eventattendee> = {},
  ): Promise<Eventattendee[]> {
    if (!attendee) {
      this.databaseHelper.invalidQueryWhere('attendee')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        attendeeId: attendee.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
