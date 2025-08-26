import { Module } from '@nestjs/common';
import { TestconnectionController } from './testconnection.controller';
import { TestconnectionService } from './testconnection.service';

@Module({
    controllers: [TestconnectionController],
    providers: [TestconnectionService],
})
export class TestconnectionModule { }