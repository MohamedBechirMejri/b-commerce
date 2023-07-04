"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="h-[4rem] w-full bg-rose-500 flex justify-between items-center p-4">
      <div className="flex gap-8">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={50}
          height={50}
          className="w-32"
        />
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
