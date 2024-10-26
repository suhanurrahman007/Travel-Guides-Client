import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register"];

type TRole = keyof typeof roleBasedRoutes;
const roleBasedRoutes = {
    USER: [/^\/profile/],
    ADMIN: [/^\/adminProfile/],
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const user = await getCurrentUser()

    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
        }
    }

    if (user?.role && roleBasedRoutes[user?.role as TRole]) {
        const routes = roleBasedRoutes[user?.role as TRole];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next()
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile", "/profile/:page*", "/adminProfile", "/login", "/register"],
};