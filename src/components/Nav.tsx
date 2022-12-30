import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Home", url: "/" },
  { name: "Create", url: "/new" },
  { name: "Contact", url: "/contact" },
  { name: "Lab", url: "https://lab.mohamedbechirmejri.dev" },
];

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <nav className="absolute top-0 h-screen w-[20rem] select-none flex-col bg-slate-900 p-8 text-5xl font-bold text-slate-100">
      {links.map((link) => (
        <motion.div
          key={link.name + link.name}
          initial={{ y: 15, scale: 1 }}
          animate={{
            y: isOpen ? 0 : 550,
            scale: isOpen ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 27, stiffness: 150 }}
          className="flex items-center justify-center rounded-3xl text-5xl"
        >
          <Link href={link.url} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Nav;
