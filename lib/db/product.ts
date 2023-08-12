import type { Product } from "@prisma/client";

import prisma from "./prisma";

export const getAllProducts = async () =>
  await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
      stock: true,
      reference: true,
      isPublished: true,
    },
  });

export const getProductById = async (id: string) =>
  await prisma.product.findUnique({
    where: { id },
    include: { categories: { select: { id: true } } },
  });

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
    onSale,
    salePrice,
    stock,
    brandId,
  } = body;

  return await prisma.product.create({
    data: {
      name,
      description,
      reference,
      isPublished,
      images,
      tags,
      price,
      onSale,
      salePrice,
      stock,
      brandId,
      categories: { connect: categories.map((id: string) => ({ id })) },
    },
  });
};

export const updateProduct = async (
  id: string,
  data: Product & { categories: string[] }
) =>
  await prisma.product.update({
    where: { id },
    data: {
      ...data,
      categories: { connect: data.categories.map((id: string) => ({ id })) },
    },
  });

export const deleteProduct = async (id: string) =>
  await prisma.product.delete({ where: { id } });
