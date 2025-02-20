"use client";

import React from "react";
import { useFieldArray } from "react-hook-form";
import { X } from "lucide-react";

import { Button } from "@/components/shared/ui";

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
            <React.Fragment key={field.id}>
              <div className="bg-black-700 mb-2 flex items-center justify-between px-3 py-1">
                <input
                  type="checkbox"
                  disabled={!goalNameValue}
                  className="border-white-500 bg-white-500 text-green-lighter size-3 cursor-pointer appearance-none rounded-sm border"
                  {...register(`goals.${index}.isComplete`)}
                />
                <input
                  type="text"
                  className="paragraph-3-regular placeholder:paragraph-3-regular bg-black-700 text-white-100 placeholder:text-white-300 ml-2 w-full rounded-md border-none pl-1 focus:outline-none"
                  placeholder="Enter a learning goal"
                  {...register(`goals.${index}.name`)}
                />
                <button type="button" onClick={() => remove(index)}>
                  <X
                    className="text-white-500 hover:text-white-300 hover:duration-300"
                    size={16}
                  />
                </button>
              </div>

              <div>
                {formState.errors.goals &&
                  formState.errors.goals[index]?.name?.message && (
                    <span className="error-message">
                      {formState.errors.goals[index].name.message}
                    </span>
                  )}
              </div>
            </React.Fragment>
          );
        })}
      </section>

      <section className="mb-4">
        <Button
          type="button"
          color="gray"
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
