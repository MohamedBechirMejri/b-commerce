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
    <motion.div className="flex max-w-xl items-center justify-between overflow-hidden rounded-md p-3 py-4 shadow-sm">
      <label className="left-3 top-4 text-xs font-bold">{label}</label>
      <motion.button
        className="relative rounded-full bg-[#303030] p-5 px-9"
        onClick={() => setIsToggled(!isToggled)}
      >
        <motion.div
          className="absolute left-1 top-1/2 rounded-full p-4"
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
