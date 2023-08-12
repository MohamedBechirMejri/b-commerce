"use client";

import useStore from "~/lib/hooks/useStore";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  TbHeart,
  TbMenu,
  TbSearch,
  TbShoppingCart,
  TbUser,
} from "react-icons/tb";

import MobileMenu from "./MobileMenu";
import Counter from "./Counter";
import SearchBar from "./SearchBar";
import CartOverlay from "./CartOverlay";
import { UserButton } from "@clerk/nextjs";

const links = [
  { name: "Home", href: "/", sublinks: null },
  { name: "About Us", href: "/about", sublinks: null },
  { name: "Shop", href: "/products", sublinks: null },
  { name: "Products", href: "/products", sublinks: null },
  { name: "Contact Us", href: "/contact", sublinks: null },
];

export default function Header() {
  const pathname = usePathname();
  const { menuStatus, setMenuStatus, cart, wishlist } = useStore();

  useEffect(() => {
    document.body.style.overflow = menuStatus !== "closed" ? "hidden" : "auto";
  }, [menuStatus]);

  return /admin|sign-(up|in)/.test(pathname) ? null : (
    <header
      className="w-full md:h -[4.75rem] backdrop-blur-lg border-b sticky top-0 left-0 z-50"
      style={{
        backgroundColor: pathname === "/" ? "#f0f2eecc" : "#ffffffcc",
      }}
    >
      <div className="sm:h-[5rem] h-16 w-full sm:grid sm:grid-cols-[auto,1fr,1fr] px-4 max-w-[101rem] m-auto items-center text-[#525258] flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="sm:h-14 h-8 sm:mr-8 xl:mr-[6rem]"
            priority
          />
        </Link>

        <nav className="w-full tracking-wide text-sm font-semibold hidden sm:block">
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
        <div className="w-full justify-end text-2xl gap-4 pr-8 hidden sm:flex">
          <SearchBar className="xl:mr-8 xl:block hidden" />

          <button className="xl:hidden" children={<TbSearch />} />

          <button className="relative">
            <TbHeart />
            <Counter value={wishlist.length} />
          </button>

          <button className="relative" onClick={() => setMenuStatus("cart")}>
            <TbShoppingCart />
            <Counter value={cart.length} />
          </button>

          <div className="grid place-items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>

        <button
          className="sm:hidden text-2xl hover:text-[#f50963] transition-all duration-300"
          onClick={() => setMenuStatus("nav")}
          children={<TbMenu />}
        />

        <AnimatePresence>
          {menuStatus !== "closed" && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-[100svh] w-full fixed top-0 left-0 bg-black bg-opacity-70"
              onClick={() => setMenuStatus("closed")}
            />
          )}

          {menuStatus === "nav" && (
            <MobileMenu key="mobile-menu" links={links} />
          )}

          {menuStatus === "cart" && <CartOverlay key="cart-overlay" />}
        </AnimatePresence>
      </div>
    </header>
  );
}
