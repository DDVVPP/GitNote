'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { User } from '@prisma/client';
import { updateUser } from '@/lib/actions/user.actions';
import revalidateSession from '@/lib/actions/auth.actions';
import {
  IOnboardingSchema,
  OnboardingSchema,
} from '@/lib/validations/UserSchema';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';
import OnboardingVisualStepper from '@/components/onboarding/OnboardingVisualStepper';
import Button from '@/components/shared/ui/Button';

const Onboarding = ({ user }: { user: User }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepFromParams = parseInt(searchParams.get('step') ?? '1', 10);

  const [step, setStep] = useState(stepFromParams);
  let fields = [] as Partial<keyof IOnboardingSchema>[];

  const useFormHelpers = useForm<IOnboardingSchema>({
    defaultValues: {
      name: user?.name ?? '',
      image: user?.image ?? '',
      location: '',
      portfolio: '',
      goals: [],
      knowledgeLevel: [],
      techStack: [],
      availability: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    resolver: zodResolver(OnboardingSchema),
  });

  const { watch, handleSubmit, trigger } = useFormHelpers;
  const formData = watch();

  const filterData = (data: IOnboardingSchema) => {
    const filteredData = Object.keys(data).filter((key) =>
      fields.includes(key as keyof IOnboardingSchema)
    );
    const dataToSend = filteredData.reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: data[cur],
        onboardingStatus: step + 1,
      };
    }, {});
    return dataToSend;
  };

  const validateSpecificFields = async () => {
    const isValid = await Promise.all(fields.map((field) => trigger(field)));
    const allFieldsValid = isValid.every((field) => field === true);
    return allFieldsValid;
  };

  const validateFields = async () => {
    switch (step) {
      case 1:
        fields = ['name', 'portfolio', 'image'];
        break;
      case 2:
        fields = ['goals'];
        break;
      case 3:
        fields = ['knowledgeLevel', 'techStack'];
        break;
      case 4:
        fields = ['availability', 'startDate', 'endDate'];
        break;
    }

    const allFieldsValid = await validateSpecificFields();
    if (allFieldsValid) {
      try {
        const dataToSend = filterData(formData);
        await updateUser(dataToSend);
      } catch (error) {
        toast.error('Unable to update user');
      } finally {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const onSubmit: SubmitHandler<IOnboardingSchema> = async (data) => {
    try {
      await updateUser(data);
      await revalidateSession();
      router.push('/');
    } catch (error) {
      toast.error('Unable to update user');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section>
            <BasicInformation
              useFormHelpers={useFormHelpers}
              formData={formData}
            />
          </section>
        );

      case 2:
        return (
          <section>
            <LearningGoals useFormHelpers={useFormHelpers} />
          </section>
        );
      case 3:
        return (
          <section>
            <KnowledgeLevel useFormHelpers={useFormHelpers} />
          </section>
        );
      case 4:
        return (
          <section>
            <Availability useFormHelpers={useFormHelpers} />
          </section>
        );
    }
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="bg-black-800 p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <OnboardingVisualStepper step={step} />
          {renderStep()}
          {step === 4 ? (
            <Button color="blue" type="submit">
              Submit
            </Button>
          ) : (
            <Button color="blue" type="button" onClick={validateFields}>
              Next
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
