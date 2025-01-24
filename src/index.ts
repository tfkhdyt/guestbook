import { app } from "@getcronit/pylon";
import { Prisma, PrismaClient } from "@prisma/client";
import { getPaginationMeta } from "./lib/pagination";

const prisma = new PrismaClient();

export const graphql = {
  Query: {
    messages: async (page = 1, perPage = 10) => {
      const [result, count] = await prisma.$transaction([
        prisma.message.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
        }),
        prisma.message.count(),
      ]);
      const meta = getPaginationMeta(page, perPage, count);

      return { meta, data: result };
    },
    message: async (id: number) => {
      return await prisma.message.findUnique({ where: { id } });
    },
  },
  Mutation: {
    messages: {
      create: async (data: Prisma.MessageCreateInput) => {
        return await prisma.message.create({ data });
      },
      update: async (id: number, data: Prisma.MessageUpdateInput) => {
        return await prisma.message.update({ where: { id }, data });
      },
      delete: async (ids: number[]) => {
        return await prisma.message.deleteMany({ where: { id: { in: ids } } });
      },
    },
  },
};

export default app;
