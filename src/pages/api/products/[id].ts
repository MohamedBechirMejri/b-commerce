import { type NextApiRequest, type NextApiResponse } from "next";
import generatePrismaConnects from "../../../lib/generatePrismaConnects";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { id } = req.query;

  if (!id) return res.status(400).json({ message: "Missing id." });
  if (typeof id !== "string") id = id[0];

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return res.status(200).json(product);
  }

  if (req.method === "PUT") {
    const {
      name,
      price,
      stock,
      discount_price,
      availability,
      description,
      technical_sheet,
      images,
      videos,
      model_3d,
      related_products,
      categories,
      tags,
      sellerId,
      manufacturerId,
    } = req.body;

    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        stock,
        discount_price,
        availability,
        description,
        technical_sheet,
        images,
        videos,
        model_3d,
        related_products: generatePrismaConnects(related_products),
        categories: generatePrismaConnects(categories),
        tags: generatePrismaConnects(tags),
        Seller: { connect: { id: sellerId } },
        Manufacturer: { connect: { id: manufacturerId } },
      },
    });
    return res.status(200).json(product);
  }

  if (req.method === "DELETE") {
    const product = await prisma.product.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `product ${product.name} deleted.` });
  }
}
