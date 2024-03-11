'use client';

import Link from 'next/link';

import { signIn } from '@/lib/actions';
import CreateAccount from '@/components/onboarding/CreateAccount';

const SignUp = () => {
  return (
    <div className="space-y-4">
      Sign up
      <CreateAccount />
      <Link href="/login">Already have an account</Link>
      <div>
        <form className="flex space-y-4 flex-col">
          <button type="submit" onClick={() => signIn('github')}>
            Sign In To Github
          </button>
          <button type="submit" onClick={() => signIn('google')}>
            Sign In To Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
