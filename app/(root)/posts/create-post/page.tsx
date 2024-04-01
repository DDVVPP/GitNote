"use client";

import React from "react";
import { Loader2, X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { CreateType, Goals, User } from "@prisma/client";
import { IPostSchema, PostSchema } from "@/lib/validations/PostSchema";

import { createPost } from "@/lib/actions/post.actions";
import { Button } from "@/components/shared/ui";
import BasicInformationPost from "@/components/post/BasicInformationPost";
import Content from "@/components/post/Content";
import Resources from "@/components/post/Resources";

const CreatePost = ({ user }: { user: User & { goals?: Goals[] } }) => {
  const router = useRouter();
  const useFormHelpers = useForm<IPostSchema>({
    defaultValues: {
      title: "",
      createType: CreateType.COMPONENT,
      description: "",
      codeEditor: "",
      content: "",
      steps: [],
      learnings: [],
      // tags: [],
      resources: [],
    },
    resolver: zodResolver(PostSchema),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useFormHelpers;
  const formData = watch();
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
      <h1 className="display-2-bold mb-5">Create Post</h1>
      <div className="space-y-14">
        <section className="space-y-8">
          <BasicInformationPost
            useFormHelpers={useFormHelpers}
            register={register}
            useFieldArray={useFieldArray}
          />

          <Content register={register} />
          <Resources
            register={register}
            useFieldArray={useFieldArray}
            control={control}
            errors={errors}
          />
        </section>

        <Button color="blue" type="submit">
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Update Profile"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CreatePost;
