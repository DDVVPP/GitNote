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
    formState: { isSubmitting, errors, isDirty },
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
    <div
      className="bg-black-800 flex rounded-md p-12 max-md:size-[90%] max-md:px-4 max-md:py-8"
      ref={ref}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="text-white-100 mb-4 flex items-center justify-between">
          <h1 className="display-1-bold max-md:display-2-bold">
            Social Media Links
          </h1>
          <X
            onClick={onClose}
            cursor="pointer"
            className="hover:text-white-300 hover:duration-300"
          />
        </div>

        <section className="flex w-full flex-col gap-y-4 max-md:overflow-y-auto">
          {socialMediaIconList.map((icon, index) => {
            const { icon: Icon, type } = icon;
            return (
              <div key={type} className="flex gap-x-2">
                <Icon
                  size={34}
                  className="self-center max-md:mt-2 max-md:self-start"
                />

                <div className="flex w-full gap-2 max-md:flex-col">
                  <Controller
                    control={control}
                    name={`socialMedia.${index}.username`}
                    render={({ field: { name, onChange, ...rest } }) => (
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
                    )}
                  />

                  <Controller
                    control={control}
                    name={`socialMedia.${index}.link`}
                    render={({ field: { name, onChange, ...rest } }) => (
                      <div className="">
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
                </div>
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

        <div className="mt-6 max-md:mt-0">
          <Button color="blue" disabled={!isDirty}>
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
