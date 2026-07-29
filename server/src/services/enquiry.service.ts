import prisma from "../lib/prisma";

export async function createEnquiry(data: any) {
  return await prisma.enquiry.create({
    data: {
      propertyId: data.propertyId,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      visitDate: data.visitDate
        ? new Date(data.visitDate)
        : null,
      message: data.message,
    },
  });
}

export async function getAllEnquiries() {
  return await prisma.enquiry.findMany({
    include: {
      property: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}