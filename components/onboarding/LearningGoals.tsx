"use client";

import { useFieldArray } from "react-hook-form";
import { X } from "lucide-react";

import Button from "@/components/shared/ui/Button";

const LearningGoals = ({
  useFormHelpers,
  isEditProfile = false,
}: {
  useFormHelpers: any;
  isEditProfile?: boolean;
}) => {
  const { register, formState, control, watch } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "goals",
    control,
  });

  return (
    <>
      {!isEditProfile && (
        <h1 className="display-2-bold pb-5">Add your learning goals</h1>
      )}

      <section className="mb-3">
        {isEditProfile && (
          <h3 className="paragraph-3-medium text-white-500 mb-5">
            LEARNING GOALS
          </h3>
        )}
        <p className="paragraph-3-regular text-white-300 mb-2">
          Learning goals
        </p>

        {fields.map((field, index) => {
          const goalNameValue = watch(`goals.${index}.name`);
          return (
            <>
              <div
                className="bg-black-700 mb-2 flex items-center justify-between px-3 py-1"
                key={field.id}
              >
                <input
                  type="checkbox"
                  disabled={!goalNameValue}
                  className="border-white-500 bg-white-500 h-3 w-3 appearance-none rounded-sm border text-green-400"
                  {...register(`goals.${index}.isComplete`)}
                />
                <input
                  type="text"
                  className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 ml-2 w-full rounded-md border-none pl-1 focus:outline-none"
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

              <div>
                {formState.errors.goals &&
                  formState.errors.goals[index]?.name.message && (
                    <span className="text-error-500 paragraph-3-regular">
                      {formState.errors.goals[index].name.message}
                    </span>
                  )}
              </div>
            </>
          );
        })}
      </section>

      <section className="mb-4">
        <Button
          color="darkGray"
          icon="plus"
          onClick={() => append({ name: "", isComplete: false })}
        >
          Add goal checkbox
        </Button>
      </section>
    </>
  );
};

export default LearningGoals;
