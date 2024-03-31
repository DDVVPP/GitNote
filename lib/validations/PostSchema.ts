import { z } from "zod";

import { urlMatch } from "../utils/constants";
import { CreateType } from "@prisma/client";

export type IPostSchema = z.infer<typeof PostSchema>;
export const PostSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Name must contain at least 3 characters" }),
  createType: z.nativeEnum(CreateType),
  description: z
    .string()
    .min(1, { message: "Description must contain at least 20 characters" }),
  codeEditor: z.string().optional(),
  learnings: z.string().min(1).array(),
  steps: z.string().min(1).array(),
  content: z.string().optional(),
  tags: z.string().min(1).array(),
  resources: z.array(
    z.object({
      id: z.number().optional(),
      label: z
        .string()
        .min(1, { message: "Label must contain at least 3 character" })
        .optional(),
      link: z
        .string()
        .refine((value) => {
          if (!value) return true;
          return urlMatch.test(value);
        })
        .optional(),
    })
  ),
});
//-------------------------------

// .refine((data) => {
//   if (data.role === 'teacher' && !data.subject) {
//     return false;
//   }
//   return true
// }, {
//   message: 'Teacher must have a subject',
//   path: ['subject']
// })
