import { ServiceError } from "@getcronit/pylon";
import { z } from "zod";

// Common validation function
export const validateData = (schema: z.ZodSchema, data: unknown) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ServiceError("Invalid data", {
      code: "INVALID_DATA",
      statusCode: 422,
      details: {
        errors: result.error.flatten().fieldErrors,
      },
    });
  }
};
