import { motion } from "framer-motion";

export default function Toggle({
  label = "",
  isToggled = false,
  setIsToggled,
}: {
  label?: string;
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
}) {
  return (
    <motion.div className="flex items-center justify-between max-w-xl p-3 py-4 overflow-hidden rounded-md shadow-sm">
      <label className="text-xs font-bold top-4 left-3">{label}</label>
      <motion.button
        className="p-5 px-9 rounded-full bg-[#303030] relative"
        onClick={() => setIsToggled(!isToggled)}
      >
        <motion.div
          className="absolute p-4 rounded-full left-1 top-1/2"
          initial={{
            y: "-50%",
            x: isToggled ? "100%" : "0%",
            backgroundColor: isToggled ? "#6d28d9" : "#555",
          }}
          animate={{
            y: "-50%",
            x: isToggled ? "100%" : "0%",
            backgroundColor: isToggled ? "#6d28d9" : "#555",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </motion.div>
  );
}
