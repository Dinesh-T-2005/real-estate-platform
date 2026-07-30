import prisma from "../lib/prisma";

export async function addPropertyImages(
  propertyId: string,
  images: string[]
) {
  return prisma.propertyImage.createMany({
    data: images.map((image) => ({
      image,
      propertyId,
    })),
  });
}

export async function getPropertyImages(
  propertyId: string
) {
  return prisma.propertyImage.findMany({
    where: {
      propertyId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function deletePropertyImage(
  id: string
) {
  return prisma.propertyImage.delete({
    where: {
      id,
    },
  });
}