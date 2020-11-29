import { validateRegister } from './../utils/validateRegister';
import { User } from './../entities/User';
import { MyContext } from './../types';
import { Resolver, Mutation, Field, Arg, Ctx, ObjectType, Query } from "type-graphql"
import argon2 from "argon2"
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { sendEmail } from '../utils/sendEmai';
import { v4 } from 'uuid';

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

        const checkEmail = await em.findOne(User, { email: data.email })
        if (checkEmail) {
            return {
                errors: [{
                    field: "email",
                    message: "user already exist"
                }]
            }
        }
        const errors = validateRegister(data)
        if (errors) {
            return {
                errors
            }
        }
        const hashedPassword = await argon2.hash(data.password)
        const user = em.create(User, { username: data.username, password: hashedPassword, email: data.email })
        await em.persistAndFlush(user)
        req.session!.userId = user.id
        return {
            user
        }
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('usernameOrEmail') usernameOrEmail: string,
        @Arg('password') password: string,
        @Ctx() { em, req }: MyContext
    ): Promise<UserResponse> {
        const user = await em.findOne(User, usernameOrEmail.includes('@') ? { email: usernameOrEmail } : { username: usernameOrEmail })
        if (!user) {
            return {
                errors: [{
                    field: 'usernameOrEmail',
                    message: 'Invalid credentials'
                }]
            }
        }

        const validPassword = await argon2.verify(user.password, password)
        if (!validPassword) {
            return {
                errors: [{
                    field: 'password',
                    message: 'Invalid credentials'
                }]
            }
        }
        req.session!.userId = user.id
        return {
            user
        }
    }

    @Mutation(() => Boolean)
    logout(
        @Ctx(){ req, res }: MyContext
    ) {
       return new Promise(resolve => req.session?.destroy(err => {
            res.clearCookie('qid')
            if (err) {
                resolve(false)
                return
            }
            resolve(true)
        }))
    }

    @Mutation(()=> Boolean)
    async forgotPassword(
        @Arg('email') email: string,
        @Ctx() { em, redis } : MyContext
    ) {
        const user = await em.findOne(User, { email })
        if (!user) {
            return true
        }
        const token = v4()
        await redis.set(`forget-password${token}`, user.id, 'ex', 1000 * 60 * 60 * 24 * 3) // 3 days
        await sendEmail(email, `<a href="http://localhost:3000/change-password/${token} target="_blank"">reset password</a>`)
        return true
    }
}