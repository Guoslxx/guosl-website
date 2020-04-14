import { Module } from '@nestjs/common';
import { WechatController } from './wechat.controller';
@Module({
  controllers: [WechatController],
  providers: [],
})
export class WechatModule { }
