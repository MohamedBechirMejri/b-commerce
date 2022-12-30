import { motion } from "framer-motion";
import { useState } from "react";

import Account from "./Account";
import CartToggle from "./Cart/CartToggle";
import Logo from "./Logo";
import Nav from "./Nav/Nav";
import NavToggle from "./Nav/NavToggle";
import Search from "./Search";
import Cart from "./Cart/Cart";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSidebarOpen ? "-20rem" : isNavOpen ? "20rem" : 0 }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="absolute z-10 h-full w-full bg-slate-100 elevation-4"
      >
        <div className="grid h-[5rem] grid-cols-[1fr,2fr,15fr,1fr,1fr]">
          <NavToggle isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <Logo />
          <Search />
          <CartToggle isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <Account />
        </div>
        <div className="h-[calc(100vh-5rem)]">{children}</div>
      </motion.div>
      <Cart isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Layout;
