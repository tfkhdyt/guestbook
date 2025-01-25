import { createDecorator, getContext, ServiceError } from "@getcronit/pylon";

export const protectedRoute = createDecorator(async () => {
  const ctx = getContext();
  const session = ctx.get("session");
  const id = session.get("id");

  if (!id) {
    throw new ServiceError("Not logged in", {
      code: "NOT_LOGGED_IN",
      statusCode: 401,
    });
  }

  ctx.set("userId", id);
});
