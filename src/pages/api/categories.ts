import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const categories = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, description, parentId, children, tag_collections } =
    req.body;

  const data = {
    name,
    description,
    categoryId: parentId,
    children,
    tag_collections,
  };

  if (req.method === "GET") {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  }

  if (req.method === "POST") {
    const category = await prisma.category.create({ data });
    return res.status(201).json(category);
  }

  if (req.method === "PUT") {
    const category = await prisma.category.update({ where: { id }, data });
    return res.status(200).json(category);
  }

  if (req.method === "DELETE") {
    const category = await prisma.category.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `Manufacturer ${category.name} deleted.` });
  }
};

export default categories;
