"use client";

import React from "react";
import { createPortal } from "react-dom";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { updateUser } from "@/lib/actions/user.actions";
import { Goals, User } from "@prisma/client";
import { IProfileSchema, ProfileSchema } from "@/lib/validations/UserSchema";
import { useSocialMediaModalStateContext } from "@/lib/context/SocialMediaModalState";

import SocialMediaModal from "../right-sidebar/SocialMediaModal";
import BasicInformation from "./BasicInformation";
import LearningGoals from "./LearningGoals";
import KnowledgeLevel from "./KnowledgeLevel";
import Availability from "./Availability";
import Button from "../shared/ui/Button";

const EditProfile = ({ user }: { user: User & { goals?: Goals[] } }) => {
  const { isOpen, setIsOpen } = useSocialMediaModalStateContext();

  const router = useRouter();
  const useFormHelpers = useForm<IProfileSchema>({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      image: user?.image ?? "",
      blurImage: user?.blurImage ?? "",
      location: "",
      portfolio: user?.portfolio ?? "",
      goals: user?.goals ?? [],
      knowledgeLevel: user?.knowledgeLevel ?? [],
      techStack: user?.techStack ?? [],
      availability: user?.availability ?? false,
      startDate: user?.startDate
        ? new Date(user?.startDate as Date)
        : new Date(),
      endDate: user?.endDate ? new Date(user?.endDate as Date) : new Date(),
    },
    resolver: zodResolver(ProfileSchema),
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, defaultValues },
  } = useFormHelpers;
  const formData = watch();

  const onSubmit: SubmitHandler<IProfileSchema> = async (data) => {
    try {
      await updateUser(data);
      router.push("/profile");
    } catch (error) {
      console.log("error in catch", error);
      toast.error("Unable to update user");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
      <h1 className="display-2-bold mb-5">Edit Profile</h1>
      <div className="space-y-14">
        <section>
          <BasicInformation
            useFormHelpers={useFormHelpers}
            formData={formData}
            isEditProfile
          />
        </section>
        <section>
          <LearningGoals useFormHelpers={useFormHelpers} isEditProfile />
        </section>
        <section>
          <KnowledgeLevel useFormHelpers={useFormHelpers} isEditProfile />
        </section>
        <section>
          <Availability useFormHelpers={useFormHelpers} isEditProfile />
        </section>

        <div className="flex gap-4 max-md:flex-col">
          <Button
            color="blue"
            type="submit"
            mobileClass="max-md:order-1"
            disabled={
              defaultValues?.techStack?.length === formData.techStack.length &&
              !isDirty
            }
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Update Profile"
            )}
          </Button>

          <Button
            color="gray"
            type="button"
            onClick={() => router.push("/profile")}
            mobileClass="max-md:order-3"
          >
            Cancel
          </Button>

          <Button
            type="button"
            icon="plus"
            color="gray"
            onClick={() => setIsOpen(true)}
            mobileClass="md:hidden max-md:order-2"
          >
            Update social links
          </Button>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            aria-labelledby="social-media-modal"
            role="dialog"
            aria-modal="true"
            className="bg-opacity/75 fixed inset-0 z-50 flex items-center justify-center backdrop-blur transition-opacity"
          >
            <SocialMediaModal user={user} />
          </div>,
          document.body
        )}
    </form>
  );
};

export default EditProfile;
