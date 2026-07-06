"use client";

import { createAdmin, deleteAdmin, updateAdmin } from "@/actions/admin";
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
import { adminFormSchema, AdminFormType } from "@/lib/validationSchema";
import { Admin } from "@/prisma/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  admin?: Admin;
}

const AdminForm = ({ admin }: Props) => {
  // HOOKS
  const { loading, setLoading } = useLoading();
  const router = useRouter();

  const form = useForm<AdminFormType>({
    resolver: zodResolver(adminFormSchema),
    mode: "onSubmit",
    defaultValues: {
      email: admin?.email ?? "",
      fullName: admin?.name ?? "",
      password: "",
    },
  });

  const onSubmit = async (data: AdminFormType) => {
    setLoading(true);

    const res = admin
      ? await updateAdmin(data, admin?.id!)
      : await createAdmin(data);

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
    const res = await deleteAdmin(admin?.id!);

    if (res.error) {
      toast.error(res.error);
      return;
    }

    if (res.success) {
      toast.success(res.success);
      router.push("/panel/admins");
      router.refresh();
    }
  };

  return (
    <Form {...form}>
      <form
        dir="ltr"
        className="space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
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
          {admin ? "Update" : "Create"}
        </Button>

        {admin && <DeleteButton onDelete={onDelete} />}
      </form>
    </Form>
  );
};

export default AdminForm;
