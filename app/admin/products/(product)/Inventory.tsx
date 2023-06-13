//     { id: "stock", label: "Stock", min: 0 },
//     { id: "restockAlert", label: "Restock alert (-1 means no alert)", min: -1 },
//     { id: "minAmount", label: "Minimum amount", min: 1 },
//     { id: "maxAmount", label: "Maximum amount", min: 1 },
//   ];

import type { Product } from "~/types";

import { Input } from "../../_ui/index";

export default function Inventory({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8">
      <h2 className="-mb-2 font-semibold text-slate-400">Inventory</h2>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        To start selling, all you need is a name, price, and image
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type={"number"}
          label={"Stock"}
          placeholder={"0"}
          value={product.stock}
          onChange={(e: { target: { value: number } }) =>
            setProduct({ ...product, stock: +e.target.value })
          }
          required
          min={0}
        />
        <Input
          type={"number"}
          label={"Restock Alert (-1 means no alert)"}
          placeholder={"-1"}
          value={product.restockAlert}
          onChange={(e: { target: { value: number } }) =>
            setProduct({ ...product, restockAlert: e.target.value })
          }
          required
          min={-1}
        />
      </div>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        You can limit the amount of products that a customer can buy at once
      </p>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex flex-col gap-6">
          <Input
            type={"number"}
            label={"Minimum amount"}
            placeholder={"1"}
            value={product.minBuy}
            onChange={(e: { target: { value: number } }) =>
              setProduct({ ...product, minBuy: +e.target.value })
            }
            required
            min={1}
          />
        </div>
        <div className="grid h-max grid-rows-[repeat(3,auto)] gap-8">
          <Input
            type={"number"}
            label={"Maximum amount"}
            placeholder={"1"}
            value={product.maxBuy}
            onChange={(e: { target: { value: number } }) =>
              setProduct({ ...product, maxBuy: +e.target.value })
            }
            required
            min={1}
          />
        </div>
      </div>
    </div>
  );
}
