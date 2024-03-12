'use server';

import * as auth from '@/auth';

export async function signIn(provider: 'github' | 'google') {
  return auth.signIn(provider, {
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
  return auth.signIn('credentials', {
    email,
    password,
    redirect: true,
    redirectTo: '/',
  });
}

export async function signOut() {
  return auth.signOut({
    redirect: true,
    redirectTo: '/login',
  });
}
