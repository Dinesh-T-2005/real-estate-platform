import prisma from "../lib/prisma";

export async function searchProperties(query: any) {
  const {
    keyword,
    city,
    propertyType,
    bedrooms,
    minPrice,
    maxPrice,
  } = query;

  return await prisma.property.findMany({
    where: {
      AND: [
        keyword
          ? {
              OR: [
                {
                  title: {
                    contains: keyword,
                    mode: "insensitive",
                  },
                },
                {
                  description: {
                    contains: keyword,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : {},

        city
          ? {
              city: {
                equals: city,
                mode: "insensitive",
              },
            }
          : {},

        propertyType
          ? {
              propertyType: {
                equals: propertyType,
                mode: "insensitive",
              },
            }
          : {},

        bedrooms
          ? {
              bedrooms: Number(bedrooms),
            }
          : {},

        minPrice
          ? {
              price: {
                gte: Number(minPrice),
              },
            }
          : {},

        maxPrice
          ? {
              price: {
                lte: Number(maxPrice),
              },
            }
          : {},
      ],
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}