import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const tags = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, tagCollectionId, categoryId } = req.body;
  const data = { name, tagCollectionId, categoryId };

  if (req.method === "GET") {
    const tags = await prisma.tag.findMany();
    return res.status(200).json(tags);
  }

  if (req.method === "POST") {
    const tag = await prisma.tag.create({ data });
    return res.status(201).json(tag);
  }

  if (req.method === "PUT") {
    const tag = await prisma.tag.update({ where: { id }, data });
    return res.status(200).json(tag);
  }

  if (req.method === "DELETE") {
    const tag = await prisma.tag.delete({ where: { id } });
    return res.status(200).json({ message: `Tag ${tag.name} deleted.` });
  }
};

export default tags;
