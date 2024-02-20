import { Body, Controller, Post } from '@nestjs/common'
import { OpenaiService } from '@server/libraries/openai'
import { AiChatBody, AiGenerateImageBody } from './ai.dto'
import { AIApplicationException } from './ai.application.exception'

@Controller('/v1/ai')
export class AiController {
  constructor(
    private openaiService: OpenaiService,
    private exception: AIApplicationException,
  ) {}

  @Post('/chat')
  async chat(@Body() body: AiChatBody) {
    const { prompt } = body

    if (!this.openaiService.isActive()) {
      this.exception.openaiNotActivated()
    }

    try {
      const answer = await this.openaiService.chat(prompt)
      return { answer }
    } catch (error) {
      this.exception.openaiError(error)
    }
  }

  @Post('/generateImage')
  async generateImage(@Body() body: AiGenerateImageBody) {
    const { prompt } = body

    if (!this.openaiService.isActive()) {
      this.exception.openaiNotActivated()
    }

    try {
      const answer = await this.openaiService.generateImage(prompt)
      return { answer }
    } catch (error) {
      this.exception.openaiError(error)
    }
  }
}
