'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Image, UploadCloud } from 'lucide-react';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import { createUser, updateUser } from '@/lib/actions/user.actions';
import {
  IUserBasicInfoSchema,
  UserBasicInfoSchema,
} from '@/lib/validations/UserSchema';

import Input from '@/components/shared/ui/Input';
import Button from '../shared/ui/Button';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';
import { credentialsSignIn } from '@/lib/actions';

const BasicInformation = ({ step }: { step: number }) => {
  const { register, handleSubmit, formState } = useForm<IUserBasicInfoSchema>({
    defaultValues: {
      name: '',
      image: '',
      onboardingStatus: step,
      portfolio: '',
    },
    resolver: zodResolver(UserBasicInfoSchema),
  });

  const onSubmit: SubmitHandler<IUserBasicInfoSchema> = async (data) => {
    UserBasicInfoSchema.parse(data);
    const { error } = await updateUser(data);
    if (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <OnboardingStepDots />
      <h1 className="display-2-bold pb-5">Basic Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="flex space-x-2 items-center mb-5">
          <div className="bg-black-700 p-7">
            <Image stroke="rgba(173, 179, 204, 1)" size={18} />
          </div>
          <div className="bg-black-700 p-1.5 flex space-x-2 items-center">
            <UploadCloud stroke="rgba(173, 179, 204, 1)" size={18} />
            <Link
              href="/"
              className="paragraph-3-medium  bg-black-700 text-white-300 flex justify-center"
            >
              Update Profile Photo
            </Link>
          </div>
        </div> */}
        <Input
          label="Name"
          id="name"
          placeholder="Enter your full name"
          {...register('name')}
          errors={formState.errors.name?.message}
        />

        <Input
          label="Portfolio"
          id="portfolio"
          placeholder="https://jsmastery.pro"
          {...register('portfolio')}
          errors={formState.errors.portfolio?.message}
        />
        <Button color="blue" type="submit">
          Next
        </Button>
      </form>
    </>
  );
};

export default BasicInformation;
