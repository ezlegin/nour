"use server";

import { auth } from "@/auth";
import { getAdminById } from "./admin";

export const getSessionAdmin = async () => {
  const session = await auth();

  if (!session?.user?.id) return;

  return await getAdminById(session?.user?.id);
};
