import prisma from "../lib/prisma";

export async function getSettings() {
  const settings = await prisma.settings.findFirst();

  return settings;
}

export async function updateSettings(data: any) {
  const existing = await prisma.settings.findFirst();

  if (!existing) {
    return await prisma.settings.create({
      data,
    });
  }

  return await prisma.settings.update({
    where: {
      id: existing.id,
    },
    data,
  });
}