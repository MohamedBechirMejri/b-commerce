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
    const manufacturer = await prisma.manufacturer.findUnique({
      where: { id },
    });
    return res.status(200).json(manufacturer);
  }

  if (req.method === "PUT") {
    const { name, description } = req.body;

    const manufacturer = await prisma.manufacturer.update({
      where: { id },
      data: { name, description },
    });
    return res.status(200).json(manufacturer);
  }

  if (req.method === "DELETE") {
    const manufacturer = await prisma.manufacturer.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `Manufacturer ${manufacturer.name} deleted.` });
  }
}
