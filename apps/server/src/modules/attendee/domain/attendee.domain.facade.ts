import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Attendee } from './attendee.model'

import { Event } from '../../event/domain'

@Injectable()
export class AttendeeDomainFacade {
  constructor(
    @InjectRepository(Attendee)
    private repository: Repository<Attendee>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Attendee>,
  ): Promise<Attendee> {
    return this.repository.save(values)
  }

  async update(
    item: Attendee,
    values: Partial<Attendee>,
  ): Promise<Attendee> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Attendee): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Attendee> = {},
  ): Promise<Attendee[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Attendee> = {},
  ): Promise<Attendee> {
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
    queryOptions: RequestHelper.QueryOptions<Attendee> = {},
  ): Promise<Attendee[]> {
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

}
