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

    const product = await prisma.product.create({
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
    return res.status(201).json(product);
  }
};

export default products;
