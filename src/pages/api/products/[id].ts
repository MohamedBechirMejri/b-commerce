import { type NextApiRequest, type NextApiResponse } from "next";

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
      related_products,
      categories,
      tags,
      description,
      technical_sheet,
      images,
      videos,
      model_3d,
      sellerId,
      manufacturerId,
    } = req.body;

    const data = {
      name,
      price,
      stock,
      discount_price,
      availability,
      related_products,
      categories,
      tags,
      description,
      technical_sheet,
      images,
      videos,
      model_3d,
      sellerId,
      manufacturerId,
    };

    const product = await prisma.product.update({
      where: { id },
      data,
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
