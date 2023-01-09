import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const manufacturers = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const manufacturers = await prisma.manufacturer.findMany();
    return res.status(200).json(manufacturers);
  }

  if (req.method === "POST") {
    const { name, description } = req.body;

    const manufacturer = await prisma.manufacturer.create({
      data: { name, description },
    });
    return res.status(201).json(manufacturer);
  }
};

export default manufacturers;
