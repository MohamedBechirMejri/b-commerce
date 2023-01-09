import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const tags = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const tags = await prisma.tag.findMany();
    return res.status(200).json(tags);
  }

  if (req.method === "POST") {
    const { name, tagCollectionId } = req.body;

    const tag = await prisma.tag.create({
      data: { name, TagCollection: { connect: { id: tagCollectionId } } },
    });
    return res.status(201).json(tag);
  }
};

export default tags;
