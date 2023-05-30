import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const cats = [
  { id: 1, name: "Bengal" },
  { id: 2, name: "Siamese" },
  { id: 3, name: "Persian" },
  { id: 4, name: "Sphynx" },
];

export default function Select({ selected = [], label = "", ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  // only close the dropdown if the user clicks outside of it
  const handleBlur = (e: {
    currentTarget: { contains: (arg0: any) => any };
    relatedTarget: any;
  }) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
  };

  return (
    <motion.div
      className="relative max-w-xl rounded-md shadow-sm"
      initial={{ border: "1px solid #303030" }}
      animate={{
        border: isFocused ? "1px solid #6d28d9" : "1px solid #303030",
      }}
      transition={{ duration: 0.1 }}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
    >
      <label className="absolute text-xs font-bold top-4 left-3">{label}</label>

      <motion.input
        className="relative z-10 w-full h-full px-3 py-4 text-gray-400 bg-transparent border-none outline-none pt-9"
        type="search"
        {...props}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            className="absolute z-20 w-full overflow-y-scroll rounded-md shadow-md bg-violet-400 max-h-60 top-16"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            {cats.map(cat => (
              <motion.li
                key={cat.id}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold cursor-pointer"
                initial={{ backgroundColor: "#222" }}
                animate={{ backgroundColor: "#222" }}
                whileHover={{ backgroundColor: "#333" }}
                transition={{ duration: 0.1 }}
                tabIndex={0}
                role="checkbox"
              >
                {cat.name}
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
