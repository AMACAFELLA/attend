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
  Attendee,
  AttendeeDomainFacade,
} from '@server/modules/attendee/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AttendeeApplicationEvent } from './attendee.application.event'
import {
  AttendeeCreateDto,
  AttendeeUpdateDto,
} from './attendee.dto'

@Controller('/v1/attendees')
export class AttendeeController {
  constructor(
    private eventService: EventService,
    private attendeeDomainFacade: AttendeeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.attendeeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: AttendeeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.attendeeDomainFacade.create(body)

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

  @Get('/:attendeeId')
  async findOne(
    @Param('attendeeId') attendeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.attendeeDomainFacade.findOneByIdOrFail(
        attendeeId,
        queryOptions,
      )

    return item
  }

  @Patch('/:attendeeId')
  async update(
    @Param('attendeeId') attendeeId: string,
    @Body() body: AttendeeUpdateDto,
  ) {
    const item =
      await this.attendeeDomainFacade.findOneByIdOrFail(
        attendeeId,
      )

    const itemUpdated = await this.attendeeDomainFacade.update(
      item,
      body as Partial<Attendee>,
    )
    return itemUpdated
  }

  @Delete('/:attendeeId')
  async delete(@Param('attendeeId') attendeeId: string) {
    const item =
      await this.attendeeDomainFacade.findOneByIdOrFail(
        attendeeId,
      )

    await this.attendeeDomainFacade.delete(item)

    return item
  }
}
