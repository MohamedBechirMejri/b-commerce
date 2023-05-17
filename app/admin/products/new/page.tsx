import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

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
      <div className="px-8 py-6">
        <form className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-sm font-semibold text-gray-500"
              >
                Description
              </label>
              <textarea
                id="description"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="price"
                className="text-sm font-semibold text-gray-500"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="stock"
                className="text-sm font-semibold text-gray-500"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                className="rounded-md bg-gray-900 px-4 py-2 text-sm text-gray-500"
              />
            </div>

            <div className="flex items-center justify-end gap-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                <span>Save</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
