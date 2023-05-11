import Link from "next/link";
import Image from "next/image";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-[100svh] min-w-[100svw] grid-cols-[auto,1fr] grid-rows-1 bg-[#141414] text-white">
      <nav className="flex w-[22svw] flex-col items-center gap-8 border-r border-white p-4 py-4">
        <h1 className="grid grid-cols-3 place-items-center gap-2 p-4 font-bold">
          <Image
            src={"https://picsum.photos/400"}
            alt="Logo"
            width={100}
            height={50}
            className="w-full"
          />
          <p className="col-span-2">B-Commerce</p>
        </h1>

        <hr className="h-[1px] w-4/5" />

        <Link href={"/admin"}>Overview</Link>
        <Link href={"/admin/products"}>Products</Link>
        <Link href={"/admin/orders"}>Orders</Link>
        <Link href={"/admin/customers"}>Customers</Link>
        <Link href={"/admin/settings"}>Settings</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
