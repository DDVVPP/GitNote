"use client";

import React from "react";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import router from "next/router";
import toast from "react-hot-toast";

import revalidateSession from "@/lib/actions/auth.actions";
import { updateUser } from "@/lib/actions/user.actions";
import { User } from "@prisma/client";
import { IProfileSchema, ProfileSchema } from "@/lib/validations/UserSchema";

import BasicInformation from "../onboarding/BasicInformation";
import LearningGoals from "../onboarding/LearningGoals";
import KnowledgeLevel from "../onboarding/KnowledgeLevel";
import Availability from "../onboarding/Availability";
import Button from "../shared/ui/Button";

const EditProfile = ({ user }: { user: User }) => {
  const useFormHelpers = useForm<IProfileSchema>({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      image: user?.image ?? "",
      location: "",
      portfolio: user?.portfolio ?? "",
      goals: user?.goals ?? [],
      knowledgeLevel: user?.knowledgeLevel ?? [],
      techStack: user?.knowledgeLevel ?? [],
      availability: user?.availability ?? false,
      startDate: user?.startDate ?? new Date(),
      endDate: user?.endDate ?? new Date(),
    },
    resolver: zodResolver(ProfileSchema),
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitted },
  } = useFormHelpers;
  const formData = watch();

  const onSubmit: SubmitHandler<IProfileSchema> = async (data) => {
    try {
      await updateUser(data);
      await revalidateSession();
      router.push("/");
    } catch (error) {
      toast.error("Unable to update user");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-14">
        <h1 className="display-2-bold">Edit Profile</h1>
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
          {isSubmitted ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default EditProfile;
