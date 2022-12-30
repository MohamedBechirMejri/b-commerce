import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

const CartToggle = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-full w-full items-center justify-center text-xl "
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
      >
        <FiShoppingCart />
      </motion.button>
    </div>
  );
};
export default CartToggle;
