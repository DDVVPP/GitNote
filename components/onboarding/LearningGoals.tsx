'use client';

import { useState } from 'react';

import Button from '@/components/shared/ui/Button';
import Goal from '@/components/shared/Goal';
import GoalsField from '../shared/GoalsField';

type Goals = {
  name: string;
  isChecked: boolean;
};

const LearningGoals = ({
  register,
  formState,
}: {
  register: any;
  formState: any;
}) => {
  const [learningGoalText, setLearningGoalText] = useState('');
  const [learningGoals, setLearningGoals] = useState<Array<Goals>>();
  console.log('learninggoals', learningGoals);
  console.log('formstate', formState);
  const updateCheckStatus = (index: number) => {
    console.log('index', index);
    if (learningGoals) {
      setLearningGoals(
        learningGoals?.map((goal, currIdx) => {
          return currIdx === index
            ? { ...goal, isChecked: !goal.isChecked }
            : goal;
        })
      );
    }
  };

  const addGoal = () => {
    if (learningGoalText.length > 0) {
      learningGoals
        ? setLearningGoals((currGoals) => {
            return (
              currGoals && [
                ...currGoals,
                { name: learningGoalText, isChecked: false },
              ]
            );
          })
        : setLearningGoals([{ name: learningGoalText, isChecked: false }]);
    }
    setLearningGoalText('');
  };

  const removeGoal = (label: string) => {
    const filteredArray =
      learningGoals &&
      learningGoals.filter((goal) => {
        return goal.name !== label;
      });
    setLearningGoals(filteredArray);
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>

      <section className="mb-3">
        <p className="paragraph-3-regular text-white-300 mb-1">
          Learning goals
        </p>
        {learningGoals &&
          learningGoals.map((goal, index) => (
            <Goal
              key={goal.name}
              removeGoal={removeGoal}
              onChange={() => updateCheckStatus(index)}
              label={goal.name}
            />
          ))}

        <GoalsField
          placeholder="Enter a learning goal"
          setLearningGoalText={setLearningGoalText}
          learningGoalText={learningGoalText}
          value={learningGoalText}
        />
      </section>
      <div className="mb-4">
        <Button color="darkGray" icon="plus" onClick={addGoal}>
          Add goal checkbox
        </Button>
      </div>
    </>
  );
};

export default LearningGoals;
