import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('文章')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '文章列表' })
    index(): string {
        return 'posts'
    }

    @Get(':id')
    @ApiOperation({ summary: '查询单个文章' })
    detail(@Body() Body) {
        return true;
    }

    @Post()
    @ApiOperation({ summary: '创建文章' })
    create() {
        return true;
    }

    @Put(':id')
    @ApiOperation({ summary: '更新文章' })
    update() {
        return true;
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除文章' })
    remove() {
        return true;
    }
}
