"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { IoStatsChart } from "react-icons/io5";
import {
  TbSettings2,
  TbShoppingBag,
  TbTruckDelivery,
  TbUser,
} from "react-icons/tb";

const isActive = (route: string) => {
  const pathname = usePathname();
  return route === pathname ? "text-white" : "text-gray-400";
};

export default function Nav() {
  return (
    <nav className="py-8 text-gray-400">
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

        <div className="flex flex-col rounded-br-3xl rounded-tr-3xl border-b border-t border-[#222] py-6">
          <Link
            href={"/admin"}
            className={
              "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
              isActive("/admin")
            }
          >
            <IoStatsChart /> Overview
          </Link>
          <Link
            href={"/admin/products"}
            className={
              "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
              isActive("/admin/products")
            }
          >
            <TbShoppingBag /> Products
          </Link>
          <Link
            href={"/admin/orders"}
            className={
              "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
              isActive("/admin/orders")
            }
          >
            <TbTruckDelivery /> Orders
          </Link>
          <Link
            href={"/admin/customers"}
            className={
              "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
              isActive("/admin/customers")
            }
          >
            <TbUser /> Customers
          </Link>
          <Link
            href={"/admin/settings"}
            className={
              "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
              isActive("/admin/settings")
            }
          >
            <TbSettings2 /> Settings
          </Link>
        </div>

        <div
          className="flex flex-col rounded-tr-3xl border-t border-[#222]
            py-4"
        >
          <a
            href="https://bcommerce.com"
            target="_blank"
            rel="noreferrer"
            className="py-3 text-sm transition-all hover:text-white hover:underline"
          >
            b-commerce v0.0.0
          </a>
        </div>
      </div>
    </nav>
  );
}
