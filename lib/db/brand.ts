import prisma from "./prisma";

export const getAllBrands = async () => await prisma.brand.findMany();

export const createBrand = async (name: string) =>
  await prisma.brand.create({ data: { name } });
