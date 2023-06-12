import prisma from "./prisma";

export const getAllCategories = async () => await prisma.category.findMany();

export const createCategory = async (name: string) =>
  await prisma.category.create({ data: { name } });
