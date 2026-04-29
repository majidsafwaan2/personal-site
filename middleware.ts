import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_ACCESS_COOKIE, isValidGateCookie } from "@/lib/site-access";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookie = request.cookies.get(SITE_ACCESS_COOKIE)?.value;

  if (pathname.startsWith("/login")) {
    if (await isValidGateCookie(cookie)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/site-access")) {
    return NextResponse.next();
  }

  if (await isValidGateCookie(cookie)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
