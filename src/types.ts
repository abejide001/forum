import { Redis } from 'ioredis';
import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express"

export type MyContext = {
    req: Request
    res: Response
    redis: Redis
}