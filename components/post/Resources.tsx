import React, { useState } from "react";

import { Button } from "../shared";
import ResourceFieldsMobile from "./ResourceFieldsMobile";
import useInputBlurHandler from "@/lib/utils/useInputBlurHandler";
import ResourceFields from "./ResourcesFields";
import useMediaQuery from "@/lib/utils/useMediaQuery";

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
  const [isMobile, setIsMobile] = useState(false);

  useInputBlurHandler("label");
  useInputBlurHandler("link");
  useMediaQuery(setIsMobile);

  return (
    <section>
      <div className="text-white-300 flex flex-col">
        <h3 className="paragraph-3-medium text-white-500">RESOURCES & LINKS</h3>
      </div>

      <section className="mt-6">
        {fields.map((field: { id: number }, index: number) => {
          return (
            <div key={field.id} className="mb-2 flex gap-x-2">
              {isMobile ? (
                <div className="flex w-full flex-col gap-y-2">
                  <ResourceFieldsMobile
                    errors={errors}
                    index={index}
                    register={register}
                    remove={remove}
                  />
                </div>
              ) : (
                <div className="flex w-full gap-x-2">
                  <ResourceFields
                    errors={errors}
                    index={index}
                    register={register}
                    remove={remove}
                  />
                </div>
              )}
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
