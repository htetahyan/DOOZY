import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always use locale prefix in URLs
  localePrefix: 'always'
});

export const config = {
  // Match all routes except:
  // - /api/* (API routes)
  // - /_next/* (Next.js internals)
  // - /images/* (static files)
  // - /favicon.ico, /sitemap.xml (static files)
  matcher: ['/((?!api|_next|images|favicon.ico|sitemap.xml).*)']
}; 