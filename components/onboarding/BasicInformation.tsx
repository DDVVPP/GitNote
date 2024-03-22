import { useState } from 'react';
import { Image as LandscapeIcon, UploadCloud } from 'lucide-react';
import Image from 'next/image';
// import { Controller } from 'react-hook-form';

import { UploadFile } from '@/lib/actions/s3.actions';
import Input from '@/components/shared/ui/Input';
import { Controller } from 'react-hook-form';

const BasicInformation = ({
  useFormHelpers,
  formData,
}: {
  useFormHelpers: any;
  formData: any;
}) => {
  const { register, formState, setValue, trigger, control } = useFormHelpers;
  const [image, setImage] = useState(formData?.image ?? '');

  const handleImageUpload = async (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    const newFormData = new FormData();

    if (!file) return;
    newFormData.append('file', file);
    const url = await UploadFile(newFormData);

    setImage(URL.createObjectURL(file as Blob | MediaSource));
    setValue('image', url);
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Basic Information</h1>
      <section className="flex space-x-2 items-center mb-5">
        {image ? (
          <Image src={image} alt="profileImage" width={120} height={120} />
        ) : (
          <div className="bg-black-700 p-7">
            <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
          </div>
        )}

        <div className="bg-black-700 p-1.5 flex space-x-2 items-center">
          <UploadCloud stroke="rgba(173, 179, 204, 1)" size={18} />
          <label
            htmlFor="image"
            className="paragraph-3-medium cursor-pointer bg-black-700 text-white-300 flex justify-center"
          >
            Upload Profile Photo
            <input
              type="file"
              id="image"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </section>

      <Input
        label="Name"
        id="name"
        placeholder="Enter your full name"
        {...register('name')}
        errors={formState.errors.portfolio?.message}
      />

      <Controller
        control={control}
        name="name"
        render={({
          field: { name, onChange, ...rest },
          formState: { errors },
        }) => (
          <Input
            label="Name"
            id={name}
            {...rest}
            onChange={(event) => {
              onChange(event);
              trigger(name);
            }}
            placeholder="Enter your full name"
            errors={errors.name?.message as string}
          />
        )}
      />

      <Controller
        control={control}
        name="portfolio"
        render={({
          field: { name, onChange, ...rest },
          formState: { errors },
        }) => (
          <Input
            label="Portfolio"
            id={name}
            {...rest}
            onChange={(event) => {
              onChange(event);
              trigger(name);
            }}
            placeholder="https://jsmastery.pro"
            errors={errors.portfolio?.message as string}
          />
        )}
      />
    </>
  );
};

export default BasicInformation;
