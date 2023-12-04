
import connectToDB from "@/database";
import Home from "@/models/Home";

import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";
export async function PUT(req){

    try {
        await connectToDB();
        const extractData = await req.json();
        const {_id,heading,summary} = extractData;
        const updatedData = await Home.findOneAndUpdate({
            _id:_id,
        },
        {heading,summary},{new:true},);
        if (updatedData) {
            return NextResponse.json({
                success: true,
                message: "Updated Successfully"
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something Went Wrong Try Again Later"
                
            });
        }
        
    } catch (error) {
        console.log(error);
        NextResponse.json({
            success:false,
            message:"Something Went Wrong Try Again Later"
        })
        
    }
}