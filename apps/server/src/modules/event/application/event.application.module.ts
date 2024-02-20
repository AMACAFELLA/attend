import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { EventDomainModule } from '../domain'
import { EventController } from './event.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { EventByUserController } from './eventByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    EventDomainModule,

UserDomainModule,

],
  controllers: [
    EventController,
    
    EventByUserController,
    
  ],
  providers: [],
})
export class EventApplicationModule {}
