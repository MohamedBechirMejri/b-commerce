import { type NextApiRequest, type NextApiResponse } from "next";

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
    const tag = await prisma.tag.findUnique({ where: { id } });
    return res.status(200).json(tag);
  }

  if (req.method === "PUT") {
    const { name, tagCollectionId } = req.body;

    const tag = await prisma.tag.update({
      where: { id },
      data: { name, TagCollection: { connect: { id: tagCollectionId } } },
    });
    return res.status(200).json(tag);
  }

  if (req.method === "DELETE") {
    const tag = await prisma.tag.delete({ where: { id } });
    return res.status(200).json({ message: `tag ${tag.name} deleted.` });
  }
}
