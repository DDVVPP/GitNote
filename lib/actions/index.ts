"use server";

import * as auth from "@/auth";
// import getServerSession from "next-auth";

export async function signIn(provider: "github" | "google") {
  return auth.signIn(provider, {
    redirect: true,
    redirectTo: "/",
  });
}

export async function credentialsSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return auth.signIn("credentials", {
    email,
    password,
    redirect: true,
    redirectTo: "/",
  });
}

export async function signOut() {
  return auth.signOut({
    redirect: true,
    redirectTo: "/login",
  });
}

export async function getUserSession() {
  console.log("in getUserSession");
  const session = await auth.auth();
  console.log("session in getUserSession", session);
  if (!session || !session.user?.email) {
    console.log("no session or email");
    throw new Error("Unauthorized");
  }
  return session.user.email;
}
