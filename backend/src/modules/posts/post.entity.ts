import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ObjectIdColumn, ObjectID, JoinTable } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { TagEntity } from "../tag/tag.entity";

@Entity()
export class Post {
    @ObjectIdColumn()
    id: ObjectID;

    @ApiProperty({ description: '文章标题' })
    @Column()
    title: string;

    @ApiProperty({ description: '文章内容' })
    @Column({ type: 'mediumtext', default: null, charset: 'utf8mb4' })
    // 原始内容
    content: string;

    @ManyToMany(
        () => TagEntity,
        tag => tag.posts,
        { cascade: true }
    )
    @JoinTable()
    tags: Array<TagEntity>;


    // @Column({ default: null })
    // // 封面图
    // cover: string;

    // @Column({ type: 'text', default: null })
    // // 摘要，自动生成
    // summary: string;

    // @Column({ type: 'mediumtext', default: null, charset: 'utf8mb4' })
    // // 格式化内容，自动生成
    // html: string; 

    // @Column({ type: 'text', default: null })
    // // 格式化内容索引，自动生成
    // toc: string; 

    @ApiProperty({ description: '状态' })
    @Column('simple-enum', { enum: ['draft', 'publish'] })
    // 文章状态
    status: string;

    // @Column({ type: 'int', default: 0 })
    // // 阅读量
    // views: number; 

    // @Column({ type: 'text', default: null, select: false })
    // password: string;

    // @Column({ type: 'boolean', default: false })
    // needPassword: boolean;

    // @Column({ type: 'boolean', default: true })
    // isCommentable: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // 发布日期
    publishAt: Date;

    @CreateDateColumn({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    })
    createAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    })
    updateAt: Date;

}