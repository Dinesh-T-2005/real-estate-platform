import prisma from "../lib/prisma";

export async function saveProperty(
  userId: string,
  propertyId: string
) {
  return prisma.savedProperty.create({
    data: {
      userId,
      propertyId,
    },
  });
}

export async function getSavedProperties(
  userId: string
) {
  return prisma.savedProperty.findMany({
    where: {
      userId,
    },
    include: {
      property: {
        include: {
          images: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function removeSavedProperty(
  userId: string,
  propertyId: string
) {
  return prisma.savedProperty.delete({
    where: {
      userId_propertyId: {
        userId,
        propertyId,
      },
    },
  });
}