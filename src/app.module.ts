import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatModule } from './chat/chat.module';
import { AdapterModule } from './shared/adapter/adapter.module';

@Module({
  imports: [AdapterModule, ChatModule],
  controllers: [AppController],
})
export class AppModule {}
