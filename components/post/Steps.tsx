"use client";

import React from "react";

import { Button } from "@/components/shared/ui";
import { CheckSquare, X } from "lucide-react";

const Steps = ({
  useFormHelpers,
  register,
  useFieldArray,
}: {
  useFormHelpers: any;
  register: any;
  useFieldArray: any;
}) => {
  const { trigger, control, formState } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "steps",
    control,
  });

  return (
    <section className="space-y-6">
      <label className="paragraph-3-medium text-white-300">
        Steps to follow
      </label>
      {fields.map((field: { id: number }, index: number) => {
        return (
          <React.Fragment key={field.id}>
            <div className="bg-black-700 mb-2 mt-2 flex items-center justify-between px-3 py-1">
              <div className="flex items-center space-x-2">
                <CheckSquare className="text-primary-500" size={16} />
              </div>
              <input
                className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 ml-2 w-full rounded-md border-none pl-1 focus:outline-none"
                placeholder="Enter a step"
                {...register(`steps.${index}`)}
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
              {formState.errors.steps && (
                <span className="text-error-500 paragraph-3-regular mt-2">
                  {formState.errors.steps[index]?.message}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}

      <div className="mt-2">
        <Button color="gray" icon="plus" onClick={() => append("")}>
          Add checkmark
        </Button>
      </div>
    </section>
  );
};

export default Steps;
