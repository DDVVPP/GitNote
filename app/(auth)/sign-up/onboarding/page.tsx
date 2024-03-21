'use client';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import BasicInformation from '@/components/onboarding/BasicInformation';
import LearningGoals from '@/components/onboarding/LearningGoals';
import KnowledgeLevel from '@/components/onboarding/KnowledgeLevel';
import Availability from '@/components/onboarding/Availability';

import Button from '@/components/shared/ui/Button';
import OnboardingStepDots from '@/components/shared/ui/OnboardingStepsVisual';
import {
  IOnboardingSchema,
  OnboardingSchema,
} from '@/lib/validations/UserSchema';
import { updateUser } from '@/lib/actions/user.actions';
// import TechStack from '@/components/onboarding/TechStack';

const Onboarding = () => {
  const searchParams = useSearchParams();
  const stepFromParams = parseInt(searchParams.get('step') ?? '1', 10);
  const [step, setStep] = useState(stepFromParams);
  let fields = [] as Partial<keyof IOnboardingSchema>[];

  const {
    register,
    handleSubmit,
    formState,
    trigger,
    watch,
    setValue,
    control,
  } = useForm<IOnboardingSchema>({
    defaultValues: {
      name: '',
      imageURL: '',
      onboardingStatus: step,
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

  const formData = watch();
  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  const filterData = (data: IOnboardingSchema) => {
    console.log('data in filter', data);
    const filteredData = Object.keys(data).filter((key) =>
      fields.includes(key as keyof IOnboardingSchema)
    );
    console.log('filteredData', filteredData);
    const dataToSend = filteredData.reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: data[cur],
        onboardingStatus: step + 1,
      };
    }, {});
    console.log('dataToSend', dataToSend);
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
        fields = ['name', 'portfolio', 'imageURL'];
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
        updateUser(dataToSend);
      } catch (error) {
        toast.error('Unable to update user');
      } finally {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const onSubmit: SubmitHandler<IOnboardingSchema> = async (data) => {
    console.log('data in onSubmit', data);
    try {
      updateUser(data);
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
              register={register}
              formState={formState}
              setValue={setValue}
            />
          </section>
        );

      case 2:
        return (
          <section>
            <LearningGoals
              register={register}
              formState={formState}
              control={control}
            />
          </section>
        );
      case 3:
        return (
          <section>
            <KnowledgeLevel
              register={register}
              formState={formState}
              control={control}
              watch={watch}
              setValue={setValue}
            />
            {/* <TechStack register={register} watch={watch} setValue={setValue} /> */}
          </section>
        );
      case 4:
        return (
          <section>
            <Availability
              register={register}
              control={control}
              formState={formState}
              watch={watch}
            />
          </section>
        );
      case 5:
        return redirect('/');
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <OnboardingStepDots />
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
  );
};

export default Onboarding;
