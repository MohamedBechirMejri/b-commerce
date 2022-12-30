import { motion } from "framer-motion";
import Link from "next/link";
import NavMenu from "./NavMenu";

const categories = Array(10).fill({
  name: "Home",
  url: "/",
  subcategories: [
    {
      name: "Home",
      url: "/",
      subcategories: [
        {
          name: "Home",
          url: "/",
          subcategories: [
            {
              name: "Home",
              url: "/",
              subcategories: [{ name: "Home", url: "/" }],
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
  return (
    <motion.nav
      initial={{ x: "-20rem" }}
      animate={{ x: isOpen ? 0 : "-20rem" }}
      transition={{ type: "spring", damping: 27, stiffness: 150 }}
      className="absolute top-0 z-50 flex h-screen w-[20rem] select-none flex-col gap-8 bg-slate-900 p-8 text-5xl font-bold text-slate-100"
    >
      {categories.map((category) => (
        <NavMenu
          key={category.name}
          category={category}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </motion.nav>
  );
};

export default Nav;
