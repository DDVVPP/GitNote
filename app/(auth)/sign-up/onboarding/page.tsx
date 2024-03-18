'use client';

import { redirect, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
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

  const { register, handleSubmit, formState, trigger, control } =
    useForm<IOnboardingSchema>({
      defaultValues: {
        name: '',
        image: '',
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

  const {
    fields: fieldsArray,
    append,
    remove,
  } = useFieldArray({
    name: 'goals',
    control,
  });
  console.log('formstate', formState);
  const onSubmit: SubmitHandler<IOnboardingSchema> = async (data) => {
    let fields = [] as Partial<keyof IOnboardingSchema>[];
    console.log('DATA IN ONSUBMIT', data);
    console.log('data.filelist', typeof data.image[0].name);

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
    const allFieldsValid = await validateSomeFields(fields);
    console.log('all fields valid', allFieldsValid);
    if (allFieldsValid) {
      try {
        const filteredData = Object.keys(data).filter((key) =>
          fields.includes(key as keyof IOnboardingSchema)
        );
        const dataToSend = filteredData.reduce((acc, cur) => {
          return { ...acc, [cur]: data[cur], onboardingStatus: step + 1 };
        }, {});
        console.log('DATATOSEND', dataToSend);
        if (data.image) {
          dataToSend.image = data.image[0].name;
        }
        updateUser(dataToSend);
      } catch (error) {
        toast.error('Unable to update user');
      } finally {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const validateSomeFields = async (fields: string[]) => {
    console.log('in validate some fields', fields);
    const isValid = await Promise.all(fields.map((field) => trigger(field)));
    const allFieldsValid = isValid.every((field) => field === true);

    return allFieldsValid;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section>
            <BasicInformation register={register} formState={formState} />
          </section>
        );

      case 2:
        return (
          <section>
            <LearningGoals
              register={register}
              formState={formState}
              fieldsArray={fieldsArray}
              append={append}
              remove={remove}
              control={control}
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
        <Button color="blue" type="submit">
          Next
        </Button>
      </form>
    </div>
  );
};

export default Onboarding;
