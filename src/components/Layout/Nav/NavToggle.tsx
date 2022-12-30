import type { SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { RefAttributes } from "react";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="1"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const NavToggle = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex h-full items-center justify-center"
    >
      <motion.button
        initial={{ scale: 0, y: 25 }}
        animate={{ scale: 1, y: 0 }}
        className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-2"
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
        <svg width="23" height="23" viewBox="0 0 23 23" className="scale-[1.7]">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default NavToggle;
