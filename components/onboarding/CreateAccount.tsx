"use client";

import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { createUser } from "@/lib/actions/user.actions";
import {
  IUserSignUpSchema,
  UserSignUpSchema,
} from "@/lib/validations/UserSchema";

import Input from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import { credentialsSignIn } from "@/lib/actions";

const CreateAccount = () => {
  const { register, handleSubmit, formState } = useForm<IUserSignUpSchema>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(UserSignUpSchema),
  });

  const onSubmit: SubmitHandler<IUserSignUpSchema> = async (data) => {
    UserSignUpSchema.parse(data);
    const { error } = await createUser(data);
    if (error) {
      toast.error(error);
    } else {
      try {
        const { email, password } = data;
        await credentialsSignIn({ email, password });
      } catch (error) {
        toast.error("Invalid user");
      }
    }
  };

  return (
    <>
      <h1 className="display-2-bold pb-5">Create an Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-5 space-y-5">
        <Input
          label="Full Name"
          id="name"
          placeholder="Enter your full name"
          {...register("name")}
          errors={formState.errors.name?.message}
        />

        <Input
          label="Email"
          id="email"
          placeholder="Enter your email"
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
        <Button color="blue" type="submit">
          Create an account
        </Button>
      </form>
    </>
  );
};

export default CreateAccount;
