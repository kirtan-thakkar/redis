import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({
        message:"Hello world from nextjs and learning redis mother fucker",
    },{status:201})
}