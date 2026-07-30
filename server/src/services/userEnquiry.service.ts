import prisma from "../lib/prisma";

export async function getUserEnquiries(userId: string) {
  return prisma.enquiry.findMany({
    where: {
      userId,
    },
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}