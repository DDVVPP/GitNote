'use client';

import Link from 'next/link';

import Input from '@/components/shared/ui/Input';
import Button from '@/components/shared/ui/Button';
import { credentialsSignIn } from '@/lib/actions';
import { useState } from 'react';

const BasicAuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    await credentialsSignIn({ email, password });
  };

  return (
    <div>
      <h1 className="display-2-bold pb-5">Login</h1>
      <form className="mb-5">
        <Input
          label="Email"
          name="email"
          placeholder="Enter your full name"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
        />

        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event?.target.value)}
        />

        <Button color="blue" onClick={submit}>
          Login
        </Button>
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
  );
};

export default BasicAuthLogin;
