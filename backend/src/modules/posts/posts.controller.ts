import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('posts')
@ApiTags('文章')
export class PostsController {
    constructor(private readonly postService: PostService) { }

    @Get()
    @ApiOperation({ summary: '文章列表' })
    index() {
        return this.postService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: '查询单个文章' })
    detail() {
        return true;
    }

    @Post()
    @ApiOperation({ summary: '创建文章' })
    create(@Body() post) {
        return this.postService.created(post);
    }

    @Put(':id')
    @ApiOperation({ summary: '更新文章' })
    update(@Body() updatePostDto: PostEntity) {

        return true;
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除文章' })
    remove() {
        return true;
    }
}
