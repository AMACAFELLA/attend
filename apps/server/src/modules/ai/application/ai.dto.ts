import { IsNotEmpty, IsString } from 'class-validator'

export class AiChatBody {
  @IsNotEmpty()
  @IsString()
  prompt: string
}
export class AiGenerateImageBody {
  @IsNotEmpty()
  @IsString()
  prompt: string
}
