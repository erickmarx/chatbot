import { Module } from '@nestjs/common';
import { OpenAIModule } from './openai/openai.module';
import { CONFIG } from '../../config/config';
import { LangchainProvider } from './langchain.provider';

@Module({
  imports: [OpenAIModule.register(CONFIG.OPENAI)],
  providers: [LangchainProvider],
  exports: [LangchainProvider, OpenAIModule],
})
export class LangchainModule {}
