import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbArrowNarrowDown } from "react-icons/tb";

const options = [
  { id: "price_ascending", name: "Price: Low to High" },
  { id: "price_descending", name: "Price: High to Low" },
  { id: "latest", name: "Newest Arrivals" },
  { id: "best", name: "Best Sellers" },
];

export default function Sortin({
  sorting,
  setSorting,
}: {
  sorting: any;
  setSorting: any;
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (option: any) => {
    setIsFocused(false);
    setSorting(option);
  };

  return (
    <motion.div
      className="relative max-w-[14rem] shadow-sm h-10 border"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <h1 className="text-sm flex items-center justify-between p-2 h-full absolute w-full">
        {sorting.name} <TbArrowNarrowDown />
      </h1>
      <motion.input className="relative z-10 h-full border-none bg-transparent px-3 text-gray-400 outline-none w-full cursor-pointer opacity-0" />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            className="absolute left-0 top-full z-20 max-h-64 w-full border"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: 0 }}
          >
            {options.map(option => (
              <motion.li
                key={option.id}
                className="relative flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm font-semibold"
                initial={{ backgroundColor: "#fff" }}
                whileHover={{ backgroundColor: "#eee" }}
                whileTap={{ backgroundColor: "#ddd" }}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
