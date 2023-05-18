import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="">
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">Customers</h1>
      </div>
      <div className="px-8 py-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600 text-left text-sm font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Total Spent</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Last Activity</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr className="border-b border-gray-600 text-sm text-gray-500">
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">$100</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">1 day ago</td>
              <td className="px-4 py-3">
                <Link
                  href="/admin/customers/1"
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
