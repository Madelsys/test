import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    check() {
        return { ok: true, msg: 'Test controller funcionando!' };
    }

    @Get('ping')
    ping() {
        return { pong: true, msg: 'Nest responde OK' };
    }
}