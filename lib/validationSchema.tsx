import { z } from "zod";
const image = z
  .instanceof(File)
  .optional()
  .refine((file) => !file || file.size <= 4 * 1024 * 1024, {
    message: "Image size must be less than 4MB",
  });
export const status = ["1", "0"] as const;

//! LOGIN FORM
export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8),
});
export type LoginFormType = z.infer<typeof loginFormSchema>;

//! Admin
export const adminFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8).optional(),
});
export type AdminFormType = z.infer<typeof adminFormSchema>;

//! POSTS
export const productFormSchema = z.object({
  titleEN: z.string().min(1),
  titleFA: z.string().min(1),
  url: z.string().min(1).trim(),
  image,
  descriptionEN: z.string().min(1),
  descriptionFA: z.string().min(1),
  categories: z.array(z.string()),
  status: z.enum(status),
  qualifications: z.array(
    z.object({
      metricEN: z.string().min(1),
      metricFA: z.string().min(1),
      valueEN: z.string().min(1),
      valueFA: z.string().min(1),
    }),
  ),
});
export type ProductFormType = z.infer<typeof productFormSchema>;

//! CATEGORIES
export const categoryFormSchema = z.object({
  nameEN: z.string().min(1),
  nameFA: z.string().min(1),
});
export type CategoryFormType = z.infer<typeof categoryFormSchema>;
