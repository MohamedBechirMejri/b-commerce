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
  // Define an array of objects with the properties for each link
  const links = [
    { href: "/admin", icon: <IoStatsChart />, text: "Overview" },
    { href: "/admin/products", icon: <TbShoppingBag />, text: "Products" },
    { href: "/admin/orders", icon: <TbTruckDelivery />, text: "Orders" },
    { href: "/admin/customers", icon: <TbUser />, text: "Customers" },
    { href: "/admin/settings", icon: <TbSettings2 />, text: "Settings" },
  ];

  // Use map to iterate over the array and render each link
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
          {links.map(link => (
            <Link
              href={link.href}
              className={
                "flex items-center justify-start gap-3 py-3 transition-all hover:text-white " +
                isActive(link.href)
              }
              key={link.href}
            >
              {link.icon} {link.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col rounded-tr-3xl border-t border-[#222] py-4">
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
