import { motion } from "framer-motion";
import { useState } from "react";

import Account from "./Account";
import Cart from "./Cart";
import Logo from "./Logo";
import Nav from "./Nav";
import NavToggle from "./NavToggle";
import Search from "./Search";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // return (
  //   <>
  //     <div className="grid h-24 grid-cols-[2fr,2fr,15fr,1fr,1fr]">
  //       <Logo />
  //       <div></div>
  //       <Search />
  //       <Cart />
  //       <Account />
  //     </div>
  //     {children}
  //   </>
  // );

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Body */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isNavOpen ? "20rem" : 0 }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="absolute z-10 h-full w-full overflow-scroll bg-slate-100 elevation-4 scrollbar-none selection:bg-slate-900 selection:text-slate-100"
      >
        <div className="grid h-24 grid-cols-[2fr,2fr,15fr,1fr,1fr]">
          <Logo />
          <NavToggle isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <Search />
          <Cart />
          <Account />
        </div>
        {children}
      </motion.div>
      <Nav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </div>
  );
};

export default Layout;
