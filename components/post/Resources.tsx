import React from "react";
import { X } from "lucide-react";

import { Button } from "../shared";
import ResourceFieldsMobile from "./ResourceFieldsMobile";
import useInputBlurHandler from "@/lib/utils/useInputBlurHandler";

const Resources = ({
  useFieldArray,
  register,
  control,
  errors,
}: {
  useFieldArray: any;
  register: any;
  control: any;
  errors: any;
}) => {
  const { fields, append, remove } = useFieldArray({
    name: "resources",
    control,
  });

  useInputBlurHandler("label");
  useInputBlurHandler("link");

  return (
    <section>
      <div className="text-white-300 flex flex-col">
        <h3 className="paragraph-3-medium text-white-500">RESOURCES & LINKS</h3>
      </div>

      <section className="mt-6">
        {fields.map((field: { id: number }, index: number) => {
          return (
            <div key={field.id} className="mb-2 flex gap-x-2">
              <div className="max-xs-b:hidden flex w-full gap-x-2">
                <div className="flex w-full flex-col">
                  <input
                    id="label"
                    type="text"
                    className="resources-input-label"
                    placeholder="Label"
                    {...register(`resources.${index}.label`)}
                  />

                  {errors.resources &&
                    errors.resources[index]?.label?.message && (
                      <span className="error-message">
                        {errors.resources[index].label.message}
                      </span>
                    )}
                </div>
                <div className="flex w-full flex-col">
                  <input
                    id="link"
                    type="text"
                    className="resources-input-link"
                    placeholder="Resource Link"
                    {...register(`resources.${index}.link`)}
                  />
                  {errors.resources &&
                    errors.resources[index]?.link?.message && (
                      <span className="error-message">
                        {errors.resources[index].link.message}
                      </span>
                    )}
                </div>
                <button
                  type="button"
                  className="resources-x-button"
                  onClick={() => remove(index)}
                >
                  <X className="resources-x-icon" size={16} />
                </button>
              </div>

              <div className="xs-b:hidden flex w-full flex-col gap-y-2">
                <ResourceFieldsMobile
                  errors={errors}
                  index={index}
                  register={register}
                  remove={remove}
                />
              </div>
            </div>
          );
        })}
      </section>

      <div className="mt-4">
        <Button
          type="button"
          color="gray"
          icon="plus"
          onClick={() => append({ label: "", link: "" })}
        >
          New Resource
        </Button>
      </div>
    </section>
  );
};

export default Resources;
