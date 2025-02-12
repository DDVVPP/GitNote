import React from "react";
import { X } from "lucide-react";
import useInputBlurHandler from "@/lib/utils/useInputBlurHandler";

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
  useInputBlurHandler("label");
  useInputBlurHandler("link");

  return (
    <>
      <div className="flex gap-x-2">
        <div className="flex w-full flex-col">
          <input
            id="label"
            type="text"
            className="resources-input-label"
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
          className="resources-x-button"
          onClick={() => remove(index)}
        >
          <X className="resources-x-icon" size={16} />
        </button>
      </div>

      <div className="flex w-full flex-col">
        <input
          id="link"
          type="text"
          className="resources-input-link"
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
