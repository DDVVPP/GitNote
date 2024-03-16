import Link from 'next/link';
import { Image, UploadCloud } from 'lucide-react';

import Input from '@/components/shared/ui/Input';

const BasicInformation = ({
  register,
  formState,
}: {
  register: any;
  formState: any;
}) => {
  return (
    <>
      <h1 className="display-2-bold pb-5">Basic Information</h1>
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
    </>
  );
};

export default BasicInformation;
