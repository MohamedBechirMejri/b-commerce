import { motion } from "framer-motion";
import Link from "next/link";
import type Category from "../../../types/Category";

const NavMenu = ({
  category,
  isOpen,
  setIsOpen,
  submenu,
  setSubMenu,
}: {
  category: Category;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  submenu: Category[] | null;
  setSubMenu: (submenu: Category[] | null) => void;
}) => {
  const handleMouseEnter = () => {
    setSubMenu(category.subCategories || null);
  };

  return (
    <motion.div
      initial={{ y: 15, scale: 1 }}
      animate={{ y: isOpen ? 0 : 550, scale: isOpen ? 1 : 0 }}
      className="relative flex w-full items-center justify-center"
      transition={{ type: "spring", damping: 27, stiffness: 150 }}
      onMouseEnter={handleMouseEnter}
    >
      <Link
        href={"/categories/" + category.id}
        onClick={() => setIsOpen(false)}
        style={{
          backgroundColor:
            submenu &&
            JSON.stringify(submenu) === JSON.stringify(category.subCategories)
              ? "#ffffff27"
              : "transparent",
        }}
        className="block h-full w-full p-6 text-center transition-all"
      >
        {category.name}
      </Link>
    </motion.div>
  );
};

export default NavMenu;
