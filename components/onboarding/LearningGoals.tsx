'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Button from '@/components/shared/ui/Button';
import Goals from '@/components/shared/Goals';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';
import GoalsField from '../shared/GoalsField';

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
};

const placeholderGoals = [
  "Follow Clerk's installation process",
  'Setup Clerk with Nextjs + Clerk webhook',
];

const LearningGoals = ({ setStep }: Props) => {
  const [learningGoal, setGoal] = useState('');
  const [learningGoals, setLearningGoals] = useState(placeholderGoals);

  // useEffect(() => {
  //   if (data) {
  //     setLearningGoals(data)
  //   }
  // }, [])

  const addGoal = () => {
    //add to db THEN
    if (learningGoal.length > 0) {
      setLearningGoals((learningGoals) => [...learningGoals, learningGoal]);
    }
  };

  const removeGoal = (label: string) => {
    console.log(label);
    //remove from db THEN
    setLearningGoals((learningGoals) =>
      learningGoals.splice(learningGoals.indexOf(label), 1)
    );
  };

  return (
    <>
      <OnboardingStepDots />
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>
      <form>
        <div className="mb-3">
          <p className="paragraph-3-regular text-white-300 mb-1">
            Learning goals
          </p>
          {learningGoals.length > 0 &&
            learningGoals.map((goal) => (
              <Goals label={goal} removeGoal={removeGoal} />
            ))}
          <GoalsField placeholder="Enter a learning goal" setGoal={setGoal} />
        </div>
        <Button color="darkGray" icon="plus" onClick={addGoal}>
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
