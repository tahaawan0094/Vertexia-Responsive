import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").toLowerCase();
  const url = new URL(request.url);

  if (hostname === "vertexiaagency.com" || hostname === "www.vertexiaagency.com") {
    if (hostname === "vertexiaagency.com") {
      const targetUrl = new URL(`https://www.vertexiaagency.com${url.pathname}${url.search}`);
      return NextResponse.redirect(targetUrl, 308);
    }
    return NextResponse.next();
  }

  if (hostname === "vertexiaio.vercel.app" || hostname.endsWith(".vercel.app")) {
    const targetUrl = new URL(`https://www.vertexiaagency.com${url.pathname}${url.search}`);
    return NextResponse.redirect(targetUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
