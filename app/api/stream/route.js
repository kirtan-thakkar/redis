import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(request){
    const stream = await redis.xadd("mystream", "*", { name: "kirtan" })

    const res1 = await redis.xadd("1ststream","*",{
        name:"kkirtan",
        age:"23",
        interest:"coding",
    })

    return NextResponse.json({
        message: "Stream entry added successfully",
        id: stream,
        response : res1
    });
}