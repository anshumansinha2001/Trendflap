import { NextResponse } from "next/server";

export function middleware(req) {
  const session = req.cookies.get("session")?.value;
  const { pathname } = req.nextUrl;

  // ✅ Allow login page without session
  if (pathname.startsWith("/admin/auth")) {
    return NextResponse.next();
  }

  // ✅ Protect all other /admin routes
  if (pathname.startsWith("/admin") && !session) {
    return NextResponse.redirect(new URL("/admin/auth", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // still apply only to /admin
};
