import { z } from 'zod';

export type IUserSchema = z.infer<typeof UserSchema>;
// export type IUserSchemaPartial = Partial<typeof UserSchema>
// export const UserSchema = z.object({
//   name: z.string().min(1),
//   email: z.string().email(),
//   password: z.string().min(4),
//   image: z.string(),
//   location: z.string(),
// });

export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});
