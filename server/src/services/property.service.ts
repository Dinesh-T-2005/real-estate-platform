import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProperties = async () => {
  return await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createProperty = async (data: any) => {
  return await prisma.property.create({
    data,
  });
};