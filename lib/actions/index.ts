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

  try {
    const session = await auth.auth(); // Ensure this is resolving properly
    console.log("session in getUserSession", session);

    if (!session || !session.user?.email) {
      console.log("no session or email found", session);
      throw new Error("Unauthorized");
    }

    console.log("User email:", session.user.email);
    return session.user.email; // This should be the email we need
  } catch (error: any) {
    console.error("Error in getUserSession:", error.message, error.stack);
    throw error; // Rethrow error to handle upstream
  }
}
