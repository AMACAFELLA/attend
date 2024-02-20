import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AttendeeDomainFacade } from './attendee.domain.facade'
import { Attendee } from './attendee.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendee]),
    DatabaseHelperModule,
  ],
  providers: [
    AttendeeDomainFacade,
    AttendeeDomainFacade,
  ],
  exports: [AttendeeDomainFacade],
})
export class AttendeeDomainModule {}
