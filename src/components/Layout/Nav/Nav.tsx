import { motion } from "framer-motion";
import { useState } from "react";
import type Category from "../../../types/Category";
import NavMenu from "./NavMenu";

const categories = Array(10).fill({
  id: 0,
  name: "Home",
  url: "/",
  subCategories: [
    {
      id: 1,
      name: "Home",
      url: "/",
      subCategories: [
        {
          id: 2,
          name: "Home",
          url: "/",
          subCategories: [
            {
              id: 3,
              name: "Home",
              url: "/",
              subCategories: [],
            },
          ],
        },
      ],
    },
  ],
});

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [submenu, setSubMenu] = useState<Category[] | null>(null);
  return (
    <motion.nav
      initial={{ x: "-20rem" }}
      animate={{ x: isOpen ? 0 : "-20rem" }}
      transition={{ type: "spring", damping: 27, stiffness: 150 }}
      className="absolute top-0 z-50 flex h-screen w-[20rem] select-none flex-col overflow-scroll bg-slate-900 py-8 text-3xl font-bold text-slate-100 scrollbar-none"
      onMouseLeave={() => setSubMenu(null)}
    >
      {categories.map((category) => {
        return (
          <NavMenu
            key={category.name} // TODO: replace with id
            category={category}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            submenu={submenu}
            setSubMenu={setSubMenu}
          />
        );
      })}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: submenu ? 1 : 0 }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="fixed top-0 left-[20rem] h-screen w-[35rem] origin-left bg-slate-800"
      ></motion.div>
    </motion.nav>
  );
};

export default Nav;
