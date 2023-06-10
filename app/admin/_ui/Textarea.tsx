import { motion } from "framer-motion";
import { useState } from "react";

export default function Textarea({ label = "", ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative max-w-xl overflow-hidden rounded-md shadow-sm"
      initial={{ border: "1px solid #303030" }}
      animate={{
        border: isFocused ? "1px solid #6d28d9" : "1px solid #303030",
      }}
      transition={{ duration: 0.1 }}
    >
      <label className="absolute left-3 top-4 text-xs font-bold">{label}</label>

      <motion.textarea
        className="relative z-10 h-full w-full resize-none border-none bg-transparent px-3 py-4 pt-9 text-gray-400 outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </motion.div>
  );
}
