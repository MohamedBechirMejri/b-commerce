"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TbHeart, TbSearch, TbShoppingCart, TbUser } from "react-icons/tb";

const links = [
  { name: "Home", href: "/", sublinks: null },
  { name: "About Us", href: "/about", sublinks: null },
  { name: "Shop", href: "/products", sublinks: null },
  { name: "Products", href: "/products", sublinks: null },
  { name: "Contact Us", href: "/contact", sublinks: null },
];

export default function Header() {
  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="w-full h-[4.75rem] border-b bg-[#f0f2ee]">
      <div className="h-[5rem] w-full grid grid-cols-[auto,1fr,1fr] px-4 max-w-[101rem] m-auto items-center text-[#525258]">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="h-14 w-[115px] mr-[6rem]"
            priority
          />
        </Link>

        <nav className="w-full tracking-wide text-sm font-semibold">
          <ul className="flex gap-8">
            {links.map(link => {
              return (
                <li key={link.name}>
                  <Link href={link.href} className="w-max inline-block">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* TODO: fix this ugly code */}
        <div className="w-full flex justify-end text-2xl gap-4 pr-8">
          <SearchBar />

          <button className="xl:hidden">
            <TbSearch />
          </button>

          <button>
            <TbUser />
          </button>

          <button className="relative">
            <TbHeart />
            <Counter value={0} />
          </button>

          <button className="relative">
            <TbShoppingCart />
            <Counter value={0} />
          </button>
        </div>
      </div>
    </header>
  );
}

const SearchBar = () => {
  return (
    <div className="h-[3rem] w-full max-w-[320px] border rounded-full overflow-hidden relative shadow-sm xl:mr-8 xl:block hidden">
      <input
        type="search"
        placeholder="Search for products..."
        className="text-sm h-full w-full px-6 pr-11 outline-none"
      />
      <button className="absolute right-4 top-3 text-xl">
        <TbSearch />
      </button>
    </div>
  );
};

const Counter = ({ value }: { value: number }) => {
  return (
    <span className="absolute top-2 -right-1 text-xs bg-pink-600 text-[#f0f2ee] rounded-full w-4 h-4 flex items-center justify-center font-bold ring ring-[#f0f2ee]">
      {value}
    </span>
  );
};
