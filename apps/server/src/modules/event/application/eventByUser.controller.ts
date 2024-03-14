import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { EventDomainFacade } from '@server/modules/event/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { EventApplicationEvent } from './event.application.event'
import { EventCreateDto } from './event.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class EventByUserController {
  constructor(
    
    private userDomainFacade: UserDomainFacade,
    
    private eventDomainFacade: EventDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/user/:userId/events')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.userDomainFacade.findOneByIdOrFail(
        userId,
      )

    const items =
      await this.eventDomainFacade.findManyByUser(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/user/:userId/events')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: EventCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.eventDomainFacade.create(valuesUpdated)

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
  
}
