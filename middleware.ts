import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log(token, '=-=-=-=-=-=--=-=-=');
      const { role } = token || {};
      const { pathname } = req.nextUrl;
      if (pathname === '/' && !role) {
        return false;
      }

      if (pathname === '/admin' && role !== 'ADMIN') {
        return false;
      }
      return true;
    },
  },
});

// import { auth } from '@/auth';
// import { NextResponse } from 'next/server';

// export default auth((req) => {
//   const { role } = req.auth?.user || {};
//   const { pathname } = req.nextUrl;

//   if (pathname === '/' && !role) {
//     return NextResponse.redirect(`${req.nextUrl.origin}/login`);
//   }
//   if (pathname === '/admin' && role !== 'ADMIN') {
//     return NextResponse.redirect(`${req.nextUrl.origin}/`);
//   }
// });

// export const config = {
//   matcher: ['/', '/admin'],
// };
