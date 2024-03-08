import React from 'react';
import { signOut } from '@/lib/actions';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function AuthenticatedButtons() {
  const session = await auth();

  return (
    <div className="flex gap-4">
      <form action={signOut}>
        <button type="submit" className="w-full">
          Sign Out
        </button>
      </form>
      {session?.user?.role === 'ADMIN' && <Link href="/admin">Admin</Link>}
    </div>
  );
}
