import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestconnectionModule } from './testconnection/testconnection.module';

@Module({
  imports: [TestconnectionModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }