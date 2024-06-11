import { DynamicModule, Module } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { CONFIG } from '../../../config/config';
import { OpenAIProvider } from './openai.provider';

@Module({})
export class OpenAIModule {
  static register(config: (typeof CONFIG)['OPENAI']): DynamicModule {
    return {
      module: OpenAIModule,
      providers: [
        {
          provide: ChatOpenAI,
          useValue: new ChatOpenAI({
            apiKey: config.API_KEY,
            temperature: config.TEMPERATURE,
            verbose: config.VERBOSE,
            model: config.MODEL,
          }),
        },
        OpenAIProvider,
      ],
      exports: [OpenAIProvider],
    };
  }
}
