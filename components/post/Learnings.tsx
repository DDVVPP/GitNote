"use client";

import React from "react";

import { Button } from "@/components/shared/ui";
import { CheckSquare, X } from "lucide-react";

const Learnings = ({
  useFormHelpers,
  register,
  useFieldArray,
}: {
  useFormHelpers: any;
  register: any;
  useFieldArray: any;
}) => {
  const { control, formState } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "learnings",
    control,
  });

  return (
    <section className="space-y-6">
      <label className="paragraph-3-medium text-white-300">
        What you learned
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
                placeholder="Enter what you've learned"
                {...register(`learnings.${index}`)}
              />
              <button type="button" onClick={() => remove(index)}>
                <X
                  className="text-white-500 hover:text-white-300 hover:duration-300"
                  size={16}
                />
              </button>
            </div>

            <div>
              {formState.errors.learnings && (
                <span className="text-error-500 paragraph-3-regular mt-2">
                  {formState.errors.learnings[index]?.message}
                </span>
              )}
            </div>
          </React.Fragment>
        );
      })}

      <div className="mt-2">
        <Button
          type="button"
          color="gray"
          icon="plus"
          onClick={() => append("")}
        >
          Add checkmark
        </Button>
      </div>
    </section>
  );
};

export default Learnings;
