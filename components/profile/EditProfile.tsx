"use client";

import React from "react";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { updateUser } from "@/lib/actions/user.actions";
import { Goals, User } from "@prisma/client";
import { IProfileSchema, ProfileSchema } from "@/lib/validations/UserSchema";

import BasicInformation from "./BasicInformation";
import LearningGoals from "./LearningGoals";
import KnowledgeLevel from "./KnowledgeLevel";
import Availability from "./Availability";
import Button from "../shared/ui/Button";

const EditProfile = ({ user }: { user: User & { goals?: Goals[] } }) => {
  const router = useRouter();
  const useFormHelpers = useForm<IProfileSchema>({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      image: user?.image ?? "",
      location: "",
      portfolio: user?.portfolio ?? "",
      goals: user?.goals ?? [],
      knowledgeLevel: user?.knowledgeLevel ?? [],
      techStack: user?.techStack ?? [],
      availability: user?.availability ?? false,
      startDate: new Date(user?.startDate as Date),
      endDate: new Date(user?.endDate as Date),
    },
    resolver: zodResolver(ProfileSchema),
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
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

        <Button color="blue" type="submit">
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Update Profile"
          )}
        </Button>
      </div>
    </form>
  );
};

export default EditProfile;
