import { Body, Controller, Post, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { NotEmptyPipe } from '../shared/pipe/not-empty.pipe';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async talkChat(
    @Body('content', NotEmptyPipe) content: string,
    @Query('sessionId', NotEmptyPipe) sessionId: string,
  ) {
    return { data: await this.chatService.chat(sessionId, content) };
  }
}
