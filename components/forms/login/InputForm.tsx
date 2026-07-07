"use client";

import { authenticator } from "@/actions/login";
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
import { LoginFormType, loginFormSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const InputForm = () => {
  // HOOKS
  const { loading, setLoading } = useLoading();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormType) => {
    setLoading(true);

    const res = await authenticator(data.email, data.password);

    if (res?.error) {
      toast.error(res.error);
      setLoading(false);
      return;
    }

    if (res.success) {
      toast.success("Login successful");
      router.refresh();
    }
  };

  return (
    <>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>Welcome,</p>
        <h1 className="text-2xl text-foreground font-semibold">Admin Login</h1>
        <p>Please provide credentials to log in...</p>
      </div>

      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="en-digits" {...field} />
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
                  <Input type="password" className="en-digits" {...field} />
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
            {<Loader loading={loading} />}
            Log In
          </Button>
        </form>
      </Form>
    </>
  );
};

export default InputForm;
