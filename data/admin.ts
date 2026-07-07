"use server";

import { prisma } from "@/prisma/client";

export const getAdminById = async (id: string | number) => {
  return await prisma.admin.findFirst({
    where: {
      id: +id,
    },
  });
};
