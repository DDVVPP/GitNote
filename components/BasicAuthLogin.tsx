'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { z, ZodError } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import { credentialsSignIn } from '@/lib/actions';
import { IUserSchema, UserSchema } from '@/lib/validations/UserSchema';

import Input from '@/components/shared/ui/Input';
import Button from '@/components/shared/ui/Button';

const BasicAuthLogin = () => {
  const { register, handleSubmit, formState } = useForm<IUserSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(UserSchema),
  });

  useEffect(() => {
    console.log('formStateErrors', formState.errors);
  }, [formState.errors]);
  // const [zodErrors, setZodErrors] = useState({});

  const onSubmit: SubmitHandler<IUserSchema> = (data) => {
    console.log('data in onSubmit', data);
    // try {
    //   const partialUserSchema = UserSchema.partial();
    //   partialUserSchema.parse(data);

    //   const { email, password } = data;
    //   await credentialsSignIn({ email, password });
    // } catch (error) {
    //   if (error instanceof ZodError) {
    //     console.log('zodErrors', error);
    //     // these errors come from zod
    //     // show the user the messages in the form
    //   } else {
    //     toast.error('Invalid user');
    //   }
    //   return;
    // }
  };

  return (
    <>
      <h1 className="display-2-bold mb-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        <Input
          label="Email"
          id="email"
          placeholder="Enter your full name"
          {...register('email')}
        />

        <Input
          label="Password"
          id="password"
          placeholder="Enter your password"
          {...register('password')}
          type="password"
        />

        <Button type="submit" color="blue">
          Login
        </Button>
      </form>
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
