import { useState } from "react";
import { Image as LandscapeIcon, UploadCloud } from "lucide-react";
import Image from "next/image";
import { Controller } from "react-hook-form";

import { UploadFile } from "@/lib/actions/s3.actions";
import Input from "@/components/shared/ui/Input";

const BasicInformation = ({
  useFormHelpers,
  formData,
  isEditProfile = false,
}: {
  useFormHelpers: any;
  formData: any;
  isEditProfile?: boolean;
}) => {
  const { setValue, trigger, control } = useFormHelpers;
  const [image, setImage] = useState(formData?.image ?? "");

  const handleImageUpload = async (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    const newFormData = new FormData();

    if (!file) return;
    newFormData.append("file", file);
    const url = await UploadFile(newFormData);

    setImage(URL.createObjectURL(file as Blob | MediaSource));
    setValue("image", url);
  };

  return (
    <section className="space-y-5">
      {isEditProfile ? (
        <h3 className="paragraph-3-medium text-white-500">BASIC INFORMATION</h3>
      ) : (
        <h1 className="display-2-bold">Basic Information</h1>
      )}

      <div className="flex items-center space-x-6">
        {image ? (
          <Image src={image} alt="profileImage" width={120} height={120} />
        ) : (
          <div className="bg-black-700 p-7">
            <LandscapeIcon stroke="rgba(173, 179, 204, 1)" size={18} />
          </div>
        )}

        <div className="bg-black-700 flex items-center space-x-2 p-1.5">
          <UploadCloud stroke="rgba(173, 179, 204, 1)" size={18} />
          <label
            htmlFor="image"
            className="paragraph-3-medium bg-black-700 text-white-300 flex cursor-pointer justify-center"
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
      </div>

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

      {isEditProfile && (
        <Controller
          control={control}
          name="email"
          render={({
            field: { name, onChange, ...rest },
            formState: { errors },
          }) => (
            <Input
              label="Email"
              id={name}
              {...rest}
              onChange={(event) => {
                onChange(event);
                trigger(name);
              }}
              placeholder="Enter your email"
              errors={errors.email?.message as string}
            />
          )}
        />
      )}

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
    </section>
  );
};

export default BasicInformation;
