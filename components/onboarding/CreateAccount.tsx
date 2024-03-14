'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
// import { z } from 'zod';

import { createUser } from '@/lib/actions/user.actions';
import { UserSchema } from '@/lib/validations/UserSchema';

import Input from '../shared/ui/Input';
import Button from '../shared/ui/Button';
import { signIn } from 'next-auth/react';

const CreateAccount = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  // const [zodErrors, setZodErrors] = useState({});

  const submit = async () => {
    try {
      const partialUserSchema = UserSchema.partial();
      partialUserSchema.parse(data);
    } catch (error) {
      console.log('zodErrors', error);
      // if (error instanceof z.ZodError) {
      //   setZodErrors(error.flatten());
      // }

      return;
    }

    const { error } = await createUser(data);
    if (error) {
      toast.error(error);
    } else {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      redirect('/sign-up/onboarding');
    }
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Create an Account</h1>
      <form action={submit} className="mb-5">
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={data.name}
          onChange={(event) =>
            setData({
              ...data,
              name: event.target.value,
            })
          }
        />

        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
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
        <Button color="blue" type="submit">
          Create an account
        </Button>
      </form>
    </>
  );
};

export default CreateAccount;
