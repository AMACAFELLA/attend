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
  Eventattendee,
  EventattendeeDomainFacade,
} from '@server/modules/eventattendee/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { EventattendeeApplicationEvent } from './eventattendee.application.event'
import {
  EventattendeeCreateDto,
  EventattendeeUpdateDto,
} from './eventattendee.dto'

@Controller('/v1/eventattendees')
export class EventattendeeController {
  constructor(
    private eventService: EventService,
    private eventattendeeDomainFacade: EventattendeeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.eventattendeeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: EventattendeeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.eventattendeeDomainFacade.create(body)

    await this.eventService.emit<EventattendeeApplicationEvent.EventattendeeCreated.Payload>(
      EventattendeeApplicationEvent
        .EventattendeeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:eventattendeeId')
  async findOne(
    @Param('eventattendeeId') eventattendeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.eventattendeeDomainFacade.findOneByIdOrFail(
        eventattendeeId,
        queryOptions,
      )

    return item
  }

  @Patch('/:eventattendeeId')
  async update(
    @Param('eventattendeeId') eventattendeeId: string,
    @Body() body: EventattendeeUpdateDto,
  ) {
    const item =
      await this.eventattendeeDomainFacade.findOneByIdOrFail(
        eventattendeeId,
      )

    const itemUpdated = await this.eventattendeeDomainFacade.update(
      item,
      body as Partial<Eventattendee>,
    )
    return itemUpdated
  }

  @Delete('/:eventattendeeId')
  async delete(@Param('eventattendeeId') eventattendeeId: string) {
    const item =
      await this.eventattendeeDomainFacade.findOneByIdOrFail(
        eventattendeeId,
      )

    await this.eventattendeeDomainFacade.delete(item)

    return item
  }
}
