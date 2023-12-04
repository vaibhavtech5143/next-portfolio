// Import necessary modules
import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";
 export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        // Connect to the database
        await connectToDB();

        // Fetch data from the Home model
        const extractData = await Home.find({});

        // Check if data was retrieved
        if (extractData) {
            // Return success response with data
            return NextResponse.json({
                success: true,
                data: extractData
            });
        } else {
            // Return error response if no data found
            return NextResponse.json({
                success: false,
                message: "Something went wrong. Please try again later."
            });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong. Please try again later."
        });
    }
}
