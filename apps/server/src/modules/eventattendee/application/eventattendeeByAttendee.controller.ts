import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { EventattendeeDomainFacade } from '@server/modules/eventattendee/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { EventattendeeApplicationEvent } from './eventattendee.application.event'
import { EventattendeeCreateDto } from './eventattendee.dto'

import { AttendeeDomainFacade } from '../../attendee/domain'

@Controller('/v1/attendees')
export class EventattendeeByAttendeeController {
  constructor(
    
    private attendeeDomainFacade: AttendeeDomainFacade,
    
    private eventattendeeDomainFacade: EventattendeeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/attendee/:attendeeId/eventattendees')
  async findManyAttendeeId(
    @Param('attendeeId') attendeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.attendeeDomainFacade.findOneByIdOrFail(
        attendeeId,
      )

    const items =
      await this.eventattendeeDomainFacade.findManyByAttendee(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/attendee/:attendeeId/eventattendees')
  async createByAttendeeId(
    @Param('attendeeId') attendeeId: string,
    @Body() body: EventattendeeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, attendeeId }

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
