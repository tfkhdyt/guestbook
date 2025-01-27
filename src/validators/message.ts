import { createDecorator, ServiceError } from "@getcronit/pylon";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { validateData } from ".";
import { prisma } from "~/lib/prisma";

const createMessageSchema = z
  .string()
  .min(3, "Content too short, must be at least 3 characters");
const updateMessageSchema = createMessageSchema;

export const validateCreateMessage = createDecorator(
  async (content: string) => {
    validateData(createMessageSchema, content);
  }
);

export const validateUpdateMessage = createDecorator(
  async (id: number, content: string) => {
    const message = await prisma.message.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!message) {
      throw new ServiceError("Message not found", {
        statusCode: 404,
        code: "NOT_FOUND",
        details: {
          messageId: id,
        },
      });
    }

    validateData(updateMessageSchema, content);
  }
);
