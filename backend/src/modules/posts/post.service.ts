import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    async findAll(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async created(post: Partial<Post>): Promise<Post> {
        const createPost = this.postRepository.create(post);
        return await this.postRepository.save(createPost);
    }

    // async updateById(post: Post): Promise<{ success: boolean, data: Post }> {
    //     // this.postRepository.merge
    //     //     return {
    //     //     success: true,

    //     // };
    // }
}