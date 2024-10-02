"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { CreateType } from "@prisma/client";

import { Input } from "@/components/shared/ui";
import Learnings from "./Learnings";
import CodeEditor from "./CodeEditor";
import Steps from "./Steps";
import Tags from "./Tags";
import CreateTypeDropdown from "./CreateTypeDropdown";

const BasicInformationPost = ({
  useFormHelpers,
  register,
  useFieldArray,
  errors,
}: {
  useFormHelpers: any;
  register: any;
  useFieldArray: any;
  errors: any;
}) => {
  const {
    trigger,
    control,
    watch,
    setValue,
    formState: { defaultValues },
  } = useFormHelpers;
  const postType = watch("createType");
  const codeContent = watch("codeEditor");
  const { tags } = defaultValues;

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
            required
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

      <CreateTypeDropdown setValue={setValue} postType={postType} />

      <Tags setValue={setValue} defaultValueTags={tags} />

      <div className="text-white-300 flex flex-col">
        <label className="paragraph-3-medium mb-2">
          Description <span className="font-light"> (required)</span>
        </label>
        <textarea
          className="paragraph-3-regular bg-black-700 rounded-md border-none p-3"
          placeholder="Enter a short description"
          {...register("description")}
        />
        {errors?.description && errors.description?.message && (
          <span className="error-message">{errors.description?.message}</span>
        )}
      </div>

      {postType === CreateType.KNOWLEDGE && (
        <Learnings
          useFieldArray={useFieldArray}
          useFormHelpers={useFormHelpers}
          register={register}
          errors={errors.learnings?.message}
        />
      )}

      {postType === CreateType.COMPONENT && (
        <Controller
          control={control}
          name="codeEditor"
          render={({ field: { onChange }, formState: { errors } }) => (
            <CodeEditor
              onChange={onChange}
              codeContent={codeContent}
              errors={errors.codeEditor?.message as string}
            />
          )}
        />
      )}

      {postType === CreateType.WORKFLOW && (
        <Steps
          useFieldArray={useFieldArray}
          useFormHelpers={useFormHelpers}
          register={register}
          errors={errors.steps?.message}
        />
      )}
    </section>
  );
};

export default BasicInformationPost;
