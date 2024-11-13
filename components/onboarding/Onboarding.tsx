"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { User } from "@prisma/client";
import { updateUser } from "@/lib/actions/user.actions";
import revalidateSession from "@/lib/actions/auth.actions";
import {
  IOnboardingSchema,
  OnboardingSchema,
} from "@/lib/validations/UserSchema";

import {
  BasicInformation,
  LearningGoals,
  KnowledgeLevel,
  Availability,
} from "@/components/profile";
import OnboardingVisualStepper from "@/components/onboarding/OnboardingVisualStepper";
import { Button } from "@/components/shared/ui";

const Onboarding = ({ user }: { user: User }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepFromParams = parseInt(searchParams.get("step") ?? "1", 10);

  const [step, setStep] = useState(stepFromParams);
  const fields = [] as Partial<keyof IOnboardingSchema>[];

  const useFormHelpers = useForm<IOnboardingSchema>({
    defaultValues: {
      name: user?.name ?? "",
      image: user?.image ?? "",
      blurImage: user?.blurImage ?? "",
      location: "",
      portfolio: "",
      goals: [],
      knowledgeLevel: [],
      techStack: [],
      availability: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    resolver: zodResolver(OnboardingSchema),
  });

  const {
    watch,
    handleSubmit,
    trigger,
    formState: { isSubmitting },
  } = useFormHelpers;
  const formData = watch();

  const stepData: {
    [key: number]: {
      component: React.JSX.Element;
      fields: Partial<keyof IOnboardingSchema>[];
    };
  } = {
    1: {
      component: (
        <BasicInformation useFormHelpers={useFormHelpers} formData={formData} />
      ),
      fields: ["name", "portfolio", "image", "blurImage"],
    },
    2: {
      component: <LearningGoals useFormHelpers={useFormHelpers} />,
      fields: ["goals"],
    },
    3: {
      component: <KnowledgeLevel useFormHelpers={useFormHelpers} />,
      fields: ["knowledgeLevel", "techStack"],
    },
    4: {
      component: <Availability useFormHelpers={useFormHelpers} />,
      fields: ["availability", "startDate", "endDate"],
    },
  };

  const filterData = (data: IOnboardingSchema) => {
    const filteredData = Object.keys(data).filter((key) =>
      fields.includes(key as keyof IOnboardingSchema)
    );
    const dataToSend = filteredData.reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: data[cur as keyof IOnboardingSchema],
        onboardingStatus: step + 1,
      };
    }, {});
    return dataToSend;
  };

  const validateSpecificFields = async () => {
    const fields = stepData[step].fields;
    const isValid = await Promise.all(fields.map((field) => trigger(field)));
    const allFieldsValid = isValid.every((field) => field === true);
    return allFieldsValid;
  };

  const validateFields = async () => {
    const allFieldsValid = await validateSpecificFields();
    if (allFieldsValid) {
      try {
        const dataToSend = filterData(formData);
        await updateUser(dataToSend);
      } catch (error) {
        toast.error("Unable to update user");
      } finally {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const onSubmit: SubmitHandler<IOnboardingSchema> = async (data) => {
    try {
      const updatedData = { ...data, onboardingStatus: step + 1 };
      await updateUser(updatedData);
      await revalidateSession();
      router.push("/");
    } catch (error) {
      toast.error("Unable to update user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black-800 flex w-full flex-col justify-center p-6 duration-500 md:w-[600px]"
    >
      <OnboardingVisualStepper step={step} />
      <div>{stepData[step].component}</div>
      <div className="mt-5">
        {step === 4 ? (
          <Button color="blue" type="submit">
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        ) : (
          <Button color="blue" type="button" onClick={validateFields}>
            Next
          </Button>
        )}
      </div>
    </form>
  );
};

export default Onboarding;
