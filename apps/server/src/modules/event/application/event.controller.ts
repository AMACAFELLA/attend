import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Event,
  EventDomainFacade,
} from '@server/modules/event/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { EventApplicationEvent } from './event.application.event'
import {
  EventCreateDto,
  EventUpdateDto,
} from './event.dto'

@Controller('/v1/events')
export class EventController {
  constructor(
    private eventService: EventService,
    private eventDomainFacade: EventDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.eventDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: EventCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.eventDomainFacade.create(body)

    await this.eventService.emit<EventApplicationEvent.EventCreated.Payload>(
      EventApplicationEvent
        .EventCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:eventId')
  async findOne(
    @Param('eventId') eventId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.eventDomainFacade.findOneByIdOrFail(
        eventId,
        queryOptions,
      )

    return item
  }

  @Patch('/:eventId')
  async update(
    @Param('eventId') eventId: string,
    @Body() body: EventUpdateDto,
  ) {
    const item =
      await this.eventDomainFacade.findOneByIdOrFail(
        eventId,
      )

    const itemUpdated = await this.eventDomainFacade.update(
      item,
      body as Partial<Event>,
    )
    return itemUpdated
  }

  @Delete('/:eventId')
  async delete(@Param('eventId') eventId: string) {
    const item =
      await this.eventDomainFacade.findOneByIdOrFail(
        eventId,
      )

    await this.eventDomainFacade.delete(item)

    return item
  }
}
