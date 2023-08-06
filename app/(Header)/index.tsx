"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  TbHeart,
  TbMenu,
  TbSearch,
  TbShoppingCart,
  TbUser,
} from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "~/lib/hooks/useStore";
import MobileMenu from "./MobileMenu";
import Counter from "./Counter";
import SearchBar from "./SearchBar";

const links = [
  { name: "Home", href: "/", sublinks: null },
  { name: "About Us", href: "/about", sublinks: null },
  { name: "Shop", href: "/products", sublinks: null },
  { name: "Products", href: "/products", sublinks: null },
  { name: "Contact Us", href: "/contact", sublinks: null },
];

export default function Header() {
  const pathname = usePathname();

  const { isMenuVisible, setIsMenuVisible, cart } = useStore();

  return pathname.split("/")[1] !== "admin" ? (
    <header className="w-full h-[4.75rem] border-b bg-[#f0f2ee] sticky top-0 left-0 z-50">
      <div className="h-[5rem] w-full sm:grid sm:grid-cols-[auto,1fr,1fr] px-4 max-w-[101rem] m-auto items-center text-[#525258] flex justify-between">
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
          <button children={<TbUser />} />
          <button
            className="relative"
            children={
              <>
                <TbHeart />
                <Counter value={0} />
              </>
            }
          />
          <button
            className="relative"
            children={
              <>
                <TbShoppingCart />
                <Counter value={cart.length} />
              </>
            }
          />
        </div>

        <button
          className="sm:hidden text-2xl hover:text-[#f50963] transition-all duration-300"
          onClick={() => setIsMenuVisible(true)}
          children={<TbMenu />}
        />

        <AnimatePresence>
          {isMenuVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-[100svh] w-full fixed top-0 left-0 bg-black bg-opacity-70"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMenuVisible && (
            <MobileMenu
              cart={cart}
              setIsMenuVisible={setIsMenuVisible}
              links={links}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  ) : (
    <></>
  );
}
