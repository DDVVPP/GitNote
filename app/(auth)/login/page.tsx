'use client';

import Link from 'next/link';

import { signIn } from '@/lib/actions';

import Input from '@/components/shared/ui/Input';
import Button from '@/components/shared/ui/Button';

const Login = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="display-2-bold pb-5">Login</h1>
        <form className="mb-5">
          <Input
            label="Email"
            name="email"
            placeholder="Enter your full name"
          />

          <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
          />

          <Link href="/posts/create-post">
            <Button color="blue">Login</Button>
          </Link>
        </form>
        <div className="text-white-300">
          <Link
            href="/sign-up"
            className="paragraph-3-medium underline underline-offset-2  flex justify-center"
          >
            I don't have an account
          </Link>
          <p className="mt-5 paragraph-4-regular  flex justify-center">or</p>
        </div>
      </div>

      <div className="mt-5">
        <form className="flex space-y-4 flex-col">
          <Button
            icon="github"
            color="darkGray"
            onClick={() => signIn('github')}
          >
            Sign In To Github
          </Button>
          <Button
            icon="google"
            color="darkGray"
            onClick={() => signIn('google')}
          >
            Sign In To Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
