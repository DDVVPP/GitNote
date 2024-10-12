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

import { CreateType, Post, Resource } from "@prisma/client";
import { IPostSchema, PostSchema } from "@/lib/validations/PostSchema";
import { updatePost } from "@/lib/actions/post.actions";

import { Button } from "@/components/shared/ui";
import BasicInformationPost from "@/components/post/BasicInformationPost";
import Content from "@/components/post/Content";
import Resources from "@/components/post/Resources";

const UpdatePost = ({
  post,
}: {
  post: Post & { resources?: Partial<Resource[]> };
}) => {
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
    watch,
    formState: { isSubmitting, errors, defaultValues, isDirty },
  } = useFormHelpers;
  const { control } = useFormHelpers;
  const tagsInput = watch("tags");

  const onSubmit: SubmitHandler<IPostSchema> = async (data) => {
    const postId = post.id;
    try {
      await updatePost(data, postId);
      router.push(`/posts/${postId}`);
    } catch (error) {
      console.log("error in catch", error);
      toast.error("Unable to update post");
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
            errors={errors}
          />
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange } }) => (
              <Content onChange={onChange} content={defaultValues?.content} />
            )}
          />

          <Resources
            register={register}
            useFieldArray={useFieldArray}
            control={control}
            errors={errors}
          />
        </section>

        <div className="flex gap-x-4">
          <Button
            color="gray"
            type="button"
            onClick={() => router.push(`/posts/${post.id}`)}
          >
            Cancel
          </Button>
          <Button
            color="blue"
            type="submit"
            disabled={
              defaultValues?.tags?.length === tagsInput.length && !isDirty
            }
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Update Post"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdatePost;
