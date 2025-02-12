"use client";

import React from "react";
import { useFieldArray } from "react-hook-form";
import { CheckSquare, X } from "lucide-react";

import Button from "../shared/ui/Button";
import TechStack from "./TechStack";

const KnowledgeLevel = ({
  useFormHelpers,
  isEditProfile = false,
}: {
  useFormHelpers: any;
  isEditProfile?: boolean;
}) => {
  const { register, formState, control, watch, setValue } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "knowledgeLevel",
    control,
  });

  return (
    <div>
      {!isEditProfile && (
        <h1 className="display-2-bold mb-5">Add your knowledge level</h1>
      )}

      <section>
        <div>
          {isEditProfile && (
            <h3 className="paragraph-3-medium mb-5 text-white-500">
              KNOWLEDGE LEVEL
            </h3>
          )}
          <p className="paragraph-3-regular text-white-300">Knowledge Level</p>

          {fields.map((field, index) => {
            return (
              <React.Fragment key={field.id}>
                <div className="my-2 flex items-center justify-between bg-black-700 px-3 py-1">
                  <div className="flex items-center space-x-2">
                    <CheckSquare className="text-primary-500" size={16} />
                  </div>
                  <input
                    className="paragraph-3-regular placeholder:paragraph-3-regular ml-2 w-full rounded-md border-none bg-black-700 pl-1 text-white-100 placeholder:text-white-300 focus:outline-none"
                    placeholder="Enter a knowledge level"
                    {...register(`knowledgeLevel.${index}`)}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    <X
                      className="text-white-500 hover:text-white-300 hover:duration-300"
                      size={16}
                    />
                  </button>
                </div>

                <div>
                  {formState.errors.knowledgeLevel && (
                    <span className="error-message">
                      {formState.errors.knowledgeLevel[index]?.message}
                    </span>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-2">
          <Button
            type="button"
            color="gray"
            icon="plus"
            onClick={() => append("")}
          >
            Add knowledge checkmark
          </Button>
        </div>
      </section>

      <TechStack watch={watch} setValue={setValue} />
    </div>
  );
};

export default KnowledgeLevel;
