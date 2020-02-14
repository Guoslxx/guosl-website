import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { PostsModule } from './modules/posts/posts.module';
import { PostsController } from './modules/posts/posts.controller';
import { PostService } from './modules/posts/post.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from './modules/test/test.service';
import { Post } from './modules/posts/post.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [Post],
    }),
    PostsModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
