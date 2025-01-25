import { Prisma } from "@prisma/client";
import { protectedRoute } from "~/decorators/auth";
import { getUserId } from "~/lib/auth";
import { getPaginationMeta } from "~/lib/pagination";
import { prisma } from "~/lib/prisma";

export class MessagesService {
  @protectedRoute
  static async findAllMyMessages(page = 1, perPage = 10) {
    const where: Prisma.MessageWhereInput = {
      creator: { id: getUserId() },
    };

    const [result, count] = await prisma.$transaction([
      prisma.message.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        where,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.message.count({ where }),
    ]);
    const meta = getPaginationMeta(page, perPage, count);

    return { meta, data: result };
  }

  static async findAllGlobal(page = 1, perPage = 10) {
    const [result, count] = await prisma.$transaction([
      prisma.message.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          creator: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
        omit: {
          userId: true,
        },
      }),
      prisma.message.count(),
    ]);
    const meta = getPaginationMeta(page, perPage, count);

    return { meta, data: result };
  }

  @protectedRoute
  static async findOneMyMessage(id: number) {
    const where: Prisma.MessageWhereUniqueInput = {
      id,
      creator: { id: getUserId() },
    };
    return await prisma.message.findUnique({ where });
  }

  static async findOneGlobal(id: number) {
    return await prisma.message.findUnique({
      where: { id },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            username: true,
          },
        },
      },
      omit: {
        userId: true,
      },
    });
  }

  @protectedRoute
  static async create(data: Prisma.MessageCreateWithoutCreatorInput) {
    return await prisma.message.create({
      data: {
        ...data,
        creator: { connect: { id: getUserId() } },
      },
    });
  }

  @protectedRoute
  static async update(id: number, data: Prisma.MessageUpdateInput) {
    return await prisma.message.update({
      where: { id },
      data: { ...data, creator: { connect: { id: getUserId() } } },
    });
  }

  @protectedRoute
  static async delete(ids: number[]) {
    return await prisma.message.deleteMany({
      where: { id: { in: ids }, creator: { id: getUserId() } },
    });
  }
}
