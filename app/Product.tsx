import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TbEye, TbHeart, TbLink, TbShoppingCart } from "react-icons/tb";

const imageVariants = { initial: { scale: 1 }, hover: { scale: 1.1 } };
const buttonVariants = {
  initial: { y: "100%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
};
const quickActionVariants = {
  initial: { x: "100%", opacity: 0 },
  hover: { x: "0%", opacity: 1 },
};

const MotionImage = motion(Image);
const MotionLink = motion(Link);

export default function Product({ product, i }) {
  return (
    <motion.div
      key={"product" + i}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-col items-start justify-start gap-1"
    >
      <div className="bg-[#f6f8fa] h-[22.5rem] overflow-hidden relative">
        <MotionImage
          variants={imageVariants}
          transition={{ duration: 0.3 }}
          src={product.images[0]}
          alt={product.title}
          height={1125}
          width={960}
          className="w-full h-full object-contain"
        />

        <div className="absolute top-0 left-0 h-max w-max pt-4 flex flex-col gap-1 items-stretch text-sm text-white text-center">
          <p className="bg-[#f50963] px-3 p-[1px]">Sale</p>
          <p className="bg-black px-3 p-[1px]">-12%</p>
        </div>

        <div className="absolute top-0 right-0 h-full w-12 pt-10 flex flex-col gap-2 items-center text-xl pr-2">
          <motion.button // TODO: add wishlist state
            variants={quickActionVariants}
            transition={{ delay: 0 }}
            className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color] [transition-duration:150ms]"
          >
            <TbHeart />
          </motion.button>
          <motion.button
            variants={quickActionVariants}
            transition={{ delay: 0.05 }}
            className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color] [transition-duration:150ms]"
          >
            <TbEye />
          </motion.button>
          <MotionLink
            href={`/product/${product.id}`}
            variants={quickActionVariants}
            transition={{ delay: 0.1 }}
            className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color] [transition-duration:150ms]"
          >
            <TbLink />
          </MotionLink>
        </div>

        <motion.button
          variants={buttonVariants}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-10 bg-black w-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f50963] [transition-property:background-color] [transition-duration:300ms]"
        >
          <TbShoppingCart /> Add to Cart
        </motion.button>
      </div>

      <Link
        href={`/product/${product.id}`}
        className="mt-2 hover:text-[#f50963] transition-all font-normal duration-300 text-sm"
      >
        {product.name}
      </Link>

      <div className="flex gap-2 -mt-1 text-sm">
        <span className="line-through">
          ${product.price + product.price * 0.12}
        </span>
        <span className="text-[#f50963] font-normal">${product.price}</span>
      </div>
    </motion.div>
  );
}
