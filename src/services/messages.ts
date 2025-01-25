import { Prisma } from "@prisma/client";
import { protectedRoute } from "~/decorators/auth";
import { getUserId } from "~/lib/auth";
import { getPaginationMeta } from "~/lib/pagination";
import { prisma } from "~/lib/prisma";

const commonMessageSelect = {
  id: true,
  name: true,
  username: true,
};

export class MessagesService {
  private static async findMessages(
    page: number,
    perPage: number,
    where?: Prisma.MessageWhereInput,
    includeCreator = false
  ) {
    const [result, count] = await prisma.$transaction([
      prisma.message.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        where,
        orderBy: { createdAt: "desc" },
        include: includeCreator
          ? { creator: { select: commonMessageSelect } }
          : undefined,
        omit: includeCreator ? { userId: true } : undefined,
      }),
      prisma.message.count({ where }),
    ]);
    return { meta: getPaginationMeta(page, perPage, count), data: result };
  }

  @protectedRoute
  static findAllMyMessages(page = 1, perPage = 10) {
    return this.findMessages(page, perPage, { creator: { id: getUserId() } });
  }

  static findAllGlobal(page = 1, perPage = 10) {
    return this.findMessages(page, perPage, undefined, true);
  }

  private static findMessage(
    where: Prisma.MessageWhereUniqueInput,
    includeCreator = false
  ) {
    return prisma.message.findUnique({
      where,
      include: includeCreator
        ? { creator: { select: commonMessageSelect } }
        : undefined,
      omit: includeCreator ? { userId: true } : undefined,
    });
  }

  @protectedRoute
  static findOneMyMessage(id: number) {
    return this.findMessage({ id, creator: { id: getUserId() } });
  }

  static findOneGlobal(id: number) {
    return this.findMessage({ id }, true);
  }

  @protectedRoute
  static create(data: Prisma.MessageCreateWithoutCreatorInput) {
    return prisma.message.create({
      data: { ...data, creator: { connect: { id: getUserId() } } },
    });
  }

  @protectedRoute
  static update(id: number, data: Prisma.MessageUpdateInput) {
    return prisma.message.update({
      where: { id },
      data: { ...data, creator: { connect: { id: getUserId() } } },
    });
  }

  @protectedRoute
  static delete(ids: number[]) {
    return prisma.message.deleteMany({
      where: { id: { in: ids }, creator: { id: getUserId() } },
    });
  }
}
