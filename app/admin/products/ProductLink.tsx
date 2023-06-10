"use client";

import Link from "next/link";
import { IoEye, IoPencil, IoTrash } from "react-icons/io5";

export default function ProductLink({
  product,
}: {
  product: any; // TODO: type this properly
}) {
  const deleteProduct = (id: number) => {
    console.log("Deleting product with id: ", id);
  };

  return (
    <tr
      key={product.id}
      className="border-b border-gray-600 text-sm text-gray-500"
    >
      <td className="px-4 py-3">{product.name}</td>
      <td className="px-4 py-3">{product.description}</td>
      <td className="px-4 py-3">{product.price}</td>
      <td className="px-4 py-3">{product.stock}</td>
      <td className="flex gap-4 px-4 py-3">
        <Link
          href={`/admin/products/${product.id}`}
          className="text-blue-600 hover:text-blue-400"
        >
          <IoEye />
        </Link>
        <Link
          href={`/admin/products/${product.id}/edit`}
          className="text-yellow-600 hover:text-yellow-400"
        >
          <IoPencil />
        </Link>
        <button
          className="text-red-600 hover:text-red-400"
          onClick={() => {
            if (confirm("Are you sure?")) {
              deleteProduct(product.id);
            }
          }}
        >
          <IoTrash />
        </button>
      </td>
    </tr>
  );
}
