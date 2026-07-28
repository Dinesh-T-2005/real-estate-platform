import prisma from "../lib/prisma";

export const createUser = async (userData: any) => {
  return prisma.user.create({
    data: userData,
  });
};