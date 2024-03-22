'use client';

import { X } from 'lucide-react';

import Button from '@/components/shared/ui/Button';
import { useFieldArray } from 'react-hook-form';

const LearningGoals = ({
  register,
  formState,
  control,
  watch,
}: {
  register: any;
  formState: any;
  control: any;
  watch: any;
}) => {
  const {
    fields: fieldsArray,
    append,
    remove,
  } = useFieldArray({
    name: 'goals',
    control,
  });

  return (
    <>
      <h1 className="display-2-bold pb-5">Add your learning goals</h1>

      <section className="mb-3">
        <p className="paragraph-3-regular text-white-300 mb-1">
          Learning goals
        </p>

        {fieldsArray.map((field, index) => {
          const nameValue = watch(`goals.${index}.name`);
          return (
            <section>
              <div
                className="bg-black-700 py-1 px-3 mb-2 flex  justify-between items-center"
                key={field.id}
              >
                <input
                  type="checkbox"
                  disabled={!nameValue}
                  className="appearance-none border border-white-500 h-3 w-3 bg-white-500 rounded-sm text-green-400"
                  {...register(`goals.${index}.isComplete`)}
                />
                {nameValue}
                <input
                  type="text"
                  className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 w-full rounded-md focus:outline-none border-none pl-0 ml-2"
                  placeholder="Enter a learning goal"
                  {...register(`goals.${index}.name`)}
                />

                <button>
                  <X
                    className="text-white-500"
                    size={16}
                    onClick={() => remove(index)}
                  />
                </button>
              </div>
              <div className="mb-4 mt-(-2) ">
                {formState.errors.goals &&
                  formState.errors.goals[index]?.name.message && (
                    <span className="text-error-500 paragraph-3-regular mt-2">
                      {formState.errors.goals[index].name.message}
                    </span>
                  )}
              </div>
            </section>
          );
        })}
      </section>
      <div className="mb-4">
        <Button
          color="darkGray"
          icon="plus"
          onClick={() => append({ name: '', isComplete: false })}
        >
          Add goal checkbox
        </Button>
      </div>
    </>
  );
};

export default LearningGoals;
