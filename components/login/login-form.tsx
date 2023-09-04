"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { login } from "@/lib/service/auth/auth-service";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const route = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await login(values.user, values.password);
      toast.success("Sucessfully login");
      route.push("/dashboard");
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message[0];
      if (errorMessage.length > 2) {
        toast.error(errorMessage);
      } else if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("An error just happened.");
      }
    } finally {
      route.refresh();
    }
  };

  useEffect(() => {
    if (form.formState.isSubmitting) {
      if (form.formState.errors.password?.message) {
        toast.error(form.formState.errors.password.message);
      } else if (form.formState.errors.user?.message) {
        toast.error(form.formState.errors.user.message);
      }
    }
  }, [form.formState.errors, form.formState.isSubmitting]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 px-3 grid grid-cols-12 gap-2"
      >
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormControl className="m-0 p-0">
                <Input
                  className={cn(
                    "border pl-2 outline-none focus-visible:ring-slate-100 focus-visible:border-0 focus-within:shadow-md",
                    form.formState.errors.user
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  )}
                  disabled={form.formState.isSubmitting}
                  placeholder="Username or E-mail"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormControl className="m-0 p-0">
                <Input
                  type="password"
                  className={cn(
                    "border pl-2 outline-none focus-visible:ring-slate-100 focus-visible:border-0 focus-within:shadow-md",
                    form.formState.errors.password
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  )}
                  disabled={form.formState.isSubmitting}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          className="col-span-12 w-full mt-4"
          disabled={form.formState.isSubmitting}
          variant="glow"
        >
          Sign-in
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
