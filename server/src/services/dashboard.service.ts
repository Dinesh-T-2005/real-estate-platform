import prisma from "../lib/prisma";

export async function getDashboardStats() {
  const totalProperties = await prisma.property.count();

  const totalUsers = await prisma.user.count({
    where: {
      role: "USER",
    },
  });

  const totalEnquiries = await prisma.enquiry.count();

  const pending = await prisma.enquiry.count({
    where: {
      status: "PENDING",
    },
  });

  const approved = await prisma.enquiry.count({
    where: {
      status: "APPROVED",
    },
  });

  const rejected = await prisma.enquiry.count({
    where: {
      status: "REJECTED",
    },
  });

  return {
    totalProperties,
    totalUsers,
    totalEnquiries,
    pending,
    approved,
    rejected,
  };
}

export async function getMonthlyEnquiries() {
  const data = await prisma.$queryRaw`
    SELECT
      TO_CHAR("createdAt",'Mon') AS month,
      COUNT(*)::int AS count
    FROM "Enquiry"
    GROUP BY TO_CHAR("createdAt",'Mon'),
             EXTRACT(MONTH FROM "createdAt")
    ORDER BY EXTRACT(MONTH FROM "createdAt");
  `;

  return data;
}

export async function toggleUserStatus(
  id: string,
  isActive: boolean
) {
  return prisma.user.update({
    where: { id },
    data: { isActive },
  });
}