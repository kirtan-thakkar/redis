import { NextResponse } from "next/server";
import {redis} from "../../../lib/redis";
export async function GET(request){
    await redis.set("user:1", "kirtan");
    await redis.set("user:2","thakkar")
    await redis.set("user:3","All is well")

    await redis.get("user:1");
    const result = await redis.mget("user:1","user:2","user:3")
    return NextResponse.json({
        message: result
    })
}