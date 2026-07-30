import prisma from "../lib/prisma";

export async function createEnquiry(
  userId: string,
  data: any
) {
  return await prisma.enquiry.create({
    data: {
      userId, // ✅ Add this

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

// export async function getAllEnquiries() {
//   return await prisma.enquiry.findMany({
//     include: {
//       property: true,
//       user: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// }

export async function deleteEnquiry(id: string) {
  return prisma.enquiry.delete({
    where: {
      id,
    },
  });
}

export async function updateEnquiryStatus(
  id: string,
  status: string
) {
  return prisma.enquiry.update({
    where: {
      id,
    },
    data: {
      status: status as any,
    },
  });
}

export async function getAllEnquiries(
  page: number,
  limit: number
) {
  const skip = (page - 1) * limit;

  const enquiries = await prisma.enquiry.findMany({
    skip,
    take: limit,
    include: {
      property: true,
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.enquiry.count();

  return {
    enquiries,
    total,
  };
}