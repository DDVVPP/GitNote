"use client";

import React, { useEffect, useState } from "react";
import { CheckSquare, X } from "lucide-react";

import { Button } from "@/components/shared/ui";
import useInputBlurHandler from "@/lib/utils/useInputBlurHandler";

const Learnings = ({
  useFormHelpers,
  register,
  useFieldArray,
  errors,
}: {
  useFormHelpers: any;
  register: any;
  useFieldArray: any;
  errors: any;
}) => {
  const { control, formState, watch } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "learnings",
    control,
  });
  const fieldsInput = watch("learnings");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    fieldsInput[fieldsInput.length - 1] === ""
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [fieldsInput, formState]);

  useInputBlurHandler("learnings");

  return (
    <section className="space-y-6">
      <label className="paragraph-3-medium text-white-300">
        What you learned <span className="font-light"> (required)</span>
      </label>
      {fields.map((field: { id: number }, index: number) => {
        return (
          <React.Fragment key={field.id}>
            <div className="bg-black-700 my-2 flex items-center justify-between px-3 py-1">
              <div className="flex items-center space-x-2">
                <CheckSquare className="text-primary-500" size={16} />
              </div>
              <input
                id="learnings"
                className="paragraph-3-regular placeholder:paragraph-3-regular bg-black-700 text-white-100 placeholder:text-white-300 ml-2 w-full rounded-md border-none pl-1 focus:outline-none"
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

            {formState.errors.learnings && (
              <span className="error-message">
                {formState.errors.learnings[index]?.message}
              </span>
            )}
          </React.Fragment>
        );
      })}

      <div className="mt-2">
        <Button
          type="button"
          color="gray"
          icon="plus"
          onClick={() => {
            append("");
            setIsDisabled(true);
          }}
          disabled={isDisabled}
        >
          Add checkmark
        </Button>
      </div>

      {errors && <span className="error-message">{errors}</span>}
    </section>
  );
};

export default Learnings;
