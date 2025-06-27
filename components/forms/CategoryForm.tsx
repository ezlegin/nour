"use client";

import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/actions/category";
import DeleteButton from "@/components/DeleteButton";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/hooks/useLoading";
import { categoryFormSchema, CategoryFormType } from "@/lib/validationSchema";
import { Category } from "@/prisma/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  type: "NEW" | "UPDATE";
  category?: Category;
}

const CategoryForm = ({ type, category }: Props) => {
  // HOOKS
  const { loading, setLoading } = useLoading();
  const router = useRouter();

  const isUpdateType = type === "UPDATE";

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categoryFormSchema),
    mode: "onSubmit",
    defaultValues: {
      nameEN: category?.name_en || "",
      nameFA: category?.name_fa || "",
    },
  });

  const onSubmit = async (data: CategoryFormType) => {
    setLoading(true);

    const res = isUpdateType
      ? await updateCategory(data, category?.id!)
      : await createCategory(data);

    if (res.error) {
      toast.error(res.error);
      setLoading(false);
      return;
    }

    if (res.success) {
      toast.success(res.success);
      setLoading(false);
      router.refresh();
    }
  };

  const onDelete = async () => {
    const res = await deleteCategory(category?.id!);

    if (res.error) {
      toast.error(res.error);
      return;
    }

    if (res.success) {
      toast.success(res.success);
      router.push("/panel/categories");
      router.refresh();
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="nameEN"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (EN)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nameFA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (FA)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={!form.formState.isValid || loading}
          className="w-full flex gap-2"
          type="submit"
        >
          <Loader loading={loading} />
          {isUpdateType ? "Update" : "Create"}
        </Button>

        {isUpdateType && <DeleteButton onDelete={onDelete} />}
      </form>
    </Form>
  );
};

export default CategoryForm;
