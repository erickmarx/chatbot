import { Module } from '@nestjs/common';
import { LangchainModule } from './langchain/langchain.module';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [LangchainModule, GoogleModule],
  exports: [LangchainModule, GoogleModule],
})
export class AdapterModule {}
