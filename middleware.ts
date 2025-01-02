import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { role, onboardingStatus } = req.auth?.user || {};
  const { pathname } = req.nextUrl;
  // console.log("Pathname:>>>>>>>>", pathname);
  // console.log("Auth User:>>>>>>>>", req.auth?.user);
  // console.log("Cookies:>>>>>>>>", req.cookies);
  // console.log("Decoded JWT in middleware:", req.auth);
  if (role) {
    console.log("Auth User:>>>>>>>>", req.auth?.user);
  }
  if (pathname === "/profile") {
    console.log("in middleware>>>>>>>", req.cookies);
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }
  if (!role) {
    console.log("User not authenticated. Redirecting to login.");
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }
  // if (pathname === "/" && !role) {
  //   console.log("in middleware>>>>>>>", req.auth?.user);
  //   return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  // }

  // if (pathname === "/profile" && !req.auth?.user) {
  //   console.error("User not authenticated. Redirecting to login.");
  //   console.error("Auth Object:", req.auth);
  //   console.error("Cookies:", req.cookies);
  //   return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  // }
  // if (pathname === "/profile" && !role) {
  //   console.log(req.auth?.user);
  //   return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  // }
  // if (pathname === "/profile/edit" && !req.auth?.user) {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  // }

  // if (pathname === "/admin" && role !== "ADMIN") {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/`);
  // }

  // if (!onboardingStatus) {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/sign-up/onboarding`);
  // }
  // if (onboardingStatus < 4) {
  //   return NextResponse.redirect(
  //     `${req.nextUrl.origin}/sign-up/onboarding?step=${onboardingStatus}`
  //   );
  // }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|login|sign-up|sign-up/onboarding).*)",
  ],
};
