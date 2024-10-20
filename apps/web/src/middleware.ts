import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(ko|en)/:path*'],
  matcher: ['/', `/(en|ko)/:path*`, '/((?!api|_next|_vercel|.*\\..*).*)'],
};
