import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbSquareRounded, TbSquareRoundedCheckFilled } from "react-icons/tb";

export default function Select({
  options,
  selected = [],
  setSelected,
  label = "",
  placeholder = "Search...",
}: {
  options: { id: string; name: string }[];
  selected: string[];
  setSelected: (arg0: string[]) => void;
  label?: string;
  placeholder?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  // only close the dropdown if the user clicks outside of it
  const handleBlur = (e: {
    currentTarget: { contains: (arg0: any) => any };
    relatedTarget: any;
  }) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
  };

  const handleSelect = (option: { id: string; name: string }) => {
    if (selected.includes(option.id))
      setSelected(selected.filter(id => id !== option.id));
    else setSelected([...selected, option.id]);
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
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            className="absolute left-0 z-20 w-full overflow-y-scroll border rounded-md shadow-md bg-violet-500 max-h-60 top-16 border-violet-900"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            {options.map(option =>
              option.name.includes(search) ? (
                <motion.li
                  key={option.id}
                  className="relative flex items-center justify-between w-full px-4 py-2 text-sm font-semibold cursor-pointer"
                  initial={{ backgroundColor: "#222" }}
                  whileHover={{ backgroundColor: "#333" }}
                  whileTap={{ backgroundColor: "#444" }}
                  transition={{ duration: 0.1 }}
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={selected.includes(option.id)}
                  onClick={() => handleSelect(option)}
                >
                  {option.name}

                  <i className="text-violet-400">
                    {selected.includes(option.id) ? (
                      <TbSquareRoundedCheckFilled />
                    ) : (
                      <TbSquareRounded className="block text-violet-400" />
                    )}
                  </i>
                </motion.li>
              ) : null
            )}
            {search && !options.map(o => o.name).includes(search) && (
              <button className="flex items-center justify-center w-full p-2">
                Create "{search}" Category
              </button>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
