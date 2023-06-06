export type Product = {
  name: string;
  reference: string;
  description: string;
  categories: string[];
  brand: string;
  tags: string;
  isPublished: boolean;
  price: number;
  onSale: boolean;
  salePrice?: number;
  stock: number;
  restockAlert: number;
  minBuy: number;
  maxBuy: number;
};
