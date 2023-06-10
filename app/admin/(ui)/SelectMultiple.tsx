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
      setSelected(selected.filter((id) => id !== option.id));
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
      <motion.div className="relative flex w-full flex-wrap items-center gap-2 p-3 pb-1">
        <label className="text-xs font-bold">{label}:</label>
        {selected.map((id) => (
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
            className="flex w-max cursor-pointer items-center gap-1 rounded-md p-1 px-2 text-sm font-semibold"
            onClick={() =>
              setSelected(selected.filter((option) => option !== id))
            }
          >
            {options.find((option) => option.id === id)?.name}
            <TbSquareRoundedXFilled />
          </motion.div>
        ))}
        <div className="w-0 py-4 opacity-0" />
        <i className="absolute right-5 top-5">
          <TbListCheck />
        </i>
      </motion.div>

      <motion.input
        className="relative z-10 h-full w-full border-none bg-transparent px-3 text-gray-400 outline-none"
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.ul
            className="absolute left-0 top-full z-20 max-h-64 w-full overflow-y-scroll rounded-md border border-violet-900 bg-violet-500 shadow-md"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 15 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            {options.map((option) =>
              option.name.includes(search) ? (
                <motion.li
                  key={option.id}
                  className="relative flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm font-semibold"
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
            {search && !options.map((o) => o.name).includes(search) && (
              <button
                className="flex w-full items-center justify-center p-2"
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
