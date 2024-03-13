'use client';

import { useState } from 'react';
import Link from 'next/link';
import { credentialsSignIn } from '@/lib/actions';

import Input from '@/components/shared/ui/Input';
import Button from '@/components/shared/ui/Button';

const BasicAuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await credentialsSignIn({ email, password });
  };

  return (
    <>
      <h1 className="display-2-bold mb-5">Login</h1>
      <section className="mb-5">
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

        <Button color="blue" onClick={handleSubmit}>
          Login
        </Button>
      </section>
      <section className="text-white-300">
        <Link
          href="/sign-up"
          className="paragraph-3-medium underline underline-offset-2  flex justify-center"
        >
          I don't have an account
        </Link>
        <p className="mt-5 paragraph-4-regular  flex justify-center">or</p>
      </section>
    </>
  );
};

export default BasicAuthLogin;
