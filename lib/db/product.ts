import prisma from "./prisma";

export const getAllProducts = async () => await prisma.product.findMany();

export const getProductById = async (id: string) =>
  await prisma.product.findUnique({ where: { id } });

export const createProduct = async (data: any) =>
  await prisma.product.create({ data });

export const updateProduct = async (id: string, data: any) =>
  await prisma.product.update({ where: { id }, data });

export const deleteProduct = async (id: string) =>
  await prisma.product.delete({ where: { id } });
