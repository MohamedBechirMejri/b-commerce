import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const manufacturers = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const manufacturers = await prisma.manufacturer.findMany();
    return res.status(200).json(manufacturers);
  }

  if (req.method === "POST") {
    const { body } = req;

    // TODO: Add Validation and Error Handling and Sanitization and Authorization...

    const data = {
      name: body.name,
      description: body.description,
    };

    const manufacturer = await prisma.manufacturer.create({
      data,
    });

    return res.status(201).json(manufacturer);
  }
};

export default manufacturers;
