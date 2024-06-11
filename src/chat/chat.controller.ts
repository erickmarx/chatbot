import { Body, Controller, Post, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async talkChat(
    @Body('content') content: string,
    @Query('sessionId') sessionId: string,
  ) {
    return await this.chatService.chat(sessionId, content);
  }
}
