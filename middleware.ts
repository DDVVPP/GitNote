import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { role } = req.auth?.user || {};
  if (role !== 'ADMIN') {
    return NextResponse.redirect(`${req.nextUrl.origin}/`);
  }
});

export const config = {
  matcher: ['/admin'],
};
