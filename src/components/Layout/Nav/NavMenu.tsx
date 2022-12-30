import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const NavMenu = ({
  category,
  isOpen,
  setIsOpen,
}: {
  category: {
    name: string;
    url: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(true);

  return (
    <motion.div
      initial={{ y: 15, scale: 1 }}
      animate={{ y: isOpen ? 0 : 550, scale: isOpen ? 1 : 0 }}
      transition={{ type: "spring", damping: 27, stiffness: 150 }}
      className="relative flex items-center justify-center rounded-3xl"
      onMouseEnter={() => setIsSubmenuVisible(true)}
      onMouseLeave={() => setIsSubmenuVisible(false)}
    >
      <Link href={category.url} onClick={() => setIsOpen(false)}>
        {category.name}
      </Link>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isSubmenuVisible ? 1 : 0 }}
        className="absolute left-full h-screen w-[25rem] bg-red-500"
      ></motion.div>
    </motion.div>
  );
};

export default NavMenu;
