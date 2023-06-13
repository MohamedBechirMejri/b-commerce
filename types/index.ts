import { Product as P } from "./zod";

type Product = P & {
  categories: string[];
  images: string[];
};

export type { Product };
