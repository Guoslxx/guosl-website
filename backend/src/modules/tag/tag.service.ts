import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TagService {
    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>,
    ) {

    }

    async findAll() {
        return this.tagRepository.find();
    }

    async create(tag: Partial<TagEntity>): Promise<TagEntity> {
        const { label } = tag;
        const exist = await this.tagRepository.findOne({ where: { label } })
        if (exist) {
            throw new HttpException('此标签已存在', HttpStatus.BAD_REQUEST)
        }
        const newTag = this.tagRepository.create(tag);
        await this.tagRepository.save(newTag);

        return newTag;
    }

    async findByIds(ids): Promise<Array<TagEntity>> {
        return this.tagRepository.findByIds(ids);
    }
}
