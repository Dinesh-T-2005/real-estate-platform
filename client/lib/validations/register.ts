import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(10),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;