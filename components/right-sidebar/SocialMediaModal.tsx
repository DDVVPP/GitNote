"use client";

import { Loader2, X } from "lucide-react";
import {
  SubmitHandler,
  useForm,
  Controller,
  FieldError,
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
import Input from "../shared/ui/Input";
import { socialMediaIconList } from "@/lib/constants/socialMediaList";
import Button from "../shared/ui/Button";

const SocialMediaModal = ({
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

  const {
    formState: { isSubmitting, errors },
    control,
    trigger,
    handleSubmit,
    register,
  } = useFormHelpers;
  console.log("errors", errors);

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
    <div className="bg-black-800 flex rounded-md  p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="text-white-100 mb-4 flex items-center justify-between">
          <h1 className="display-1-bold">Social Media Links</h1>
          <X onClick={onClose} cursor="pointer" />
        </div>
        {socialMediaIconList.map((icon, index) => {
          const { icon: Icon, type } = icon;
          return (
            <div key={type} className="flex justify-center gap-2 py-2">
              <Icon size={34} />
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
                      errors={
                        errors.socialMedia &&
                        (errors.socialMedia[index]?.username
                          ?.message as FieldError & string)
                      }
                    />
                  </div>
                )}
              />

              <Controller
                control={control}
                name={`socialMedia.${index}.link`}
                render={({ field: { name, onChange, ...rest } }) => (
                  <div className="-mb-5">
                    <Input
                      id="link"
                      {...rest}
                      onChange={(event) => {
                        onChange(event);
                        trigger(name);
                      }}
                      placeholder="Social Link"
                      errors={
                        errors.socialMedia &&
                        (errors.socialMedia[index]?.link
                          ?.message as FieldError & string)
                      }
                    />
                  </div>
                )}
              />

              <div className="-mb-5">
                <Input
                  id={type}
                  value={type}
                  {...register(`socialMedia.${index}.type`)}
                  placeholder=""
                  hidden
                />
              </div>
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

export default SocialMediaModal;
