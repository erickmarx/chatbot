import { Inject, Injectable } from '@nestjs/common';
import { OpenAIProvider } from './openai/openai.provider';
import { ConversationChain } from 'langchain/chains';
import { FirestoreChatMessageHistory } from '@langchain/community/stores/message/firestore';
import { BufferMemory } from 'langchain/memory';

@Injectable()
export class LangchainProvider {
  constructor(
    private openAIProvider: OpenAIProvider,
    @Inject(FirestoreChatMessageHistory)
    private firestoreChatMessageHistory: FirestoreChatMessageHistory,
  ) {}

  async talk(sessionId: string, content: string) {
    const chain = new ConversationChain({
      llm: this.openAIProvider.chatOpenAI,
      memory: this.prepareBufferMemory(sessionId),
    });

    return await chain.predict({ input: content });
  }

  private prepareBufferMemory(sessionId: string) {
    const firestoreMemory = Object.assign(
      Object.create(Object.getPrototypeOf(this.firestoreChatMessageHistory)),
      this.firestoreChatMessageHistory,
      { sessionId, userId: sessionId },
    );

    firestoreMemory['document']['_path']['segments'] = [
      ...firestoreMemory['collections'],
      sessionId,
    ];

    return new BufferMemory({
      chatHistory: firestoreMemory,
    });
  }
}
