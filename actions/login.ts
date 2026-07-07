"use server";

import { signIn } from "@/auth";

export const authenticator = async (email: string, password: string) => {
  try {
    await signIn("admin-login", {
      email,
      password,
      redirect: false,
    });

    return { success: "Login successful" };
  } catch (error) {
    console.error(error);
    return { error: "Invalid Credentials" };
  }
};
