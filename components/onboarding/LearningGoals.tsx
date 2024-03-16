'use client';

import { useEffect, useState } from 'react';

import Button from '@/components/shared/ui/Button';
import Goal from '@/components/shared/Goal';
import OnboardingStepDots from '../shared/ui/OnboardingStepsVisual';
import GoalsField from '../shared/GoalsField';

const placeholderGoals = [
  "Follow Clerk's installation process",
  'Setup Clerk with Nextjs + Clerk webhook',
];

const LearningGoals = ({
  register,
  formState,
}: {
  register: any;
  formState: any;
}) => {
  const [learningGoalText, setLearningGoalText] = useState('');
  const [learningGoals, setLearningGoal] = useState(Array<string>);
  const [isChecked, setIsChecked] = useState(false);
  console.log('isChecked', isChecked);
  const addGoal = () => {
    if (learningGoalText.length > 0) {
      setLearningGoal((goals) => [...goals, learningGoalText]);
    }
    setLearningGoalText('');
  };

  const removeGoal = (label: string) => {
    setLearningGoal((learningGoals) =>
      learningGoals.splice(learningGoals.indexOf(label), 1)
    );
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>

      <section className="mb-3">
        <p className="paragraph-3-regular text-white-300 mb-1">
          Learning goals
        </p>
        {learningGoals.length > 0 &&
          learningGoals.map((goal) => (
            <Goal
              label={goal}
              removeGoal={removeGoal}
              key={goal}
              onChange={(e) => {
                e.target.checked ? setIsChecked(true) : setIsChecked(false);
              }}
              isChecked={isChecked}
            />
          ))}

        <GoalsField
          placeholder="Enter a learning goal"
          setLearningGoalText={setLearningGoalText}
          learningGoalText={learningGoalText}
          value={learningGoalText}
        />
      </section>
      <Button color="darkGray" icon="plus" onClick={addGoal}>
        Add goal checkbox
      </Button>
    </>
  );
};

export default LearningGoals;
