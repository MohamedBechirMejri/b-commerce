import { motion } from "framer-motion";

const NavToggle = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <motion.button
      initial={{ scale: 0, x: "-50%", y: 25, backgroundColor: "#0f172a" }}
      animate={{
        scale: 1,
        y: 0,
        backgroundColor: isOpen ? "#f1f5f9" : "#0f172a",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="z-20 h-[3.5rem] w-[3.5rem] rounded-full elevation-8"
      aria-label="toggle nav"
      aria-pressed="false"
      onClick={(e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const target: HTMLButtonElement = e.target;
        const pressed = target.getAttribute("aria-pressed") === "true";
        target.setAttribute("aria-pressed", `${!pressed}`);

        setIsOpen(!isOpen);
      }}
    />
  );
};

export default NavToggle;
