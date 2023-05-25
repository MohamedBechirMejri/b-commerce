import prisma from "./prisma";

export const getAllProducts = async () => await prisma.product.findMany();
