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
    return NextResponse.json({
        message: result,
        setexpiry: setexpiry
    })
}