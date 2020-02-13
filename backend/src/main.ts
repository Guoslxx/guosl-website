import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerSetup from './SwaggerSetup';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置swagger文档
  SwaggerSetup(app);

  await app.listen(3000);
}
bootstrap();
