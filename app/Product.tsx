import { motion } from "framer-motion";
import Image from "next/image";
import { TbShoppingCart } from "react-icons/tb";

const imageVariants = { initial: { scale: 1 }, hover: { scale: 1.1 } };
const buttonVariants = {
  initial: { y: "100%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
};

const MotionImage = motion(Image);

export default function Product({ product, i }) {
  return (
    <motion.div
      key={"product" + i}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-col items-start justify-start gap-1"
    >
      <div className="bg-[#f6f8fa] h-[24rem] overflow-hidden relative">
        <MotionImage
          variants={imageVariants}
          transition={{ duration: 0.3 }}
          src={product.images[0]}
          alt={product.title}
          height={1125}
          width={960}
          className="w-full h-full object-contain"
        />

        <motion.button
          variants={buttonVariants}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-10 bg-black w-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f50963] [transition-property:background-color]  [transition-duration:300ms]"
        >
          <TbShoppingCart /> Add to Cart
        </motion.button>
      </div>

      <h1 className="font-normal tracking-wider mt-2">{product.name}</h1>

      <div className="flex gap-2">
        <span className="text-[#f50963] font-normal">${product.price}</span>
        <span className="line-through">${product.price * 1.5}</span>
      </div>
    </motion.div>
  );
}
