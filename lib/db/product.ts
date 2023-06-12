import type { Product } from "@prisma/client";

import prisma from "./prisma";

export const getAllProducts = async () => await prisma.product.findMany();

export const getProductById = async (id: string) =>
  await prisma.product.findUnique({ where: { id } });

export const createProduct = async (body: any) => {
  const {
    name,
    description,
    reference,
    categories,
    isPublished,
    images,
    tags,
    price,
    stock,
    brandId,
    // authorId,
  } = body;

  return await prisma.product.create({
    data: {
      name,
      description,
      reference,
      isPublished,
      images: { create: images.map((image: string) => ({ url: image })) },
      tags,
      price,
      stock,
      brandId,
      // author: { connect: { id: authorId } },
      categories: { connect: categories.map((id: string) => ({ id })) },
    },
  });
};

export const updateProduct = async (id: string, data: Product) =>
  await prisma.product.update({ where: { id }, data });

export const deleteProduct = async (id: string) =>
  await prisma.product.delete({ where: { id } });
