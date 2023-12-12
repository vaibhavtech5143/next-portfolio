import connectToDB from "@/database";
import Auth from "@/models/Auth";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const checkUser = await Auth.findOne({ username });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "Username Does not Exist"
      });
    }

    const checkPassword = await compare(password, checkUser.password);

    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Password Does not Match"
      });
    }

    // If needed, you can create or perform operations with the authenticated user data here

    return NextResponse.json({
      success: true,
      message: "Login Successful"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Please Try Again"
    });
  }
}
