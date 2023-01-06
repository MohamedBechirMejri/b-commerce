import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const tagCollections = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const tagCollections = await prisma.tagCollection.findMany();
    return res.status(200).json(tagCollections);
  }

  if (req.method === "POST") {
    const { body } = req;

    // TODO: Add Validation and Error Handling and Sanitization and Authorization...

    const data = {
      name: body.name,
      tags: body.tags,
      categoryId: body.categoryId,
    };

    const tagCollection = await prisma.tagCollection.create({
      data,
    });

    return res.status(201).json(tagCollection);
  }
};

export default tagCollections;
