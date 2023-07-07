"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  TbSearch,
  TbShoppingCart,
  TbSpeakerphone,
  TbUser,
  TbX,
} from "react-icons/tb";

export default function Header() {
  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="w-full">
      <div className="bg-rose-500">
        <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-1 bg-rose-600">
                <TbSpeakerphone
                  className="h-6 w-6 text-white text-xs"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate text-sm">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-2 py-1 border border-transparent shadow-sm text-xs font-medium text-rose-500 bg-white hover:bg-rose-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-1 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <TbX className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[4rem] w-full grid grid-cols-3 p-4 place-items-center max-w-7xl m-auto">
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
