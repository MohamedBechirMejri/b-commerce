import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const categories = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  }

  if (req.method === "POST") {
    const { name, description, parentId, children, tag_collections } = req.body;

    const data = {
      name,
      description,
      categoryId: parentId,
      children,
      tag_collections,
    };

    const category = await prisma.category.create({ data });
    return res.status(201).json(category);
  }
};

export default categories;
