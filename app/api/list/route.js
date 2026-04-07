import {redis} from "@/lib/redis";
import { NextResponse } from "next/server";
export async function GET(request){ 
    await redis.lpush("firstList","kirtan");
    await redis.lpush("firstList","thakkar");
    await redis.lpush("firstList","All is well");

    await redis.rpush("firstList","end-1");
    await redis.rpush("firstList","end-2");
    
    await redis.lpop("firstList");
    await redis.rpop("firstList");

    // Fetch the list from Redis. 0 to -1 means "get all items from start to end"
    const mylist = await redis.lrange("firstList", 0, -1);
    
    return NextResponse.json({
        message: mylist,
        RESULT:"Succesfully added to the list and fetched it"
    });
}