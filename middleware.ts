import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default function () {}

// export default auth(() => {});

// export default auth((req) => {
//   console.log('test');
//   const { role } = req.auth?.user || {};
//   if (role !== 'ADMIN') {
//     return NextResponse.redirect(`${req.nextUrl.origin}/`);
//   }
// });

// export const config = {
//   matcher: ['/admin'],
// };
