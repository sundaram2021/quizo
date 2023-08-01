import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(255),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});