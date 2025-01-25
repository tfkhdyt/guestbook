import { createDecorator, ServiceError } from "@getcronit/pylon";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { validateData } from ".";

const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name too short, must be at least 3 characters")
    .nullable(),
  username: z
    .string()
    .min(3, "Username too short, must be at least 3 characters"),
  password: z
    .string()
    .min(8, "Password too short, must be at least 8 characters"),
});
const loginSchema = registerSchema.omit({ name: true });

// Decorators using the common validation function
export const validateRegister = createDecorator(
  async (data: Prisma.UserCreateWithoutMessageInput) => {
    validateData(registerSchema, data);
  }
);

export const validateLogin = createDecorator(
  async (username: string, password: string) => {
    validateData(loginSchema, { username, password });
  }
);
