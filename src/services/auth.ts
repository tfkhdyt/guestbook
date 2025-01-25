import { getContext, ServiceError } from "@getcronit/pylon";
import { Prisma } from "@prisma/client";
import { protectedRoute } from "~/decorators/auth";
import { getUserId } from "~/lib/auth";
import { prisma } from "~/lib/prisma";

export class AuthService {
  @protectedRoute
  static async me() {
    const id = getUserId();

    const user = await prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });
    if (!user) {
      throw new ServiceError("User not found", {
        code: "USER_NOT_FOUND",
        statusCode: 404,
        details: {
          id,
        },
      });
    }

    return user;
  }

  static async register(data: Prisma.UserCreateWithoutMessageInput) {
    data.password = await Bun.password.hash(data.password);
    return await prisma.user.create({ data });
  }

  static async login(username: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new ServiceError("User not found", {
        code: "USER_NOT_FOUND",
        statusCode: 404,
        details: {
          username,
        },
      });
    }

    if (!(await Bun.password.verify(password, user.password))) {
      throw new ServiceError("Invalid password", {
        code: "INVALID_PASSWORD",
        statusCode: 401,
      });
    }

    const session = getContext().get("session");
    session.set("id", user.id);

    return user;
  }

  @protectedRoute
  static async logout() {
    const session = getContext().get("session");

    session.deleteSession();
  }
}
