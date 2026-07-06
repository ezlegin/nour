"use server";

import { AdminFormType } from "@/lib/validationSchema";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export const createAdmin = async (data: AdminFormType) => {
  const { email, fullName, password } = data;
  try {
    const existingAdmin = await prisma.admin.findFirst({ where: { email } });
    if (existingAdmin) throw new Error("Email should be Unique.");

    if (!password) throw new Error("Password is required.");
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.admin.create({
      data: {
        email,
        name: fullName,
        password: hashedPassword,
      },
    });

    return { success: "Admin Created Successfully." };
  } catch (error) {
    console.error(error);
    return { error: (error as Error).message };
  }
};

export const updateAdmin = async (data: AdminFormType, id: number) => {
  const { email, fullName, password } = data;
  try {
    const existingAdmin = await prisma.admin.findFirst({ where: { email } });
    if (!existingAdmin) throw new Error("Admin Not Found.");

    const existingAdminByEmail = await prisma.admin.findFirst({
      where: { email, id: { not: id } },
    });
    if (existingAdminByEmail) throw new Error("Email Should Be Unique.");

    await prisma.admin.update({
      where: { id },
      data: {
        email,
        name: fullName,
      },
    });

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.admin.update({
        where: { id },
        data: {
          password: hashedPassword,
        },
      });
    }

    return { success: "Admin Updated Successfully." };
  } catch (error) {
    console.error(error);
    return { error: (error as Error).message };
  }
};

export const deleteAdmin = async (id: number) => {
  try {
    const existingAdmin = await prisma.admin.findFirst({ where: { id } });
    if (!existingAdmin) throw new Error("Admin not found.");

    await prisma.admin.delete({ where: { id } });

    return { success: "Admin Deleted Successfully." };
  } catch (error) {
    console.error(error);
    return { error: (error as Error).message };
  }
};
