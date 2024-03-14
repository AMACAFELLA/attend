import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { EventattendeeDomainFacade } from '@server/modules/eventattendee/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { EventattendeeApplicationEvent } from './eventattendee.application.event'
import { EventattendeeCreateDto } from './eventattendee.dto'

import { EventDomainFacade } from '../../event/domain'

@Controller('/v1/events')
export class EventattendeeByEventController {
  constructor(
    
    private eventDomainFacade: EventDomainFacade,
    
    private eventattendeeDomainFacade: EventattendeeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/event/:eventId/eventattendees')
  async findManyEventId(
    @Param('eventId') eventId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.eventDomainFacade.findOneByIdOrFail(
        eventId,
      )

    const items =
      await this.eventattendeeDomainFacade.findManyByEvent(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/event/:eventId/eventattendees')
  async createByEventId(
    @Param('eventId') eventId: string,
    @Body() body: EventattendeeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, eventId }

    const item = await this.eventattendeeDomainFacade.create(valuesUpdated)

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
  
}
