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

  async contextualize(context: string, content: string) {
    const contextualizeQSystemPrompt = `Given a chat history and the latest user question
    which might reference context in the chat history, formulate a standalone question
    which can be understood without the chat history. Do NOT answer the question,
    just reformulate it if needed and otherwise return it as is.`;

    const contextualizeQPrompt = ChatPromptTemplate.fromMessages([
      new SystemMessage(contextualizeQSystemPrompt),
      new MessagesPlaceholder('chat_history'),
      ['human', '{question}'],
    ]);
    const contextualizeQChain = contextualizeQPrompt
      .pipe(this.openAIProvider.chatOpenAI)
      .pipe(new StringOutputParser());

    await contextualizeQChain.invoke({
      chat_history: [
        new HumanMessage('What does LLM stand for?'),
        new AIMessage('Large language model'),
      ],
      question: 'What is meant by large',
    });
  }
}
