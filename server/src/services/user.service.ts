import prisma from "../lib/prisma";

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
    },
  });
}

export async function updateUserProfile(
  userId: string,
  data: {
    fullName: string;
    phone?: string;
  }
) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      fullName: data.fullName,
      phone: data.phone,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
    },
  });
}

export async function getUsers() {
  return prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });
}

export async function updateUserStatus(
  id: string,
  isActive: boolean
) {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      isActive,
    },
  });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: {
      id,
    },
  });
}