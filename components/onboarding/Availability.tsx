'use client';

import { Dispatch, SetStateAction } from 'react';
import { redirect } from 'next/navigation';

import Button from '../shared/ui/Button';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';
import Datepicker from '../shared/ui/Datepicker';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const Availability = () => {
  return (
    <>
      <OnboardingStepDots />
      <h1 className="display-2-bold mb-4">Schedule & Availability</h1>
      <section className="space-x-2 pb-2">
        <input
          type="checkbox"
          className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400"
        />
        <label className="paragraph-3-regular  text-white-300">
          Are you available for a new project?
        </label>
      </section>

      <section className="flex mt-2 justify-between display-none">
        <Datepicker label="Start Date & Time" />
        <Datepicker label="End Date & Time" />
      </section>
    </>
  );
};

export default Availability;
