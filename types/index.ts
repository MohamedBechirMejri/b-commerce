import { z } from "zod";

import { Product as P, ProductSchema } from "./zod";

type Product = P & { categories: string[]; images: string[] };

export const ZProduct = ProductSchema.extend({
  categories: z.array(z.string()),
  images: z.string(), // stringified array of strings to save to db
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export type { Product };
