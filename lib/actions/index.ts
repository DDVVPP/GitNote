'use server';
import { signIn, signOut } from 'next-auth/react';

export async function providerSignIn(provider: 'github' | 'google') {
  return signIn(provider, {
    redirect: true,
    redirectTo: '/',
  });
}

export async function credentialsSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return signIn('credentials', {
    email,
    password,
    redirect: true,
    redirectTo: '/',
  });
}

export async function providerSignOut() {
  return signOut({
    redirect: true,
  });
}
