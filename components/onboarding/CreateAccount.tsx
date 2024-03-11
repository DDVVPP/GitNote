'use client';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

import Input from '../shared/ui/Input';
import Link from 'next/link';
import Button from '../shared/ui/Button';

export interface IFormValues {
  'Full Name': string;
  Email: string;
}

const CreateAccount = () => {
  const { handleSubmit } = useForm<IFormValues>();
  return (
    <div className="flex flex-col justify-center space-y-8">
      <h1 className="display-2-bold">Create an Account</h1>
      <form className="space-y-4">
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          // register={register}
        />

        <Input label="Email" name="email" placeholder="Enter your full name" />

        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
        />

        <Link href="/posts/create-post">
          <Button color="blue">Create an account</Button>
        </Link>
      </form>
    </div>
  );
};

export default CreateAccount;
