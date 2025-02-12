import { z } from "zod";

import { urlMatch } from "../utils/constants";

export const UserSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must contain at least 1 character" }),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(4, { message: "Password must contain at least 4 characters" }),
  image: z.string().optional(),
  blurImage: z.string().optional(),
  location: z.string(),
  portfolio: z.string().refine((value) => {
    if (!value) return true;
    return urlMatch.test(value);
  }),
  goals: z.array(
    z.object({
      id: z.number().optional(),
      name: z
        .string()
        .min(1, { message: "Goal must contain at least 1 character" }),
      isComplete: z.boolean(),
    })
  ),
  socialMedia: z.array(
    z.object({
      id: z.number().optional(),
      username: z
        .string()
        .refine(
          (value) => {
            if (!value) return true;
            return value.length > 1;
          },
          {
            message: "Username must contain at least 2 characters",
          }
        )
        .optional(),
      link: z
        .string()
        .refine((value) => {
          if (!value) return true;
          return urlMatch.test(value);
        })
        .optional(),
      type: z.string().optional(),
    })
  ),
  knowledgeLevel: z.string().min(1).array(),
  techStack: z.string().array(),
  availability: z.boolean(),
  startDate: z.date(),
  endDate: z.date(),
});
export type IUserSchema = z.infer<typeof UserSchema>;
// -------------------------------

export const UserLoginSchema = UserSchema.pick({ email: true, password: true });
export type IUserLoginSchema = z.infer<typeof UserLoginSchema>;
// -------------------------------

export const UserSignUpSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});
export type IUserSignUpSchema = z.infer<typeof UserSignUpSchema>;
// -------------------------------

export const OnboardingSchema = UserSchema.omit({
  email: true,
  password: true,
  socialMedia: true,
});
export type IOnboardingSchema = z.infer<typeof OnboardingSchema>;
// -------------------------------

export const ProfileSchema = UserSchema.omit({
  password: true,
  socialMedia: true,
});
export type IProfileSchema = z.infer<typeof ProfileSchema>;
// -------------------------------s

export const SocialMediaSchema = UserSchema.pick({
  socialMedia: true,
}).refine(
  (data) => {
    return data.socialMedia.every((item) => {
      const hasLink = item.link && item.link?.length > 0;
      const hasUserName = item.username && item.username?.length > 0;
      if (hasLink && hasUserName) return true;
      if (!hasLink && !hasUserName) return true;
      return false;
    });
  },
  {
    message: "Both fields to be empty or both fields to contain values",
    path: ["socialFields"],
  }
);
export type ISocialMediaSchema = z.infer<typeof SocialMediaSchema>;
// -------------------------------
