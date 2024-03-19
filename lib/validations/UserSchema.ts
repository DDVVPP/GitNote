import { z } from 'zod';

const urlMatch =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

export type IUserSchema = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name must contain at least 1 character' }),
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(4, { message: 'Password must contain at least 4 characters' }),
  imageURL: z.string(),
  location: z.string(),
  onboardingStatus: z.number(),
  portfolio: z.string().refine((value) => {
    if (!value) return true;
    return urlMatch.test(value);
  }),
  goals: z.array(
    z.object({
      name: z.string(),
      isComplete: z.boolean(),
    })
  ),
  knowledgeLevel: z.string().array(),
  techStack: z.string().array(),
  availability: z.boolean(),
  startDate: z.date(),
  endDate: z.date(),
});
//-------------------------------

export type IUserLoginSchema = z.infer<typeof UserLoginSchema>;
export const UserLoginSchema = UserSchema.pick({ email: true, password: true });
//-------------------------------

export type IUserSignUpSchema = z.infer<typeof UserSignUpSchema>;
export const UserSignUpSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});
//-------------------------------

export type IOnboardingSchema = z.infer<typeof OnboardingSchema>;
export const OnboardingSchema = UserSchema.omit({
  email: true,
  password: true,
});
//-------------------------------
