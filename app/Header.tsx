"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TbSearch, TbShoppingCart, TbUser } from "react-icons/tb";

export default function Header() {
  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="h-[4rem] w-full bg-[#aea8a1] grid grid-cols-3 p-4 place-items-center text-white">
      <nav className="w-full">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={50}
          height={50}
          className="w-32"
        />
      </Link>

      <div className="w-full flex justify-end text-2xl gap-6">
        <button>
          <TbSearch />
        </button>
        <button>
          <TbShoppingCart />
        </button>
        <button>
          <TbUser />
        </button>
      </div>
    </header>
  );
}
