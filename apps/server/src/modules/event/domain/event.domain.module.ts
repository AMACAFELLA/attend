import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { EventDomainFacade } from './event.domain.facade'
import { Event } from './event.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    DatabaseHelperModule,
  ],
  providers: [
    EventDomainFacade,
    EventDomainFacade,
  ],
  exports: [EventDomainFacade],
})
export class EventDomainModule {}
