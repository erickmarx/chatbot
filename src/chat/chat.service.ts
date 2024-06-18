import { Injectable, Scope } from '@nestjs/common';
import { LangchainProvider } from '../shared/adapter/langchain/langchain.provider';

@Injectable({ scope: Scope.REQUEST })
export class ChatService {
  constructor(private langchainProvider: LangchainProvider) {}

  async chat(sessionId: string, content: string) {
    return await this.langchainProvider.talk(sessionId, content);
  }
}
