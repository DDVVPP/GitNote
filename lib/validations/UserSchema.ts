import { z } from 'zod';

export type IUserSchema = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name must contain at least 1 character' }),
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(4, { message: 'Password must contain at least 4 characters' }),
  image: z.string().optional(),
  location: z.string(),
  onboardingStatus: z.number(),
  portfolio: z.string().optional(),
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

export type IUserBasicInfoSchema = z.infer<typeof UserBasicInfoSchema>;
export const UserBasicInfoSchema = UserSchema.pick({
  name: true,
  image: true,
  onboardingStatus: true,
  portfolio: true,
});
//-------------------------------
