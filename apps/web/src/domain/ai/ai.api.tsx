import { HttpService } from '../../core/http'

/**
 * @provider AiApi
 * @description An AI library to query OpenAI
 * @function {(prompt: string) => Promise<string>} chat - Send the prompt to OpenAI and get back its answer
 * @function {(prompt: string) => Promise<string>} generateImage - Send the prompt to OpenAI to generate an Image and get back the URL of the image in the answer
 * @usage `Api.Ai.query(prompt); Api.Ai.generateImage(prompt)`
 * @isImportOverriden false
 * @import import { Api } from '@web/domain'
 */
export class AiApi {
  static chat(prompt: string): Promise<string> {
    return HttpService.api
      .post<any>(`/v1/ai/chat`, { prompt })
      .then(({ answer }) => answer)
  }

  static generateImage(prompt: string): Promise<string> {
    return HttpService.api
      .post<any>(`/v1/ai/generateImage`, { prompt })
      .then(({ answer }) => answer)
  }
}
