import { motion } from "framer-motion";
import { useState } from "react";

export default function Input({ label = "", ...props }) {
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
      <label className="absolute text-xs font-bold top-4 left-3">{label}</label>

      <motion.input
        className="relative z-10 w-full h-full px-3 py-4 text-gray-400 bg-transparent border-none outline-none pt-9"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="off"
        {...props}
      />
    </motion.div>
  );
}
