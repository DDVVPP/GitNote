import { Controller } from "react-hook-form";
import { CreateType } from "@prisma/client";

import { Input } from "@/components/shared/ui";

const BasicInformationPost = ({
  useFormHelpers,
  register,
}: {
  useFormHelpers: any;
  register: any;
}) => {
  const { trigger, control } = useFormHelpers;

  return (
    <section className="space-y-6">
      <h3 className="paragraph-3-medium text-white-500 mb-6">
        BASIC INFORMATION
      </h3>

      <Controller
        control={control}
        name="title"
        render={({
          field: { name, onChange, ...rest },
          formState: { errors },
        }) => (
          <Input
            label="Title"
            id={name}
            {...rest}
            onChange={(event) => {
              onChange(event);
              trigger(name);
            }}
            placeholder="Enter your title of your post"
            errors={errors.title?.message as string}
          />
        )}
      />

      <div className="paragraph-3-medium text-white-300 flex flex-col">
        <label className="paragraph-3-medium text-white-300 mb-2 ">
          Create Type
        </label>
        <select
          id="createType"
          className="paragraph-3-regular text-white-300 bg-black-700 cursor-pointer rounded-md border-none p-3"
          {...register("createType")}
        >
          <option
            className="paragraph-3-regular text-white-300"
            value={CreateType.COMPONENT}
          >
            Component
          </option>
          <option
            className="paragraph-3-regular text-white-300"
            value={CreateType.KNOWLEDGE}
          >
            Knowledge
          </option>
          <option
            className="paragraph-3-regular text-white-300"
            value={CreateType.WORKFLOW}
          >
            Workflow
          </option>
        </select>
      </div>

      <Controller
        control={control}
        name="tags"
        render={({
          field: { name, onChange, ...rest },
          formState: { errors },
        }) => (
          <Input
            label="Tags"
            type="search"
            id="tags"
            {...rest}
            onChange={(event) => {
              onChange(event);
              trigger(name);
            }}
            placeholder="Search tags"
            errors={errors.tags?.message as string}
          />
        )}
      />

      <div className="text-white-300 flex flex-col">
        <label className="paragraph-3-medium mb-2">Description</label>
        <textarea
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          placeholder="Enter a short description"
          {...register("description")}
        />
      </div>

      <div className="text-white-300 flex flex-col space-y-2">
        {/* placeholder */}
        <div className="paragraph-3-medium flex  rounded-md border-none">
          <label className="bg-black-700 rounded p-3">Code</label>
          <label className="bg-black-800 rounded p-3">Preview</label>
        </div>

        <textarea
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          placeholder=""
          {...register("codeEditor")}
        />
      </div>
    </section>
  );
};

export default BasicInformationPost;
