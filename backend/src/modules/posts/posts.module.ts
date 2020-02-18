import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { TagModule } from '../tag/tag.module';
@Module({
  imports: [TypeOrmModule.forFeature([Post]),TagModule],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule { }
