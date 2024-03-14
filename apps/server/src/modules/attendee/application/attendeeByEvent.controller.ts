import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AttendeeDomainFacade } from '@server/modules/attendee/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AttendeeApplicationEvent } from './attendee.application.event'
import { AttendeeCreateDto } from './attendee.dto'

import { EventDomainFacade } from '../../event/domain'

@Controller('/v1/events')
export class AttendeeByEventController {
  constructor(
    
    private eventDomainFacade: EventDomainFacade,
    
    private attendeeDomainFacade: AttendeeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/event/:eventId/attendees')
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
      await this.attendeeDomainFacade.findManyByEvent(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/event/:eventId/attendees')
  async createByEventId(
    @Param('eventId') eventId: string,
    @Body() body: AttendeeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, eventId }

    const item = await this.attendeeDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AttendeeApplicationEvent.AttendeeCreated.Payload>(
      AttendeeApplicationEvent
        .AttendeeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
