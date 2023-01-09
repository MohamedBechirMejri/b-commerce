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
    const category = await prisma.category.findUnique({ where: { id } });
    return res.status(200).json(category);
  }

  if (req.method === "PUT") {
    const { name, description, parentId, children, tag_collections } = req.body;

    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
        description,
        parent: parentId ? { connect: { id: parentId } } : undefined,
        children: generatePrismaConnects(children),
        tag_collections: generatePrismaConnects(tag_collections),
      },
    });
    return res.status(200).json(category);
  }

  if (req.method === "DELETE") {
    const category = await prisma.category.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `Manufacturer ${category.name} deleted.` });
  }
}
