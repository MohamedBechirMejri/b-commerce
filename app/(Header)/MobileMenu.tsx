import type { Product } from "~/types";

import Link from "next/link";
import Image from "next/image";
import useStore from "~/lib/hooks/useStore";

import { motion } from "framer-motion";
import { TbHeart, TbShoppingCart, TbUser, TbX } from "react-icons/tb";

import SearchBar from "./SearchBar";
import Counter from "./Counter";

const MobileMenu = ({
  cart,
  links,
}: {
  cart: Product[];
  links: { name: string; href: string }[];
}) => {
  const { setMenuStatus } = useStore();

  return (
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
            onClick={() => setMenuStatus("closed")}
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

      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="w-full justify-evenly text-2xl gap-4 flex p-4">
          <button children={<TbUser />} />
          <button className="relative">
            <TbHeart />
            <Counter value={0} />
          </button>

          <button className="relative" onClick={() => setMenuStatus("cart")}>
            <TbShoppingCart />
            <Counter value={cart.length} />
          </button>
        </div>

        <SearchBar className="border-[#f50963] placeholder:text-[#f50963] text-[#f50963] font-semibold border-2" />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
