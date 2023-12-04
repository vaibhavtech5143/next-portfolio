import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";



export async function PUT(req){
    try {
        await connectToDB();
        const extractData = await req.json()
        const {_id,aboutme,noofprojects,yearofexperience,noofclients,skills} = extractData;
        const updateData = About.findOneAndUpdate({_id:_id,},{aboutme,noofprojects,yearofexperience,noofclients,skills},{new:true});

        if(updateData){
            return NextResponse.json({
                success:true,
                message:"Updated Successfully"
            })
        }
        else{
            return NextResponse.json({
                success:false,
                data:"Try Again Something Went Wrong"
            })
        }
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            data:"Try Again Something Went Wrong"
        })
        
    }
}