import { type NextApiRequest, type NextApiResponse } from "next";
import generatePrismaConnects from "../../../lib/generatePrismaConnects";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const products = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
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
      related_products: generatePrismaConnects(related_products),
      categories: generatePrismaConnects(categories),
      tags: generatePrismaConnects(tags),
      description,
      technical_sheet,
      images,
      videos,
      model_3d,
      sellerId,
      manufacturerId,
    };

    const product = await prisma.product.create({ data });
    return res.status(201).json(product);
  }
};

export default products;
