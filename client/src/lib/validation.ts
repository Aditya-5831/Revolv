import { z } from "zod";

const requiredString = z.string().trim().min(1, "required");

export const signUpSchema = z.object({
  username: requiredString,
  email: requiredString.email("Invalid email address"),
  password: requiredString.min(
    8,
    "Password must be at least 8 characters long",
  ),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type SignInValues = z.infer<typeof signInSchema>;
