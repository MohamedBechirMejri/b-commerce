import { type NextApiRequest, type NextApiResponse } from "next";
import generatePrismaConnects from "../../../lib/generatePrismaConnects";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const categories = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  }

  if (req.method === "POST") {
    const { name, description, parentId, children, tag_collections } = req.body;

    const category = await prisma.category.create({
      data: {
        name,
        description,
        parent: parentId ? { connect: { id: parentId } } : undefined,
        children: generatePrismaConnects(children),
        tag_collections: generatePrismaConnects(tag_collections),
      },
    });
    return res.status(201).json(category);
  }
};

export default categories;
