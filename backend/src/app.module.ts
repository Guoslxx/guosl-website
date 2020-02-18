import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { PostsModule } from './modules/posts/posts.module';
// import { PostsController } from './modules/posts/posts.controller';
// import { PostService } from './modules/posts/post.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from './modules/test/test.service';
import { Post } from './modules/posts/post.entity';
import { TagModule } from './modules/tag/tag.module';
import { TagEntity as Tag } from './modules/tag/tag.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'nest-blog-api',
      username:'root',
      password:'root',
      entities: [Post, Tag],
      synchronize: true,
    }),
    PostsModule,
    TestModule,
    TagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
