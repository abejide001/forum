import { Post } from './entities/Post';
import { MikroORM } from "@mikro-orm/core"
import microConfig from "./mikro-orm.config"

const main = async () => {
    const orm = await MikroORM.init(microConfig)
    await orm.getMigrator().up()
    const post = orm.em.create(Post, { title: "this is the post" })
    await orm.em.persistAndFlush(post)
}
main().catch(err => {
    console.log(err)
})