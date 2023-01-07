import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

// TODO: Add Validation and Error Handling and Sanitization and Authorization...

const manufacturers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, description } = req.body;
  const data = { name, description };

  if (req.method === "GET") {
    const manufacturers = await prisma.manufacturer.findMany();
    return res.status(200).json(manufacturers);
  }

  if (req.method === "POST") {
    const manufacturer = await prisma.manufacturer.create({ data });
    return res.status(201).json(manufacturer);
  }

  if (req.method === "PUT") {
    const manufacturer = await prisma.manufacturer.update({
      where: { id },
      data,
    });
    return res.status(200).json(manufacturer);
  }

  if (req.method === "DELETE") {
    const manufacturer = await prisma.manufacturer.delete({ where: { id } });
    return res
      .status(200)
      .json({ message: `Manufacturer ${manufacturer.name} deleted.` });
  }
};

export default manufacturers;
