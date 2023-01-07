import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const tagCollections = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, tags, categoryId } = req.body;
  const data = { name, tags, categoryId };

  if (req.method === "GET") {
    const tagCollections = await prisma.tagCollection.findMany();
    return res.status(200).json(tagCollections);
  }

  if (req.method === "POST") {
    const tagCollection = await prisma.tagCollection.create({ data });
    return res.status(201).json(tagCollection);
  }

  if (req.method === "PUT") {
    const tagCollection = await prisma.tagCollection.update({
      where: { id },
      data,
    });
    return res.status(200).json(tagCollection);
  }

  if (req.method === "DELETE") {
    const tagCollection = await prisma.tagCollection.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `Tag Collection ${tagCollection.name} deleted.` });
  }
};

export default tagCollections;
