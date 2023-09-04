import * as z from "zod";

export const formSchema = z.object({
  user: z.string().min(1, {
    message: "User name is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
