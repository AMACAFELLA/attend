import { Module } from '@nestjs/common'
import { OpenaiModule } from '@server/libraries/openai/openai.module'
import { AIApplicationException } from './ai.application.exception'
import { AiController } from './ai.controller'

@Module({
  imports: [OpenaiModule],
  controllers: [AiController],
  providers: [AIApplicationException],
})
export class AiApplicationModule {}
