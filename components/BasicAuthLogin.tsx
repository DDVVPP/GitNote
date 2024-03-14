'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { z, ZodError } from 'zod';

import { credentialsSignIn } from '@/lib/actions';
import { userSchema } from '@/lib/validations/userSchema';

import Input from '@/components/shared/ui/Input';
import Button from '@/components/shared/ui/Button';

const BasicAuthLogin = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  // const [zodErrors, setZodErrors] = useState({});

  const handleSubmit = async () => {
    try {
      const partialUserSchema = userSchema.partial();
      partialUserSchema.parse(data);

      const { email, password } = data;
      await credentialsSignIn({ email, password });
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('zodErrors', error);
        // these errors come from zod
        // show the user the messages in the form
      } else {
        toast.error('Invalid user');
      }
      return;
    }
  };

  return (
    <>
      <h1 className="display-2-bold mb-5">Login</h1>
      <section className="mb-5">
        <Input
          label="Email"
          name="email"
          placeholder="Enter your full name"
          value={data.email}
          onChange={(event) =>
            setData({
              ...data,
              email: event.target.value,
            })
          }
        />

        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={data.password}
          onChange={(event) =>
            setData({
              ...data,
              password: event.target.value,
            })
          }
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
