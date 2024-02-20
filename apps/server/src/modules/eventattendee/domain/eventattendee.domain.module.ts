import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { EventattendeeDomainFacade } from './eventattendee.domain.facade'
import { Eventattendee } from './eventattendee.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Eventattendee]),
    DatabaseHelperModule,
  ],
  providers: [
    EventattendeeDomainFacade,
    EventattendeeDomainFacade,
  ],
  exports: [EventattendeeDomainFacade],
})
export class EventattendeeDomainModule {}
