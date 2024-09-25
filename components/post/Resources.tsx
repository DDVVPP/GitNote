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
            <React.Fragment key={field.id}>
              <div className="mb-2 flex gap-x-2">
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    className="placeholder:text-white-500 paragraph-3-regular bg-black-700 w-full rounded-md border-none p-3 focus:outline-none"
                    placeholder="Label"
                    {...register(`resources.${index}.label`)}
                  />

                  {errors.resources &&
                    errors.resources[index]?.label?.message && (
                      <span className="text-error-500 paragraph-3-regular">
                        {errors.resources[index].label.message}
                      </span>
                    )}
                </div>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    className="placeholder:text-white-500 paragraph-3-regular bg-black-700 w-full rounded-md border-none p-3 focus:outline-none"
                    placeholder="Resource Link"
                    {...register(`resources.${index}.link`)}
                  />
                  {errors.resources &&
                    errors.resources[index]?.link?.message && (
                      <span className="text-error-500 paragraph-3-regular">
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
            </React.Fragment>
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
