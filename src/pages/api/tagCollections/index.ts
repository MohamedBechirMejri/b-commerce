import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const tagCollections = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const tagCollections = await prisma.tagCollection.findMany();
    return res.status(200).json(tagCollections);
  }

  if (req.method === "POST") {
    const { name, tags, Category } = req.body;

    const tagCollection = await prisma.tagCollection.create({
      data: { name, tags, Category: { connect: { id: Category } } },
    });
    return res.status(201).json(tagCollection);
  }
};

export default tagCollections;
