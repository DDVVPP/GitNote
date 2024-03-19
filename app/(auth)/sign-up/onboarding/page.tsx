'use client';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
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

const Onboarding = () => {
  const searchParams = useSearchParams();
  const stepFromParams = parseInt(searchParams.get('step') ?? '1', 10);
  const [step, setStep] = useState(stepFromParams);

  const {
    register,
    handleSubmit,
    formState,
    trigger,
    control,
    watch,
    setValue,
  } = useForm<IOnboardingSchema>({
    defaultValues: {
      name: '',
      imageURL: '',
      onboardingStatus: step,
      location: '',
      portfolio: '',
      goals: [{ name: '', isComplete: false }],
      knowledgeLevel: [],
      techStack: [],
      availability: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    resolver: zodResolver(OnboardingSchema),
  });

  const watchAllFields = watch();
  useEffect(() => {
    console.log('watchAllFields', watchAllFields);
  }, [watchAllFields]);

  const {
    fields: fieldsArray,
    append,
    remove,
  } = useFieldArray({
    name: 'goals',
    control,
  });

  const validateFields = async () => {
    let fields = [] as Partial<keyof IOnboardingSchema>[];

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

    const allFieldsValid = await validateSomeFields(fields);
    console.log('all fields valid', allFieldsValid);

    if (allFieldsValid) {
      setStep((prevStep) => prevStep + 1);

      //update user with onboarding step
    }
  };

  const validateSomeFields = async (fields: string[]) => {
    const isValid = await Promise.all(fields.map((field) => trigger(field)));
    const allFieldsValid = isValid.every((field) => field === true);

    return allFieldsValid;
  };

  const onSubmit: SubmitHandler<IOnboardingSchema> = async (data) => {
    try {
      console.log('data in onSubmit>>>', data);
      // const filteredData = Object.keys(data).filter((key) =>
      //   fields.includes(key as keyof IOnboardingSchema)
      // );
      // const dataToSend = filteredData.reduce((acc, cur) => {
      //   return {
      //     ...acc,
      //     [cur]: data[cur],
      //     onboardingStatus: step + 1,
      //   };
      // }, {});

      // updateUser(dataToSend);
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
              fieldsArray={fieldsArray}
              append={append}
              remove={remove}
            />
          </section>
        );
      case 3:
        return (
          <section>
            <KnowledgeLevel />
          </section>
        );
      case 4:
        return (
          <section>
            <Availability />
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
