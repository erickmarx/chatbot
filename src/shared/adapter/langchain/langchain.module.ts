import { Module } from '@nestjs/common';
import { OpenAIModule } from './openai/openai.module';
import { CONFIG } from '../../config/config';
import { LangchainProvider } from './langchain.provider';
import { GoogleModule } from '../google/google.module';
import { FirestoreChatMessageHistory } from '@langchain/community/stores/message/firestore';
import admin from 'firebase-admin';

@Module({
  imports: [OpenAIModule.register(CONFIG.OPENAI), GoogleModule],
  providers: [
    LangchainProvider,
    {
      provide: FirestoreChatMessageHistory,
      useFactory: () =>
        new FirestoreChatMessageHistory({
          collections: ['chatbot'],
          sessionId: 'sessionId',
          userId: 'userId',
          config: {
            projectId: CONFIG.GOOGLE.PROJECT_ID,
            credential: admin.credential.cert({
              privateKey: CONFIG.GOOGLE.FIRESTORE.PRIVATE_KEY,
              clientEmail: CONFIG.GOOGLE.FIRESTORE.CLIENT_EMAIL,
              projectId: CONFIG.GOOGLE.PROJECT_ID,
            }),
          },
        }),
    },
  ],
  exports: [LangchainProvider, FirestoreChatMessageHistory, OpenAIModule],
})
export class LangchainModule {}
