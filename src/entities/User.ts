import { Post } from './Post';
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date()

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date()

    @Field(() => String)
    @Column({ type: 'text', unique: true })
    username!: string

    @Field(() => String)
    @Column({ type: 'text', unique: true })
    email!: string

    @Column({ type: 'text' })
    password!: string

    @OneToMany(() => Post, post => post.creator)
    posts: Post[]
}