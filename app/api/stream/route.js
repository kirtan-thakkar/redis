import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(request){
    const stream = await redis.xadd("mystream", "*", { name: "kirtan" })

    return NextResponse.json({
        message: "Stream entry added successfully",
        id: stream,
    });
}