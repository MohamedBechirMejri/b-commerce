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
    const tagCollection = await prisma.tagCollection.findUnique({
      where: { id },
    });
    return res.status(200).json(tagCollection);
  }

  if (req.method === "PUT") {
    const { name, tags, category } = req.body;

    const tagCollection = await prisma.tagCollection.update({
      where: { id },
      data: {
        name,
        tags: generatePrismaConnects(tags),
        Category: { connect: { id: category } },
      },
    });
    return res.status(200).json(tagCollection);
  }

  if (req.method === "DELETE") {
    const tagCollection = await prisma.tagCollection.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `tagCollection ${tagCollection.name} deleted.` });
  }
}
