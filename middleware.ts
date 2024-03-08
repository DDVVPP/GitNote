import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { role } = req.auth?.user || {};
  const { pathname } = req.nextUrl;

  if (pathname === '/' && !role) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }
  if (pathname === '/admin' && role !== 'ADMIN') {
    return NextResponse.redirect(`${req.nextUrl.origin}/`);
  }
});

export const config = {
  matcher: ['/', '/admin'],
};
