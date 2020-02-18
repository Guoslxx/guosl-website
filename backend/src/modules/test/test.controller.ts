import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('test')
@ApiTags('测试路由')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @Get()
    index() {
        return this.testService.saySuccess();
    }
}
