"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { CreateType } from "@prisma/client";

import { Input } from "@/components/shared/ui";
import Learnings from "./Learnings";
import CodeEditor from "./CodeEditor";
import Steps from "./Steps";
import Tags from "./Tags";
import CreateTypeSelect from "./CreateTypeSelect";

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
  const codeContent = watch("codeEditor");

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

      <CreateTypeSelect setValue={setValue} postType={postType} />

      <Tags setValue={setValue} />

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
        <Controller
          control={control}
          name="codeEditor"
          render={({ field: { onChange } }) => (
            <CodeEditor onChange={onChange} codeContent={codeContent} />
          )}
        />
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
