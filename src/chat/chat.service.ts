import { Injectable } from '@nestjs/common';
import { LangchainProvider } from '../shared/adapter/langchain/langchain.provider';
import { FirestoreProvider } from '../shared/adapter/google/firestore/firestore.provider';

@Injectable()
export class ChatService {
  constructor(
    private langchainService: LangchainProvider,
    private firestoreProvider: FirestoreProvider,
  ) {}

  async chat(sessionId: string, content: string) {
    const history = await this.firestoreProvider.get(sessionId);
    const dataHistory = history.data();
    let summary = '';

    if (dataHistory) {
      summary = dataHistory.value;
    }

    const answer = await this.langchainService.talk(content, summary);

    this.langchainService
      .summarize(summary, answer.content as string)
      .then(async (summarizedText) => {
        await this.firestoreProvider.set(sessionId, summarizedText.text);
      });

    return answer.content;
  }
}
