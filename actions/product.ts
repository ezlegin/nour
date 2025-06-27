"use server";

import { ProductFormType } from "@/lib/validationSchema";
import { prisma } from "@/prisma/client";
import { deleteCloudFile, uploadCloudFile } from "./cloudinary";
import { UploadApiResponse } from "cloudinary";

export const createProduct = async (data: ProductFormType) => {
  const {
    categories,
    descriptionEN,
    descriptionFA,
    qualifications,
    status,
    titleEN,
    titleFA,
    url,
    image,
  } = data;

  try {
    const cleanedUrl = url.trim().replace(/\s+/g, "-").toLowerCase();

    const existingProduct = await prisma.product.findUnique({
      where: { url: cleanedUrl },
    });

    if (existingProduct) {
      return { error: "A product with this URL already exists." };
    }

    const newProduct = await prisma.product.create({
      data: {
        description_en: descriptionEN,
        description_fa: descriptionFA,
        status: status === "1" ? "PUBLISHED" : "DRAFT",
        title_en: titleEN,
        title_fa: titleFA,
        url: cleanedUrl,
        categories: {
          create: categories.map((categoryIdStr) => ({
            category: {
              connect: { id: parseInt(categoryIdStr) },
            },
          })),
        },
        qualifications: {
          create: qualifications.map((q) => ({
            metric_en: q.metricEN,
            metric_fa: q.metricFA,
            value_en: q.valueEN,
            value_fa: q.valueFA,
          })),
        },
      },
    });

    if (image && image instanceof File) {
      const buffer = Buffer.from(await image.arrayBuffer());

      const { secure_url, public_id, format, bytes } = (await uploadCloudFile(
        buffer,
        {
          folder: "post",
          resource_type: "image",
          width: 800,
        }
      )) as UploadApiResponse;

      // CREATE IMAGE
      await prisma.image.create({
        data: {
          url: secure_url,
          public_id,
          format,
          size: bytes,
          product: {
            connect: {
              id: newProduct.id,
            },
          },
        },
      });
    }

    return {
      success: "Product Created Successfully.",
      productId: newProduct.id,
    };
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const updateProduct = async (
  data: ProductFormType,
  productId: number
) => {
  const {
    categories,
    descriptionEN,
    descriptionFA,
    qualifications,
    status,
    titleEN,
    titleFA,
    url,
    image,
  } = data;

  const cleanedUrl = url.trim().replace(/\s+/g, "-").toLowerCase();

  try {
    // ✅ Check if another product already has the same URL
    const existingProduct = await prisma.product.findUnique({
      where: { url: cleanedUrl },
    });

    if (existingProduct && existingProduct.id !== productId) {
      return { error: "Another product with this URL already exists." };
    }

    // ✅ Update the product
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        description_en: descriptionEN,
        description_fa: descriptionFA,
        status: status === "1" ? "PUBLISHED" : "DRAFT",
        title_en: titleEN,
        title_fa: titleFA,
        url: cleanedUrl,

        // Replace existing categories
        categories: {
          deleteMany: {},
          create: categories.map((categoryIdStr) => ({
            category: {
              connect: { id: parseInt(categoryIdStr) },
            },
          })),
        },

        // Replace qualifications
        qualifications: {
          deleteMany: {},
          create: qualifications.map((q) => ({
            metric_en: q.metricEN,
            metric_fa: q.metricFA,
            value_en: q.valueEN,
            value_fa: q.valueFA,
          })),
        },
      },

      include: { image: true },
    });

    if (image && image instanceof File) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const { secure_url, public_id, format, bytes } = (await uploadCloudFile(
        buffer,
        {
          folder: "post",
          resource_type: "image",
          width: 800,
        }
      )) as UploadApiResponse;

      if (updatedProduct.image) {
        await deleteCloudFile(updatedProduct.image.public_id);
      }

      await prisma.image.upsert({
        where: { productId: updatedProduct.id },
        update: {
          url: secure_url,
          public_id,
          format,
          size: bytes,
        },
        create: {
          url: secure_url,
          public_id,
          format,
          size: bytes,
          product: {
            connect: { id: updatedProduct.id },
          },
        },
      });
    }

    return {
      success: "Product updated successfully.",
      productId: updatedProduct.id,
    };
  } catch (error) {
    console.error("Update Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });

    return {
      success: "Product Deleted Successfully.",
    };
  } catch (error) {
    console.error("Create Product Error:", error);
    return { error: "Something went wrong. Please try again." };
  }
};
