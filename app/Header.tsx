"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TbSearch, TbShoppingCart, TbUser } from "react-icons/tb";
import Announcement from "./Announcement";

export default function Header() {
  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="w-full">
      <Announcement />
      <div className="h-[5rem] w-full grid grid-cols-3 p-4 place-items-center max-w-7xl m-auto">
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
            className="w-32 invert"
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
      </div>
    </header>
  );
}
