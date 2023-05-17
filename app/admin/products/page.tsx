import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import ProductLink from "./ProductLink";

export default function () {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1",
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2",
      price: 200,
      stock: 20,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is product 3",
      price: 300,
      stock: 30,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/admin/products/new"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <IoAddCircleOutline />
          <span>New Product</span>
        </Link>
      </div>
      <div className="px-8 py-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {products.map((product) => (
              <ProductLink key={"product" + product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
