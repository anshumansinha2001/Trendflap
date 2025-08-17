import { NextResponse } from "next/server";
import crypto from "crypto";

// Force Node.js runtime (important!)
export const runtime = "nodejs";

export async function POST(req) {
  const { username, password } = await req.json();

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  console.log("Admin ENV:", adminUsername, adminPassword); // should log correctly

  if (username === adminUsername && password === adminPassword) {
    const token = crypto.randomUUID();

    const response = NextResponse.json({ success: true });
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
