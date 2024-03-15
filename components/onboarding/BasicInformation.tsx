'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Image, UploadCloud } from 'lucide-react';
// import Image from 'next/image';

import Input from '@/components/shared/ui/Input';
import Button from '../shared/ui/Button';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const BasicInformation = ({ setStep }: Props) => {
  return (
    <>
      <OnboardingStepDots />
      <h1 className="display-2-bold pb-5">Basic Information</h1>
      <form>
        <div className="flex space-x-2 items-center mb-5">
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
        </div>
        <Input label="Name" id="name" placeholder="Enter your full name" />

        <Input
          label="Portfolio"
          id="portfolio"
          placeholder="https://jsmastery.pro"
        />
      </form>
      <Button color="blue" onClick={() => setStep(2)}>
        Next
      </Button>
    </>
  );
};

export default BasicInformation;
