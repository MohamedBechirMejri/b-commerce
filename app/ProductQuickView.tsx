import type { Product } from "~/types";

export default function ProductQuickView({
  product,
  setQuickView,
}: {
  product: Product;
  setQuickView: (product: Product | null) => void;
}) {
  return <div></div>;
}
