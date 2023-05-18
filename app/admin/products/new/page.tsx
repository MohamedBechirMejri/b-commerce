import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import Product from "../Product";

export default function () {
  return (
    <div className="grid h-full grid-rows-[auto,1fr]">
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          href="/admin/products"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <IoArrowBackOutline />
          <span>Back</span>
        </Link>
        <h1 className="text-2xl font-bold">New Product</h1>
        <button className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-300">
          <span>Add</span>
        </button>
      </div>
      <Product />
    </div>
  );
}
