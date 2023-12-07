import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req){


try {

    await connectToDB();
    const extractData = await req.json();
    const {_id, aboutme, noofprojects, yearofexperience, noofclients, skills} = extractData;

    const updaData = await About.findOneAndUpdate({
        _id:_id

    },{aboutme, noofprojects, yearofexperience, noofclients, skills},{new: true});

    if(updaData){
        return NextResponse.json({
            success: true,
            message: "updated successfully",
        })
    }
    else{
        return NextResponse.json({
            success: false,
            message: "Error ,Something Went Wrong",
        })
    }
    
} catch (error) {
    console.log(error);
    return NextResponse.json({
        success: false,
        message: "Error ,Something Went Wrong",
        error: error
    })
    
}


}