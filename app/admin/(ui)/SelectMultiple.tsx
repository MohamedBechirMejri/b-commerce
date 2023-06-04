import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  TbListCheck,
  TbSquareRounded,
  TbSquareRoundedCheckFilled,
  TbSquareRoundedXFilled,
} from "react-icons/tb";

export default function SelectMultiple({
  options,
  selected = [],
  setSelected,
  label = "",
  placeholder = "Search...",
  onCreate = () => {},
}: {
  options: { id: string; name: string }[];
  selected: string[];
  setSelected: (arg0: string[]) => void;
  label?: string;
  placeholder?: string;
  onCreate?: (arg0: string) => void;
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
      className="relative grid max-w-xl grid-rows-2 rounded-md shadow-sm"
      initial={{ border: "1px solid #303030" }}
      animate={{
        border: isFocused ? "1px solid #6d28d9" : "1px solid #303030",
      }}
      transition={{ duration: 0.1 }}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
    >
      <motion.div className="relative flex flex-wrap items-center w-full gap-2 p-3 pb-1">
        <label className="text-xs font-bold">{label}:</label>
        {selected.map(id => (
          <motion.div
            key={id}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 5,
              backgroundColor: "#6d28d9",
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ backgroundColor: "#6d28d9aa" }}
            whileTap={{ backgroundColor: "#6d28d955" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 p-1 px-2 text-sm font-semibold rounded-md cursor-pointer w-max"
            onClick={() =>
              setSelected(selected.filter(option => option !== id))
            }
          >
            {options.find(option => option.id === id)?.name}
            <TbSquareRoundedXFilled />
          </motion.div>
        ))}
        <div className="w-0 py-4 opacity-0" />
        <i className="absolute right-5 top-5">
          <TbListCheck />
        </i>
      </motion.div>

      <motion.input
        className="relative z-10 w-full h-full px-3 text-gray-400 bg-transparent border-none outline-none"
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            className="absolute left-0 z-20 w-full overflow-y-scroll border rounded-md shadow-md bg-violet-500 max-h-64 top-full border-violet-900"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 15 }}
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
              <button
                className="flex items-center justify-center w-full p-2"
                onClick={() => {
                  onCreate(search);
                  setSearch("");
                }}
              >
                Create "{search}"
              </button>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
