"use server";

import { CategoryFormType } from "@/lib/validationSchema";
import { prisma } from "@/prisma/client";

export const createCategory = async (data: CategoryFormType) => {
  const { nameEN, nameFA } = data;

  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        OR: [{ name_en: nameEN.trim() }, { name_fa: nameFA.trim() }],
      },
    });

    if (existingCategory) {
      return { error: "A category with this name already exists." };
    }

    await prisma.category.create({
      data: {
        name_en: nameEN,
        name_fa: nameFA,
      },
    });

    return { success: "Category Created Successfully" };
  } catch (error) {
    console.error("Error creating category:", error);
    return { error: "An error occurred while creating the category." };
  }
};

export const updateCategory = async (data: CategoryFormType, id: number) => {
  const { nameEN, nameFA } = data;

  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });

    if (!existingCategory) {
      return { error: "Category not found." };
    }

    const existingCategoryWithName = await prisma.category.findFirst({
      where: {
        id: {
          not: id,
        },
        OR: [{ name_en: nameEN.trim() }, { name_fa: nameFA.trim() }],
      },
    });

    if (existingCategoryWithName) {
      return { error: "A category with this name already exists." };
    }

    await prisma.category.update({
      where: { id },
      data: {
        name_en: nameEN,
        name_fa: nameFA,
      },
    });

    return { success: "Category Updated Successfully" };
  } catch (error) {
    console.error("Error updating category:", error);
    return { error: "An error occurred while updating the category." };
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });

    if (!existingCategory) {
      return { error: "Category not found." };
    }

    // Check if the category is used in any products
    const productCount = await prisma.product.count({
      where: {
        categories: {
          some: {
            categoryId: id,
          },
        },
      },
    });

    if (productCount > 0) {
      return { error: "Cannot delete category. It is used in products." };
    }

    await prisma.category.delete({
      where: { id },
    });

    return { success: "Category Deleted Successfully" };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { error: "An error occurred while deleting the category." };
  }
};
