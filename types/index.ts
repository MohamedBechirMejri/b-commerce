import { z } from "zod";

import { Product as P, ProductSchema } from "./zod";

type Product = P & {
  categories: string[];
  images: string[];
};

export const ZProduct = ProductSchema.extend({
  categories: z.array(z.string()),
  images: z.array(z.string()),
});

export type { Product };
