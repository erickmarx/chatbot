import { ChatOpenAI } from '@langchain/openai';
import { Inject } from '@nestjs/common';

export class OpenAIProvider {
  constructor(@Inject(ChatOpenAI) public chatOpenAI: ChatOpenAI) {}
}
