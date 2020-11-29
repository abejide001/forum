import { __prod__ } from './constants';
import { UserResolver } from './resolvers/user';
import { PostResolver } from './resolvers/post';
import "reflect-metadata"
import { HelloResolver } from './resolvers/hello';
import { MikroORM } from "@mikro-orm/core"
import microConfig from "./mikro-orm.config"
import express from "express"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql"
import Redis from "ioredis"
import session from "express-session"
import cors from "cors"

const main = async () => {
    const orm = await MikroORM.init(microConfig)
    await orm.getMigrator().up()

    const app = express()
    let RedisStore = require('connect-redis')(session)
    let redis = new Redis()
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }))
    app.use(
        session({
            name: "qid",
            store: new RedisStore({ client: redis, disableTouch: true }),
            secret: "pukas",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: 'lax',
                secure: __prod__ // cookie only works in https
            }
        }),
    )
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ em: orm.em, req, res, redis })
    })

    apolloServer.applyMiddleware({ app, cors: false })
    const port = 4000 || process.env.PORT
    app.listen(port, () => {
        console.log(`server started at ${port}`)
    })
}
main().catch(err => {
    console.log(err)
})