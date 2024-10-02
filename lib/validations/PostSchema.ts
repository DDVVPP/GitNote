import { z } from "zod";

import { urlMatch } from "../utils/constants";
import { CreateType } from "@prisma/client";

export type IPostSchema = z.infer<typeof PostSchema>;
export const PostSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "Name must contain at least 3 characters" }),
    createType: z.nativeEnum(CreateType),
    description: z
      .string()
      .min(20, { message: "Description must contain at least 20 characters" }),
    codeEditor: z.string().optional(),
    content: z.string(),
    steps: z.string().min(1).array(),
    learnings: z.string().min(3).array(),
    tags: z.string().min(1).array(),
    resources: z.array(
      z.object({
        id: z.number().optional(),
        label: z
          .string()
          .min(1, { message: "Label must contain at least 3 character" })
          .nullable(),
        link: z
          .string()
          .refine((value) => {
            if (!value) return true;
            return urlMatch.test(value);
          })
          .nullable(),
      })
    ),
  })
  .superRefine((data, ctx) => {
    if (data.createType === CreateType.COMPONENT && !data.codeEditor) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["codeEditor"],
        message: "Code Editor cannot be empty",
      });
    } else if (
      data.createType === CreateType.KNOWLEDGE &&
      data.learnings.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["learnings"],
        message: "Learning checkmark is required",
      });
    } else if (
      data.createType === CreateType.WORKFLOW &&
      data.steps.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["steps"],
        message: "Step checkmark is required",
      });
    }
  });
//-------------------------------
