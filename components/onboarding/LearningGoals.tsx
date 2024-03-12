'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import Button from '@/components/shared/ui/Button';
import Checkbox from '@/components/shared/ui/Checkbox';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const LearningGoals = ({ setStep }: Props) => {
  const [learningGoals, setLearningGoals] = useState([
    'goal goal',
    'complicated learning goal',
  ]);

  return (
    <>
      <OnboardingStepDots />
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>
      <form>
        <div className="mb-3">
          <p className="paragraph-3-regular text-white-300 mb-1">
            Learning goals
          </p>
          {learningGoals.length > 0 ? (
            learningGoals.map((goal) => <Checkbox label={goal} />)
          ) : (
            <Checkbox placeholder="Enter a learning goal" />
          )}
          <Checkbox placeholder="Enter a learning goal" />
        </div>
        <Button
          color="darkGray"
          icon="plus"
          onClick={() => {
            console.log('add goal checkbox');
          }}
        >
          Add goal checkbox
        </Button>
      </form>
      <Button color="blue" onClick={() => setStep(3)}>
        Next
      </Button>
    </>
  );
};

export default LearningGoals;
