import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(request){
    const stream = await redis.xadd("mystream", "*", { name: "kirtan" })

    const res1 = await redis.xadd("1ststream","*",{
        name:"kkirtan",
        age:"23",
        interest:"coding",
    })

    const res2  = await redis.xadd("2ndstream","*",{
        name:"Tisha",
        lastname:"jobanputra",
        age:22,
        interest:"coding,"
        
    })

    const res3 = await redis.xadd("3rdstream","*",{
        name:"dipmala",
        lastname:"thakkar",
        age:42,
        interest:"cooking" 
    })

    const res4 = await redis.xadd("4thstream","*",{
        name:"krishna",
        lastname:"thakkar",
        age:25,
        interest:"coding," 
    })
    
    const res5 = await redis.xadd("%thstream","*",{
        name:"op",
        lastname:"thakkar",
        age:25,
        interest:"coding,"
    })

    return NextResponse.json({
        message: "Stream entry added successfully",
        id: stream,
        response1 : res1,
        response2 : res2
    });
}