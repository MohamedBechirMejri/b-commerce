import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import Nav from "../Nav";

export default function () {
  return (
    <div className="min-h-full">
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          href="/admin/products"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <IoArrowBackOutline />
          <span>Back</span>
        </Link>
        <h1 className="text-2xl font-bold">New Product</h1>
      </div>
      <Nav />
      <div className="px-8 py-6"></div>
    </div>
  );
}
