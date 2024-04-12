"use client";
import React from "react";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitHandler,
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { CreateType, Post, Resource, User } from "@prisma/client";
import { IPostSchema, PostSchema } from "@/lib/validations/PostSchema";

import { createPost } from "@/lib/actions/post.actions";
import { Button } from "@/components/shared/ui";
import BasicInformationPost from "@/components/post/BasicInformationPost";
import Content from "@/components/post/Content";
import Resources from "@/components/post/Resources";

const UpdatePost = ({
  post,
}: {
  post: Post & { resources?: Partial<Resource[]> };
}) => {
  console.log({ post });

  const router = useRouter();
  const useFormHelpers = useForm<IPostSchema>({
    defaultValues: {
      title: post.title ?? "",
      createType: post.createType ?? CreateType.COMPONENT,
      description: post.description ?? "",
      codeEditor: post.codeEditor ?? "",
      content: post.content ?? "",
      steps: post.steps ?? [],
      learnings: post.learnings ?? [],
      tags: post.tags ?? [],
      resources: post.resources ?? [],
    },
    resolver: zodResolver(PostSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, defaultValues },
  } = useFormHelpers;
  const { control } = useFormHelpers;

  const onSubmit: SubmitHandler<IPostSchema> = async (data) => {
    try {
      await createPost(data);
      router.push("/");
    } catch (error) {
      console.log("error in catch", error);
      toast.error("Unable to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
      <h1 className="display-2-bold mb-5">Update Post</h1>
      <div className="space-y-14">
        <section className="space-y-8">
          <BasicInformationPost
            useFormHelpers={useFormHelpers}
            register={register}
            useFieldArray={useFieldArray}
          />
          <Controller
            control={control}
            name="content"
            render={({
              field: { name, onChange, ...rest },
              formState: { errors },
            }) => (
              <Content
                onChange={onChange}
                content={defaultValues?.content ?? ""}
              />
            )}
          />

          <Resources
            register={register}
            useFieldArray={useFieldArray}
            control={control}
            errors={errors}
          />
        </section>

        <Button color="blue" type="submit">
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Update Post"}
        </Button>
      </div>
    </form>
  );
};

export default UpdatePost;
