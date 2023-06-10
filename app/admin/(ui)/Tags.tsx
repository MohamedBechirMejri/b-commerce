import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbTags } from "react-icons/tb";

export default function Tags({
  tags = "",
  setTags,
  label = "",
  placeholder = "Tags...",
}: {
  tags?: string;
  setTags: (tags: string) => void;
  label?: string;
  placeholder?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [tag, setTag] = useState("");

  return (
    <motion.div
      className="relative grid max-w-xl grid-rows-[.75fr,auto] rounded-md shadow-sm"
      initial={{ border: "1px solid #303030" }}
      animate={{
        border: isFocused ? "1px solid #6d28d9" : "1px solid #303030",
      }}
      transition={{ duration: 0.1 }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <motion.div className="flex w-full flex-wrap items-center justify-between gap-2 p-3 pb-0 pr-4">
        <label className="text-xs font-bold">{label}</label>
        <TbTags />
      </motion.div>

      <div className="flex flex-wrap gap-1 p-2">
        <AnimatePresence>
          {tags.split(",").map((tag, i) =>
            tag ? (
              <motion.div
                key={"tag#" + i}
                className="flex h-8 w-max cursor-pointer items-center justify-center rounded-md bg-violet-900 px-3 text-xs text-white"
                initial={{
                  opacity: 0,
                  backgroundColor: "#6d28d999",
                  scale: 0.5,
                  y: 20,
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ backgroundColor: "#6d28d9" }}
                exit={{ opacity: 0, scale: 0, y: 10 }}
                onClick={() =>
                  setTags(
                    tags
                      .split(",")
                      .filter((_, j) => j !== i)
                      .join(",")
                  )
                }
              >
                {tag}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <motion.input
          className="relative z-10 h-8 w-full max-w-full border-none bg-transparent px-3 text-gray-400 outline-none"
          type="search"
          placeholder={placeholder}
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              if (tag === "" || tag.includes(",")) return;
              e.preventDefault();
              setTags(`${tags},${tag}`);
              setTag("");
            } else if (e.key === "Backspace" && tag === "") {
              setTags(tags.slice(0, tags.lastIndexOf(",")));
            }
          }}
        />
      </div>
    </motion.div>
  );
}
