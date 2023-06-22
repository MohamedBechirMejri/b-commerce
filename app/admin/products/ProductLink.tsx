"use client";

import type { Product } from "~/types";

import Link from "next/link";
import Image from "next/image";
import { TbEdit, TbTrash } from "react-icons/tb";

export default function ProductLink({ product }: { product: Product }) {
  return (
    <tr
      key={product.id}
      className="relative border-gray-600 text-sm text-gray-500 hover:text-violet-500 transition-all"
    >
      <td className="px-4 py-2 relative">
        <input type="checkbox" className="relative z-10 cursor-pointer" />
      </td>
      <td className="px-4 py-2">
        <Image
          src={
            product.images
              ? product.images[0]
              : "https://via.placeholder.com/150"
          }
          alt={product.name}
          width={40}
          height={150}
          className="rounded-md"
        />
      </td>
      <td className="px-4 py-2">{product.name}</td>
      <td className="px-4 py-2">{product.stock}</td>
      <td className="px-4 py-2">{product.reference}</td>
      <td className="px-4 py-2">{product.isPublished ? "P" : "Unp"}ublished</td>
      <td className="flex gap-4 px-4 py-2 relative items-center h-[3.25rem]">
        <Link
          href={`/admin/products/${product.id}`}
          className="text-gray-400 hover:text-white relative z-10 text-xl"
        >
          <TbEdit />
        </Link>
        <button className="text-gray-400 hover:text-white relative z-10 text-xl">
          <TbTrash />
        </button>
      </td>
      <td>
        <Link
          href={`/admin/products/${product.id}`}
          className="text-blue-600 hover:text-blue-400 absolute inset-0 hover:bg-white hover:bg-opacity-10 rounded-md transition-all"
        />
      </td>
    </tr>
  );
}
