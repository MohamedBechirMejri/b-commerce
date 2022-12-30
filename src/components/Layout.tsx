import { motion } from "framer-motion";
import { useState } from "react";

import Account from "./Account";
import Cart from "./Cart";
import Logo from "./Logo";
import Nav from "./Nav";
import NavToggle from "./NavToggle";
import Search from "./Search";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isNavOpen ? "20rem" : 0 }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="absolute z-10 h-full w-full overflow-y-scroll bg-slate-100 elevation-4"
      >
        <div className="grid h-24 grid-cols-[1fr,2fr,15fr,1fr,1fr]">
          <NavToggle isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <Logo />
          <Search />
          <Cart />
          <Account />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </motion.div>
    </div>
  );
};

export default Layout;
