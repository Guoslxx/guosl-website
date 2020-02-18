import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
@ApiTags('标签')
export class TagController {
    constructor(private readonly tagService: TagService) { }

    @Get()
    findAll() {
        return this.tagService.findAll();
    }

    @Post()
    create(@Body() tag: TagEntity) {
        return this.tagService.create(tag);
    }
}
