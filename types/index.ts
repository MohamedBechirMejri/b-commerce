import { Product as P } from "./zod";

type Product = P & {
  categories: string[];
};

export type { Product };
