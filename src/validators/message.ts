import { createDecorator } from "@getcronit/pylon";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { validateData } from ".";

const createMessageSchema = z.object({
  content: z
    .string()
    .min(3, "Content too short, must be at least 3 characters"),
});

export const validateCreateMessage = createDecorator(
  async (data: Prisma.MessageCreateWithoutCreatorInput) => {
    validateData(createMessageSchema, data);
  }
);
