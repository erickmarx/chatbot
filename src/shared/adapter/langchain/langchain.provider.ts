import { Injectable } from '@nestjs/common';
import { OpenAIProvider } from './openai/openai.provider';
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from '@langchain/core/messages';
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';
import { loadSummarizationChain } from 'langchain/chains';

import { StringOutputParser } from '@langchain/core/output_parsers';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Document } from '@langchain/core/documents';

@Injectable()
export class LangchainProvider {
  constructor(private openAIProvider: OpenAIProvider) {}

  async talk(content: string, summary?: string) {
    const inputVariables = summary
      ? [
          new SystemMessage({
            content: `Utilizando este sumario das conversas anteriores: ${summary}\n\n Responda a pergunta:`,
          }),
          new HumanMessage({ content }),
        ]
      : [new HumanMessage({ content })];

    return await this.openAIProvider.chatOpenAI.invoke(inputVariables, {});
  }

  async summarize(question: string, previousSummary?: string) {
    const summarizationChain = loadSummarizationChain(
      this.openAIProvider.chatOpenAI,
    );

    const document = new Document({
      pageContent: previousSummary
        ? `${previousSummary}\n\n${question}`
        : question,
    });

    return await summarizationChain.invoke({
      input_documents: [document],
    });
  }
}
