import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { AdapterModule } from './shared/adapter/adapter.module';

@Module({
  imports: [AdapterModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
