import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import ProductLink from "./ProductLink";
import { getAllProducts } from "~/lib/db/product";
import { Product } from "~/types";

export default async function () {
  const products = await getAllProducts();

  return (
    <div className="grid grid-rows-[auto,1fr] h-full pb-6">
      <div className="flex items-center justify-between px-8 py-6"></div>
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <Link href="/admin/products/new">
            <button className="flex items-center justify-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
              <IoAddCircleOutline />
              <span>New Product</span>
            </button>
          </Link>
        </div>
        <div className="border-zinc-800 border rounded-md h-full overflow-y-scroll">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Reference</th>
                <th className="px-4 py-2">Published</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product) => (
                <ProductLink key={"product" + product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
