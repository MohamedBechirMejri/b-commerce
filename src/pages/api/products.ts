import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const products = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;

  const data = {
    name: body.name,
    price: body.price,
    stock: body.stock,
    discount_price: body.discount_price,
    availability: body.availability,
    related_products: body.related_products,
    categories: body.categories,
    tags: body.tags,
    description: body.description,
    technical_sheet: body.technical_sheet,
    images: body.images,
    videos: body.videos,
    model_3d: body.model_3d,
    sellerId: body.sellerId,
    manufacturerId: body.manufacturerId,
  };

  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const product = await prisma.product.create({ data });
    return res.status(201).json(product);
  }

  if (req.method === "PUT") {
    const product = await prisma.product.update({
      where: { id: body.id },
      data,
    });
    return res.status(201).json(product);
  }

  if (req.method === "DELETE") {
    const product = await prisma.product.delete({ where: { id: body.id } });
    return res
      .status(200)
      .json({ message: `Product ${product.name} deleted.` });
  }
};

export default products;
