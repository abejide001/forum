import { Field, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field(() => String)
    @CreateDateColumn()
    createdAt = Date

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
}