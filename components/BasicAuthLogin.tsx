"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { credentialsSignIn } from "@/lib/actions";
import {
  IUserLoginSchema,
  UserLoginSchema,
} from "@/lib/validations/UserSchema";

import { Input, Button } from "@/components/shared/ui";

const BasicAuthLogin = () => {
  const { register, handleSubmit, formState } = useForm<IUserLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<IUserLoginSchema> = async (data) => {
    try {
      UserLoginSchema.parse(data);
      const { email, password } = data;
      await credentialsSignIn({ email, password });
    } catch (error) {
      toast.error("Invalid user");
      return;
    }
  };

  return (
    <>
      <h1 className="display-2-bold mb-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 space-y-5">
        <Input
          label="Email"
          id="email"
          placeholder="Enter your full name"
          {...register("email")}
          errors={formState.errors.email?.message}
        />

        <Input
          label="Password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          type="password"
          errors={formState.errors.password?.message}
        />

        <Button type="submit" color="blue">
          Login
        </Button>
      </form>
      <section className="text-white-300">
        <Link
          href="/sign-up"
          className="paragraph-3-medium flex justify-center  underline underline-offset-2"
        >
          I don't have an account
        </Link>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="dark:bg-black-700 my-8 h-px w-full  border-0" />
          <span className="paragraph-4-regular dark:bg-black-900 absolute left-1/2  -translate-x-1/2  px-3">
            or
          </span>
        </div>
      </section>
    </>
  );
};

export default BasicAuthLogin;
