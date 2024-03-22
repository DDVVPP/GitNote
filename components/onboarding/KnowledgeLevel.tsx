"use client";

import { useFieldArray } from "react-hook-form";
import { CheckSquare, X } from "lucide-react";

import Button from "../shared/ui/Button";
import TechStack from "./TechStack";

const KnowledgeLevel = ({ useFormHelpers }: { useFormHelpers: any }) => {
  const { register, formState, control, watch, setValue } = useFormHelpers;
  const { fields, append, remove } = useFieldArray({
    name: "knowledgeLevel",
    control,
  });

  return (
    <div>
      <h1 className="display-2-bold mb-5">Add your knowledge level</h1>

      <section clasName="mb-4">
        <div>
          <p className="paragraph-3-regular text-white-300">Knowledge Level</p>

          {fields.map((field, index) => {
            return (
              <>
                <div
                  className="bg-black-700 mb-2 mt-2 flex items-center justify-between px-3 py-1"
                  key={field.id}
                >
                  <div className="flex items-center space-x-2">
                    <CheckSquare className="text-primary-500" size={16} />
                  </div>
                  <input
                    className="paragraph-3-regular text-white-100 placeholder:paragraph-3-regular placeholder:text-white-300 bg-black-700 ml-2 w-full rounded-md border-none pl-1 focus:outline-none"
                    placeholder="Enter a knowledge level"
                    {...register(`knowledgeLevel.${index}`)}
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
                  {formState.errors.knowledgeLevel && (
                    <span className="text-error-500 paragraph-3-regular mt-2">
                      {formState.errors.knowledgeLevel[index]?.message}
                    </span>
                  )}
                </div>
              </>
            );
          })}
        </div>

        <div className="mt-2">
          <Button color="darkGray" icon="plus" onClick={() => append("")}>
            Add knowledge checkmark
          </Button>
        </div>
      </section>

      <TechStack register={register} watch={watch} setValue={setValue} />
    </div>
  );
};

export default KnowledgeLevel;
