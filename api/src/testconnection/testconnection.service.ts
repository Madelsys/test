import { Injectable } from '@nestjs/common';

@Injectable()
export class TestconnectionService {
    ping() {
        return {
            ok: true,
            msg: 'pong desde Testconnection',
            ts: new Date().toISOString(),
        };
    }
}