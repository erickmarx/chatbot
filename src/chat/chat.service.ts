import { Injectable } from '@nestjs/common';
import { LangchainProvider } from '../shared/adapter/langchain/langchain.provider';

const summaryHistory = {};

@Injectable()
export class ChatService {
  constructor(private langchainService: LangchainProvider) {}

  async chat(sessionId: string, content: string) {
    const history = summaryHistory[sessionId];

    const answer = await this.langchainService.talk(content, history);

    const summary = await this.langchainService.summarize(
      answer.content as string,
      history,
    );

    summaryHistory[sessionId] = summary.text;

    return answer.content;
  }
}
