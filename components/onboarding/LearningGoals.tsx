'use client';

import { useState } from 'react';
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
  formState,
  fieldsArray,
  append,
  remove,
  control,
}: {
  register: any;
  formState: any;
  fieldsArray: any;
  append: any;
  remove: any;
  control: any;
}) => {
  const [learningGoalText, setLearningGoalText] = useState('');
  const [learningGoals, setLearningGoals] = useState<Array<Goals>>();
  // console.log('learninggoals', learningGoals);
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
    // append({ name: learningGoalText, isComplete: false });
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
        {fieldsArray.map((field, index) => {
          return (
            <div
              className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle"
              key={field.name}
            >
              <div>
                <input
                  type="checkbox"
                  className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400 mr-2"
                  id={`goals.${index}.isComplete`}
                  onChange={() => updateCheckStatus(index)}
                  {...register(`goals.${index}.isComplete`)}
                />
                <span className={'paragraph-3-regular  text-white-100'}>
                  {field.name}
                </span>
              </div>
              <div className="items-center">
                <button onClick={() => remove(index)}>
                  <X className="text-white-500" size={16} />
                </button>
              </div>
            </div>
          );
        })}
        {/* {fieldsArray.map((field, index) => { */}
        {/* return ( */}
        <div className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center">
          <input
            type="checkbox"
            disabled
            className="appearance-none border border-white-500 h-3 w-3 bg-white-500 rounded-sm text-green-400"
          />
          <input
            className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
            placeholder="Enter a learning goal"
            id={`goals.0.name`}
            type="text"
            onChange={(e) => {
              setLearningGoalText(e.target.value);
            }}
            value={learningGoalText}
            {...register(`goals.0.name`)}
          />
          <button
            onClick={() => {
              setLearningGoalText('');
            }}
          >
            <X className="text-white-500" size={16} />
          </button>
        </div>
        {/* ); */}
        {/* })} */}
        {/* {learningGoals &&
          learningGoals.map((goal, index) => {
            return (
              <div
                className="bg-black-700 p-3 mb-2 flex  justify-between items-center align-middle"
                key={goal.name}
              >
                <div>
                  <input
                    type="checkbox"
                    className="appearance-none border border-white-500 h-3 w-3 bg-black-700 rounded-sm cursor-pointer text-green-400 mr-2"
                    id={`goals.${index}.isComplete`}
                    onChange={() => updateCheckStatus(index)}
                    {...register(`goals.${index}.isComplete`)}
                  />
                  <span
                    className={'paragraph-3-regular  text-white-100'}
                    htmlFor={`goals.${index}.name`}
                    {...register(`goals.${index}.name`)}
                  >
                    {goal.name}
                  </span>
                </div>
                <div className="items-center">
                  <button onClick={() => removeGoal(goal.name as string)}>
                    <X className="text-white-500" size={16} />
                  </button>
                </div>
              </div>
            );
          })} */}
        {/*
            // <Goal
            //   key={goal.name}
            //   removeGoal={removeGoal}
            //   onChange={() => updateCheckStatus(index)}
            //   label={goal.name}
            //   value={goal.name}
            //   {...register(`goals.${index}`)}
            // />
            // {/* {goal.name}
            </Goal>
          ))}*/}
        {/* <GoalsField
          placeholder="Enter a learning goal"
          setLearningGoalText={setLearningGoalText}
          learningGoalText={learningGoalText}
          value={learningGoalText}
        /> */}
      </section>
      <div className="mb-4">
        <Button
          color="darkGray"
          icon="plus"
          onClick={() => {
            append({ name: '', isComplete: false });
          }}
        >
          Add goal checkbox
        </Button>
        {/* <Button color="darkGray" icon="plus" onClick={addGoal}>
          Add goal checkbox
        </Button> */}
      </div>
    </>
  );
};

export default LearningGoals;
