import { NextResponse } from "next/server";
import {redis} from "../../../lib/redis";
export async function GET(request){
    await redis.set("user:1", "kirtan");
    await redis.set("user:2","thakkar")
    await redis.set("user:3","All is well")

    const result = await redis.mget("user:1","user:2","user:3")

    // await redis.expire("user:1",5);
    await redis.setnx("user:1","This is the new user 1 created after the first user:1 got expired in 10s");
    const user1 = await redis.get("user:1")

    //set + expiry
    // await redis.setex("user:4",60,"This is user 4")
    const setexpiry = await redis.get("user:4")

    await redis.setnx("user:4","THIS IS THE NEW USER 4 CREATED AFTER THE FIRST USER:4 GOT EXPIRED IN 60S Okay so make sure that you have the TTL of user:4 to be less than 60s to see the effect of setnx command");
    const result2 = await redis.get("user:4")

    //one  more set + expiry which would expire in 120s
    const result1 = await redis.setex("user5",120,"This is the user5 mother fucker")

    const result5  = await redis.get("user5");
    return NextResponse.json({
        setexpiry: user1,
        setex: result1,
        get: result5
    })
}