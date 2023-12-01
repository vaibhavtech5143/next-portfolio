
import connectToDB from "@/database";
import Education from "@/models/Education";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST  (req){
try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Education.create(extractData);
    if(saveData){
        return NextResponse.json({
            success: true,
            message: "Data Saved Successfully"
        })

    }
    else{
        return NextResponse.json({
            success: false,
            message: "Data Not Saved Successfully"
        })
    }
    
} catch (error) {
    return NextResponse.json({
        success: false,
        message: "Data Not Saved Successfully !Please Try Again",
    });

    
}
} 