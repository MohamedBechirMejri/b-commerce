import { z } from "zod";

const Product = z.object({
  name: z.string(),
  reference: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  brand: z.string(),
  tags: z.string(),
  isPublished: z.boolean(),
  price: z.number(),
  onSale: z.boolean(),
  salePrice: z.number().optional(),
  stock: z.number(),
  restockAlert: z.number(),
  minBuy: z.number(),
  maxBuy: z.number(),
  images: z.array(z.string()),
});

export type Product = z.infer<typeof Product>;

export default Product;
