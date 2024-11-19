import { X } from "lucide-react";
import React from "react";

type ResourceFieldType = {
  errors: {
    resources: {
      label: { message: string };
      link: { message: string };
    }[];
  };
  index: number;
  register: (type: string) => {};
  remove: (index: number) => void;
};

const ResourceFieldsMobile = ({
  errors,
  index,
  register,
  remove,
}: ResourceFieldType) => {
  return (
    <>
      <div className="flex gap-x-2">
        <div className="flex w-full flex-col">
          <input
            type="text"
            className="paragraph-3-regular bg-black-700 placeholder:text-white-500 w-full rounded-md border-none p-3 focus:outline-none"
            placeholder="Label"
            {...register(`resources.${index}.label`)}
          />

          {errors.resources && errors.resources[index]?.label?.message && (
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
        {errors.resources && errors.resources[index]?.link?.message && (
          <span className="error-message">
            {errors.resources[index].link.message}
          </span>
        )}
      </div>
    </>
  );
};

export default ResourceFieldsMobile;
