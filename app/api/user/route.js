import { NextResponse } from "next/server";
import {redis} from "../../../lib/redis";
export async function GET(request){
    await redis.set("user:1", "kirtan");
    await redis.set("user:2","thakkar")
    await redis.set("user:3","All is well")

    await redis.get("user:1");
    const result = await redis.mget("user:1","user:2","user:3")

    //set + expiry
    // await redis.setex("user:4",60,"This is user 4")
    const setexpiry = await redis.get("user:4")

    await redis.setnx("user:4","THIS IS THE NEW USER 4 CREATED AFTER THE FIRST USER:4 GOT EXPIRED IN 60S");
    const result2 = await redis.get("user:4")
    return NextResponse.json({
        message: result,
        setexpiry: result2
    })
}