import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import ProductLink from "./ProductLink";
import { getAllProducts } from "~/lib/db/product";

export default async function () {
  const products = await getAllProducts();

  return (
    <>
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/admin/products/new"
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
        >
          <IoAddCircleOutline />
          <span>New Product</span>
        </Link>
      </div>
      <div className="px-8 py-6">
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {products.map(product => (
              <ProductLink key={"product" + product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
