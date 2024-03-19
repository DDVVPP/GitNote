'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import Button from '@/components/shared/ui/Button';
import Goal from '@/components/shared/Goal';
import GoalsField from '../shared/GoalsField';

type Goals = {
  name: string;
  isChecked: boolean;
};

const LearningGoals = ({
  register,
  fieldsArray,
  append,
  remove,
  control,
  setValue,
}: {
  register: any;
  fieldsArray: any;
  append: any;
  remove: any;
  control: any;
  setValue: any;
}) => {
  const [learningGoalText, setLearningGoalText] = useState('');
  const [checked, setIsChecked] = useState(false);

  const updateCheckStatus = (index: number) => {
    //Brandon, is this weird?
    setIsChecked((currStatus) => !currStatus);
    setValue(`goals.${index}.isComplete`, !checked);
  };

  const addGoal = () => {
    append({ name: learningGoalText, isComplete: false });
    setLearningGoalText('');
  };

  console.log('fieldsArray', fieldsArray);
  return (
    <>
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>

      <section className="mb-3">
        <p className="paragraph-3-regular text-white-300 mb-1">
          Learning goals
        </p>

        {fieldsArray.map((field: { name: string }, index: number) => {
          return (
            <Goal
              field={field}
              index={index}
              remove={remove}
              updateCheckStatus={updateCheckStatus}
              // {...register(`goals.${index}.isComplete`)}
            />
          );
        })}
        <GoalsField
          learningGoalText={learningGoalText}
          setLearningGoalText={setLearningGoalText}
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
