import { Controller, Get } from '@nestjs/common';
import { TestconnectionService } from './testconnection.service';

@Controller('testconnection') // 👉 la ruta será /api/testconnection
export class TestconnectionController {
    constructor(private readonly testconnectionService: TestconnectionService) { }

    @Get('ping')
    ping() {
        return this.testconnectionService.ping();
    }
}