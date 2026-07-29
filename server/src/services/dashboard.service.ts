import prisma from "../lib/prisma";

export async function getDashboardStats() {
  const properties = await prisma.property.count();

  const enquiries = await prisma.enquiry.count();

  const users = await prisma.user.count();

  return {
    properties,
    enquiries,
    users,
  };
}