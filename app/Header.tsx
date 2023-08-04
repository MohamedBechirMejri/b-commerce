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
  TbX,
} from "react-icons/tb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/", sublinks: null },
  { name: "About Us", href: "/about", sublinks: null },
  { name: "Shop", href: "/products", sublinks: null },
  { name: "Products", href: "/products", sublinks: null },
  { name: "Contact Us", href: "/contact", sublinks: null },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const pathname = usePathname();

  return pathname.split("/")[1] === "admin" ? (
    <></>
  ) : (
    <header className="w-full h-[4.75rem] border-b bg-[#f0f2ee]">
      <div className="h-[5rem] w-full sm:grid sm:grid-cols-[auto,1fr,1fr] px-4 max-w-[101rem] m-auto items-center text-[#525258] flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="sm:h-14 h-8 sm:mr-[6rem]"
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
                <Counter value={0} />
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
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="h-[100svh] w-full fixed top-0 left-0 bg-white overflow-y-scroll z-20 p-4 flex flex-col justify-between"
              style={{
                backgroundImage: "url(/images/header-bg.webp)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            >
              <div>
                <div className="flex justify-between items-center">
                  <Link href={"/"}>
                    <Image
                      src={"/logo.svg"}
                      alt="Logo"
                      width={50}
                      height={50}
                      className="h-12"
                      priority
                    />
                  </Link>

                  <button
                    className="sm:hidden text-lg hover:text-white transition-all duration-300 border-2 rounded-full p-3 hover:bg-[#f50963]"
                    onClick={() => setIsMenuVisible(false)}
                    children={<TbX />}
                  />
                </div>

                <nav className="w-full tracking-wide text-sm font-bold uppercase text-black pt-4">
                  <ul className="flex flex-col py-4">
                    {links.map((link, i) => {
                      return (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className={`inline-block w-full py-3 ${
                              i > 0 ? "border-t" : ""
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-full justify-evenly text-2xl gap-4 flex p-4">
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
                        <Counter value={0} />
                      </>
                    }
                  />
                </div>

                <SearchBar className="border-[#f50963] placeholder:text-[#f50963] text-[#f50963] font-semibold border-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={
        "h-[3rem] w-full max-w-[320px] border rounded-full overflow-hidden relative shadow-sm " +
        className
      }
    >
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
    <span className="absolute top-2 -right-1 text-xs bg-[#f50963] text-[#f0f2ee] rounded-full w-4 h-4 flex items-center justify-center font-bold ring ring-[#f0f2ee]">
      {value}
    </span>
  );
};
