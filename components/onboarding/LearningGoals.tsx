'use client';

import { X } from 'lucide-react';

import Button from '@/components/shared/ui/Button';

const LearningGoals = ({
  register,
  fieldsArray,
  append,
  remove,
}: {
  register: any;
  fieldsArray: any;
  append: any;
  remove: any;
}) => {
  const addGoal = () => {
    append({ name: '', isComplete: false });
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>

      <section className="mb-3">
        <p className="paragraph-3-regular text-white-300 mb-1">
          Learning goals
        </p>

        {fieldsArray.map((field: { name: string }, index: number) => {
          return (
            <div
              className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center"
              key={field.name}
            >
              <input
                type="checkbox"
                className="appearance-none border border-white-500 h-3 w-3 bg-white-500 rounded-sm text-green-400"
                {...register(`goals.${index}.isComplete`)}
              />
              <input
                className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
                placeholder="Enter a learning goal"
                {...register(`goals.${index}.name`)}
                type="text"
              />
              <button>
                <X
                  className="text-white-500"
                  size={16}
                  onClick={() => remove(index)}
                />
              </button>
            </div>
          );
        })}
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
