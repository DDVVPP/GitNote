"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { CreateType } from "@prisma/client";

import { Input } from "@/components/shared/ui";
import Learnings from "./Learnings";
import CodeEditor from "./CodeEditor";
import Steps from "./Steps";
import Tags from "./Tags";

const BasicInformationPost = ({
  useFormHelpers,
  register,
  useFieldArray,
}: {
  useFormHelpers: any;
  register: any;
  useFieldArray: any;
}) => {
  const { trigger, control, watch, setValue } = useFormHelpers;
  const postType = watch("createType");

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

      <Tags useFormHelpers={useFormHelpers} />

      <div className="text-white-300 flex flex-col">
        <label className="paragraph-3-medium mb-2">Description</label>
        <textarea
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          placeholder="Enter a short description"
          {...register("description")}
        />
      </div>

      {postType === CreateType.KNOWLEDGE && (
        <Learnings
          useFieldArray={useFieldArray}
          useFormHelpers={useFormHelpers}
          register={register}
        />
      )}

      {postType === CreateType.COMPONENT && (
        <CodeEditor register={register} useFormHelpers={useFormHelpers} />
      )}

      {postType === CreateType.WORKFLOW && (
        <Steps
          useFieldArray={useFieldArray}
          useFormHelpers={useFormHelpers}
          register={register}
        />
      )}
    </section>
  );
};

export default BasicInformationPost;
