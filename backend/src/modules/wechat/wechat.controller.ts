import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('wechat')
@ApiTags('微信')
export class WechatController {
    @Get()
    @ApiOperation({ summary: '微信接口' })
    index() {
        return 'wechat_api';
    }
}
