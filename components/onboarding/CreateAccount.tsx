'use client';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { createUser } from '@/lib/actions/user.actions';

import Input from '../shared/ui/Input';
import Link from 'next/link';
import Button from '../shared/ui/Button';
import { redirect } from 'next/navigation';

// export interface IFormValues {
//   'Full Name': string;
//   Email: string;
// }

const CreateAccount = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // const { handleSubmit } = useForm<IFormValues>();
  const handleSubmit = () => {
    setData({
      ...data,
    });
    if (data) {
      createUser(data);
    }
    redirect('/sign-up/onboarding');
  };

  return (
    <div>
      <h1 className="display-2-bold pb-5">Create an Account</h1>
      <form action={handleSubmit} className="mb-5">
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          onChange={(event) =>
            setData({
              ...data,
              name: event.target.value,
            })
          }
          value={data.name}
          // register={register}
        />

        <Input
          label="Email"
          name="email"
          placeholder="Enter your full name"
          onChange={(event) =>
            setData({
              ...data,
              email: event.target.value,
            })
          }
          value={data.email}
        />

        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) =>
            setData({
              ...data,
              password: event.target.value,
            })
          }
          value={data.password}
        />
        <Button color="blue" type="submit">
          Create an account
        </Button>
      </form>
    </div>
  );
};

export default CreateAccount;
