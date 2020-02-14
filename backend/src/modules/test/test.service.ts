import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    saySuccess(): string {
        return 'test success';
    }
}
