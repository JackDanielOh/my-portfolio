import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const supportedLocales = ["en", "ko"];

  // Check if the pathname already includes a locale
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the locale from Accept-Language header
    const acceptLanguage = request.headers.get("Accept-Language") || "";

    // Default to English, but use Korean if browser language includes Korean
    const locale = acceptLanguage.toLowerCase().includes("ko") ? "ko" : "en";

    // For root path, redirect to locale-specific path
    const newPathname =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and `/images/` (static assets)
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.svg|robots.txt|sitemap.xml|images/).*)",
  ],
};
