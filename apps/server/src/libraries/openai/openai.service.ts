import { Injectable } from '@nestjs/common'
import { Openai } from './internal/openai'

@Injectable()
export class OpenaiService {
  constructor(private openai: Openai) {}

  async chat(prompt: string): Promise<string> {
    return this.openai.chat(prompt)
  }

  async generateImage(prompt: string): Promise<string> {
    return this.openai.generateImage(prompt)
  }

  isActive(): boolean {
    return this.openai.isActive()
  }
}
