import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="">
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Link
          href="/admin/orders/new"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <IoAddCircleOutline />
          <span>New Order</span>
        </Link>
      </div>
      <div className="px-8 py-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr className="border-b border-gray-600 text-sm text-gray-500">
              <td className="px-4 py-3">Product 1</td>
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">$100</td>
              <td className="px-4 py-3">Pending</td>
              <td className="px-4 py-3">
                <Link
                  href="/admin/orders/1"
                  className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  View
                </Link>
              </td>
            </tr>
            <tr className="border-b border-gray-600 text-sm text-gray-500">
              <td className="px-4 py-3">Product 2</td>
              <td className="px-4 py-3">Jane Doe</td>
              <td className="px-4 py-3">$200</td>
              <td className="px-4 py-3">Paid</td>
              <td className="px-4 py-3">
                <Link
                  href="/admin/orders/2"
                  className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  View
                </Link>
              </td>
            </tr>
            <tr className="border-b border-gray-600 text-sm text-gray-500">
              <td className="px-4 py-3">Product 1</td>
              <td className="px-4 py-3">John Smith</td>
              <td className="px-4 py-3">$300</td>
              <td className="px-4 py-3">Delivered</td>
              <td className="px-4 py-3">
                <Link
                  href="/admin/orders/3"
                  className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
