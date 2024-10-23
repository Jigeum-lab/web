import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const intlMiddleware = createMiddleware(routing);
  // 로그인 했을 경우에만 존재함 ( "next-auth.session-token" 쿠키가 존재할 때 )
  const session = await getToken({ req, raw: true });
  const { pathname, searchParams } = req.nextUrl;

  // 로그인/회원가입 접근 제한
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    if (session) {
      const loginUrl = new URL('/', req.url);
      // 쿼리 파라미터로 리다이렉트 경로를 추가
      loginUrl.searchParams.set('redirect', pathname + searchParams.toString());
      return NextResponse.redirect(loginUrl);
    }
  }

  // 보호할 경로들 배열로 관리
  const protectedRoutes = ['/mypage', '/dashboard', '/profile'];
  // 보호된 경로 중 하나인지 확인
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  // 비로그인 접근 제한
  if (isProtectedRoute && !session) {
    const loginUrl = new URL('/', req.url);
    // 쿼리 파라미터로 리다이렉트 경로를 추가
    loginUrl.searchParams.set('redirect', pathname + searchParams.toString());
    return NextResponse.redirect(loginUrl);
  }

  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(ko|en)/:path*'],
  matcher: ['/', `/(en|ko)/:path*`, '/((?!api|_next|_vercel|.*\\..*).*)'],
};
