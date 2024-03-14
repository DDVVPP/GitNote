import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(4, { message: 'Password must contain at least 4 characters' }),
  image: z.string(),
  location: z.string(),
});
export type IUserSchema = z.infer<typeof UserSchema>;

export const UserLoginSchema = UserSchema.pick({ email: true, password: true });
export type IUserLoginSchema = z.infer<typeof UserLoginSchema>;

export const UserSignUpSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});
export type IUserSignUpSchema = z.infer<typeof UserSignUpSchema>;
