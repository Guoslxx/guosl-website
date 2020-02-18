import { ObjectIdColumn, ObjectID, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Post } from "../posts/post.entity";

@Entity()
export class TagEntity {
    @ObjectIdColumn()
    id: ObjectID

    @ApiProperty({ title: '标签名' })
    @Column()
    label: string

    @ApiProperty({ title: '标签图标' })
    @Column()
    icon: string

    @ManyToMany(() => Post, post => post.tags)
    posts: Array<Post>

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