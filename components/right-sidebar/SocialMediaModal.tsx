"use client";

import { useRef } from "react";
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
import useOutsideClickHandler from "@/lib/utils/useOutsideClickHandler";
import useEscapeHandler from "@/lib/utils/useEscapeHandler";

const SocialMediaModal = ({
  user,
  onClose,
}: {
  user: User & { socialMedia?: Social[] };
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClickHandler(ref, onClose);
  useEscapeHandler(onClose);

  const userSocials = new Array(socialMediaIconList.length);

  socialMediaIconList.forEach((icon, index) => {
    const { type } = icon;
    const matchedData = user.socialMedia?.find(
      (social) => social.type === type
    );

    userSocials[index] = matchedData ?? {
      type,
      username: "",
      link: "",
      id: -1,
    };
  });

  const useFormHelpers = useForm<ISocialMediaSchema>({
    defaultValues: {
      socialMedia: userSocials,
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

  // Added this to include new error property socialFields
  const formErrors = errors as {
    socialMedia: {
      id?: { message: number | undefined };
      username?: { message: string | undefined };
      link?: { message: string | undefined };
      type?: { message: string | undefined };
    }[];
    socialFields?: { message: string | undefined };
  };

  const onSubmit: SubmitHandler<Partial<IUserSchema>> = async (data) => {
    try {
      await updateUser(data);
    } catch (error) {
      toast.error("Unable to update user");
    } finally {
      onClose();
    }
  };

  return (
    <div className="flex rounded-md bg-black-800 p-12" ref={ref}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-4 flex items-center justify-between text-white-100">
          <h1 className="display-1-bold">Social Media Links</h1>
          <X
            onClick={onClose}
            cursor="pointer"
            className="hover:text-white-300 hover:duration-300"
          />
        </div>

        <section className="flex flex-col gap-y-4">
          {socialMediaIconList.map((icon, index) => {
            const { icon: Icon, type } = icon;
            return (
              <div
                key={type}
                className="flex items-start justify-start gap-x-2"
              >
                <Icon size={34} className="self-center" />
                <Controller
                  control={control}
                  name={`socialMedia.${index}.username`}
                  render={({ field: { name, onChange, ...rest } }) => (
                    <div className="w-48">
                      <Input
                        id="username"
                        {...rest}
                        onChange={(event) => {
                          onChange(event);
                          trigger(name);
                        }}
                        placeholder="Username"
                        errors={
                          formErrors.socialMedia &&
                          (formErrors.socialMedia[index]?.username
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
                    <div className="w-48">
                      <Input
                        id="link"
                        {...rest}
                        onChange={(event) => {
                          onChange(event);
                          trigger(name);
                        }}
                        placeholder="Social Link"
                        errors={
                          formErrors.socialMedia &&
                          (formErrors.socialMedia[index]?.link
                            ?.message as FieldError & string)
                        }
                      />
                    </div>
                  )}
                />

                <Input
                  id={type}
                  value={type}
                  {...register(`socialMedia.${index}.type`)}
                  placeholder=""
                  hidden
                />
              </div>
            );
          })}
          <span className="error-message flex justify-center">
            {formErrors.socialFields && formErrors.socialFields.message}
          </span>
        </section>

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
