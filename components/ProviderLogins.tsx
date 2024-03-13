'use client';

import { signIn } from 'next-auth/react';
import Button from './shared/ui/Button';

const ProviderLogins = () => {
  return (
    <>
      <section className="flex space-y-4 flex-col">
        <input type="hidden" name="provider" value="google" />
        <Button icon="github" color="darkGray" onClick={() => signIn('github')}>
          Sign In To Github
        </Button>
      </section>
      <section className="flex space-y-4 flex-col">
        <input type="hidden" name="provider" value="google" />
        <Button icon="google" color="darkGray" onClick={() => signIn('google')}>
          Sign In To Google
        </Button>
      </section>
    </>
  );
};

export default ProviderLogins;
