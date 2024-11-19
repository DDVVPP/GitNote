import React from "react";
import { X } from "lucide-react";

import { Button } from "../shared";

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
                    type="text"
                    className="paragraph-3-regular bg-black-700 placeholder:text-white-500 w-full rounded-md border-none p-3 focus:outline-none"
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
                    type="text"
                    className="paragraph-3-regular bg-black-700 placeholder:text-white-500 w-full rounded-md border-none p-3 focus:outline-none"
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
                  className="bg-black-700 h-11 rounded px-3"
                  onClick={() => remove(index)}
                >
                  <X
                    className="text-white-500 hover:text-white-300 hover:duration-300"
                    size={16}
                  />
                </button>
              </div>

              <div className="xs-b:hidden flex w-full flex-col gap-y-2">
                <div className="flex gap-x-2">
                  <div className="flex w-full flex-col">
                    <input
                      type="text"
                      className="paragraph-3-regular bg-black-700 placeholder:text-white-500 w-full rounded-md border-none p-3 focus:outline-none"
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
                  <button
                    type="button"
                    className="bg-black-700 h-11 rounded px-3"
                    onClick={() => remove(index)}
                  >
                    <X
                      className="text-white-500 hover:text-white-300 hover:duration-300"
                      size={16}
                    />
                  </button>
                </div>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    className="paragraph-3-regular bg-black-700 placeholder:text-white-500 w-full rounded-md border-none p-3 focus:outline-none"
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
