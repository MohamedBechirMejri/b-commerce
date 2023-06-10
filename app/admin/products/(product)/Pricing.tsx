import type { Product } from "~/types/Product";

import { Input, Toggle } from "../../(ui)/index";

export default function Pricing({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8">
      <h2 className="-mb-2 font-semibold text-slate-400">Pricing</h2>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Give products a price for each of the currencies that you sell in
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type={"number"}
          label={"Price"}
          placeholder={"0.00"}
          value={product.price}
          onChange={(e: { target: { value: number } }) =>
            setProduct({ ...product, price: e.target.value })
          }
          required
          min={0}
        />
        {product.onSale && (
          <Input
            type={"number"}
            label={"Sale Price"}
            placeholder={"0.00"}
            value={product.salePrice}
            onChange={(e: { target: { value: number } }) =>
              setProduct({ ...product, salePrice: e.target.value })
            }
            required
            min={0}
          />
        )}
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex flex-col gap-6">
          <Toggle
            label={"on Sale"}
            isToggled={product.onSale}
            setIsToggled={(onSale: boolean) =>
              setProduct({ ...product, onSale })
            }
          />
        </div>
      </div>
    </div>
  );
}
