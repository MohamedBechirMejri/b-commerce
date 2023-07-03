import { z } from "zod";

import { Product as P, ProductSchema } from "./zod";

type Product = P & { categories: string[]; images: string[] };

export const ZProduct = ProductSchema.extend({
  categories: z.array(z.string()),
  images: z.string(), // stringified array of strings to save to db
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),

  name: z.string().min(5).max(72),
  reference: z.string().min(3).max(255),
});

export type { Product };
