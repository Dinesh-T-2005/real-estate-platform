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

export const deleteProperty = async (id: string) => {
  return await prisma.property.delete({
    where: {
      id,
    },
  });
};

export const getPropertyById = async (id: string) => {
  return await prisma.property.findUnique({
    where: {
      id,
    },
  });
};

export const updateProperty = async (
  id: string,
  data: any
) => {
  return await prisma.property.update({
    where: {
      id,
    },
    data,
  });
};