import Link from "next/link";
import Image from "next/image";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-[100svh] min-w-[100svw] grid-cols-[auto,1fr] grid-rows-1 border-[#222] bg-[#141414] text-white">
      <nav className="py-8">
        <div className="grid h-full w-[22svw] max-w-[14rem] grid-rows-[auto,1fr,auto] border-r border-[#222] pl-8">
          <Link
            href={"/"}
            className="rounded-br-3xl border-b border-[#222] pb-6 pt-2"
          >
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="w-32"
            />
          </Link>

          <div
            className="flex flex-col rounded-br-3xl rounded-tr-3xl border-b border-t border-[#222]
            py-6"
          >
            <Link href={"/admin"} className="py-3">
              Overview
            </Link>
            <Link href={"/admin/products"} className="py-3">
              Products
            </Link>
            <Link href={"/admin/orders"} className="py-3">
              Orders
            </Link>
            <Link href={"/admin/customers"} className="py-3">
              Customers
            </Link>
            <Link href={"/admin/settings"} className="py-3">
              Settings
            </Link>
          </div>

          <div
            className="flex flex-col rounded-tr-3xl border-t border-[#222]
            py-4"
          >
            <Link href={"/admin"} className="py-3">
              Overview
            </Link>
            <Link href={"/admin/products"} className="py-3">
              Products
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
