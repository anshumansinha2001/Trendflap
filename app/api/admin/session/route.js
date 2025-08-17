// app/api/admin/session/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("session")?.value;

  if (token) {
    return NextResponse.json({ loggedIn: true });
  } else {
    return NextResponse.json({ loggedIn: false });
  }
}
