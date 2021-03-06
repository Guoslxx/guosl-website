import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default (app: INestApplication) => {
    const option = new DocumentBuilder()
        .setTitle('ApiDoc')
        .setDescription('个人网站的API文档')
        .setVersion('1.0')
        .build();

    const documcent = SwaggerModule.createDocument(app, option);
    SwaggerModule.setup('swagger', app, documcent);
}