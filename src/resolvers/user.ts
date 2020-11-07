import { User } from './../entities/User';
import { MyContext } from './../types';
import { Resolver, Mutation, InputType, Field, Arg, Ctx, ObjectType, Query } from "type-graphql"
import argon2 from "argon2"

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string

    @Field()
    message: string
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]

    @Field(() => User, { nullable: true })
    user?: User
}

@Resolver()
export class UserResolver {
    @Query(() => User, { nullable: true })
    async me(@Ctx() { req, em }: MyContext) {
        if (!req.session!.userId) {
            return null
        }

        const user = await em.findOne(User, { id: req.session!.userId })
        return user
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('data') data: UsernamePasswordInput,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        const checkUser = await em.findOne(User, { username: data.username })
        if (checkUser) {
            return {
                errors: [{
                    field: "username",
                    message: "user already exist"
                }]
            }
        }
        if (data.username.length <= 2) {
            return {
                errors: [{
                    field: 'username',
                    message: 'length must be greater than 2'
                }]
            }
        }

        if (data.password.length <= 2) {
            return {
                errors: [{
                    field: 'password',
                    message: 'length must be greater than 2'
                }]
            }
        }

        const hashedPassword = await argon2.hash(data.password)
        const user = em.create(User, { username: data.username, password: hashedPassword })
        await em.persistAndFlush(user)
        req.session!.userId = user.id
        return {
            user
        }
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('data') data: UsernamePasswordInput,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, { username: data.username })
        if (!user) {
            return {
                errors: [{
                    field: 'username',
                    message: 'invalid credentials'
                }]
            }
        }

        const password = await argon2.verify(user.password, data.password)
        if (!password) {
            return {
                errors: [{
                    field: 'password',
                    message: 'invalid credentials'
                }]
            }
        }
        req.session!.userId = user.id
        return {
            user
        }
    }
}