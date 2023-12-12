import connectToDB from "@/database";
import Auth from "@/models/Auth";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const checkUser = await Auth.findOne({ username });
    return NextResponse.json({
      success: true,
      message: "Login Successful",
      users:checkUser
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Please Try Again"
    });
  }
}
