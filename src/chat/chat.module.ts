import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { LangchainModule } from '../shared/adapter/langchain/langchain.module';
import { GoogleModule } from '../shared/adapter/google/google.module';

@Module({
  imports: [LangchainModule, GoogleModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
