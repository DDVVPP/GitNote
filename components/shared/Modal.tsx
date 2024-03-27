"use client";

import { Loader2, X } from "lucide-react";
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  Controller,
} from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateUser } from "@/lib/actions/user.actions";
import {
  ISocialMediaSchema,
  IUserSchema,
  SocialMediaSchema,
} from "@/lib/validations/UserSchema";
import { Social, User } from "@prisma/client";
import Input from "./ui/Input";
import { socialMediaIconList } from "@/lib/constants/socialMediaList";
import Button from "./ui/Button";

const Modal = ({
  user,
  onClose,
}: {
  user: User & { socialMedia?: Social[] };
  onClose: () => void;
}) => {
  const useFormHelpers = useForm<ISocialMediaSchema>({
    defaultValues: {
      socialMedia: user.socialMedia ?? [],
    },
    resolver: zodResolver(SocialMediaSchema),
  });

  console.log("user in modal", user);

  const {
    formState: { isSubmitting },
    control,
    trigger,
    handleSubmit,
  } = useFormHelpers;

  const onSubmit: SubmitHandler<Partial<IUserSchema>> = async (data) => {
    console.log("data", data);

    try {
      await updateUser(data);
    } catch (error) {
      console.log("error in catch", error);
      toast.error("Unable to update user");
    } finally {
      onClose();
    }
  };

  return (
    <div className="bg-black-800 z-50 flex flex-col rounded p-12 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-white-100 mb-4 flex items-center justify-between">
          <h1 className="display-1-bold">Social Media Links</h1>
          <X onClick={onClose} cursor="pointer" />
        </div>
        {socialMediaIconList.map((icon, index) => {
          const { icon: Icon, type } = icon;
          return (
            <div
              key={type}
              className="flex items-center justify-center gap-2 py-2"
            >
              <Icon />
              <Controller
                control={control}
                name={`socialMedia.${index}.username`}
                render={({ field: { name, onChange, ...rest } }) => (
                  <div className="-mb-5">
                    <Input
                      id="username"
                      {...rest}
                      onChange={(event) => {
                        onChange(event);
                        trigger(name);
                      }}
                      placeholder="Username"
                    />
                  </div>
                )}
              />

              <Controller
                control={control}
                name={`socialMedia.${index}.type`}
                render={({ field: { name, onChange, ...rest } }) => (
                  <div className="-mb-5">
                    <Input
                      id={type}
                      {...rest}
                      onChange={(event) => {
                        onChange(event);
                        trigger(name);
                      }}
                      placeholder="Social Link"
                    />
                  </div>
                )}
              />
            </div>
          );
        })}
        <div className="mt-6">
          <Button color="blue">
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Update Links"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
