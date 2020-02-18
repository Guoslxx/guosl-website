import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { TagService } from "../tag/tag.service";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly tagService: TagService,
    ) { }

    /**
     * 获取所有文章
     */
    async findAll(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    /**
     * 获取指定文章
     * @param id
     */
    async findById(id: string): Promise<Post> {
        return await this.postRepository.findOne(id);
    }

    /**
     * 创建文章
     * @param post 
     */
    async created(post: Partial<Post>): Promise<Post> {
        const { title } = post;
        const exist = await this.postRepository.findOne({ where: { title } });
        if (exist) {
            throw new HttpException('文章标题已存在', HttpStatus.BAD_REQUEST);
        }

        let { tags } = post;
        tags = await this.tagService.findByIds(tags.map(e => e.id.toString()));
        const newPost = this.postRepository.create({
            ...post,
            tags
        });
        await this.postRepository.save(newPost);

        return newPost;
    }

    /**
     * 根据ID更新文章
     * @param id 
     * @param post 
     */
    async updateById(id: string, post: Partial<Post>): Promise<Post> {
        const oldPost = await this.postRepository.findOne(id);

        if (!oldPost) {
            throw new HttpException('此文章不存在', HttpStatus.BAD_REQUEST);
        }

        const updatePost = this.postRepository.merge(oldPost, post);

        return this.postRepository.save(updatePost);
    }

    /**
     * 根据ID删除指定文章
     * @param id 
     */
    async deleteById(id: string) {

        const post = await this.postRepository.findOne(id);

        return this.postRepository.remove(post);
    }
}