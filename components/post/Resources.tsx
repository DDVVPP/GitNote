import { X } from "lucide-react";

import { Button } from "../shared";

const Resources = ({
  useFieldArray,
  register,
  control,
}: {
  useFieldArray: any;
  register: any;
  control: any;
}) => {
  const { fields, append, remove } = useFieldArray({
    name: "resources",
    control,
  });

  return (
    <section>
      <div className="text-white-300 flex flex-col">
        <h3 className="paragraph-3-medium text-white-500 mb-6">
          RESOURCES & LINKS
        </h3>
      </div>

      {fields.map((field: { id: number }, index: number) => {
        return (
          <div key={field.id} className="flex gap-x-2 ">
            <input
              type="text"
              className="placeholder:text-white-500 paragraph-3-regular bg-black-700 w-full rounded-md border-none p-3 focus:outline-none"
              placeholder="Label"
              {...register(`resources.${index}.label`)}
            />

            <input
              type="text"
              className="placeholder:text-white-500 paragraph-3-regular bg-black-700 w-full rounded-md border-none p-3 focus:outline-none"
              placeholder="Resource Link"
              {...register(`resources.${index}.link`)}
            />
            <button className="bg-black-700 rounded p-4">
              <X
                className="text-white-500"
                size={16}
                onClick={() => remove(index)}
              />
            </button>
          </div>
        );
      })}

      <div>
        <Button
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
