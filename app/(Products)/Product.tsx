import type { Product } from "~/types";

import useStore from "~/lib/hooks/useStore";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TbEye,
  TbHeart,
  TbHeartFilled,
  TbLink,
  TbShoppingCart,
} from "react-icons/tb";

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

export default function Product({
  product,
  i,
  setQuickView,
}: {
  product: Product;
  i: number;
  setQuickView: (product: Product) => void;
}) {
  const { addToCart, cart, setMenuStatus, wishlist, toggleWishlistItem } =
    useStore();

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
          alt={product.name}
          height={1125}
          width={960}
          className="w-full h-full object-contain"
        />

        <div className="absolute top-0 left-0 h-max w-max pt-4 flex flex-col gap-1 items-stretch text-sm text-white text-center">
          <p className="bg-[#f50963] px-3 p-[1px]">Sale</p>
          <p className="bg-black px-3 p-[1px]">-12%</p>
        </div>

        <div className="absolute top-0 right-0 h-full w-12 pt-10 flex flex-col gap-2 items-center text-xl pr-2">
          <ActionButton
            handleClick={() => toggleWishlistItem(product)}
            delay={0}
          >
            {wishlist.map(p => p.id).includes(product.id) ? (
              <TbHeartFilled className="text-[#f50963] group-hover:text-white transition-all duration-300" />
            ) : (
              <TbHeart />
            )}
            <Tooltip>Add To Wishlist</Tooltip>
          </ActionButton>

          <ActionButton handleClick={() => setQuickView(product)} delay={0.05}>
            <TbEye />
            <Tooltip>Quick View</Tooltip>
          </ActionButton>

          <MotionLink
            href={`/product/${product.id}`}
            variants={quickActionVariants}
            transition={{ delay: 0.1 }}
            className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color] [transition-duration:150ms] relative group"
          >
            <TbLink />
            <Tooltip>View Details</Tooltip>
          </MotionLink>
        </div>

        <motion.button
          variants={buttonVariants}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-10 bg-black w-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f50963] [transition-property:background-color] [transition-duration:300ms]"
          onClick={() =>
            cart.map(x => x.product.id).includes(product.id)
              ? setMenuStatus("cart")
              : addToCart(product, product.minBuy)
          }
        >
          <TbShoppingCart />
          {cart.map(x => x.product.id).includes(product.id)
            ? "View "
            : "Add to "}
          Cart
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

const ActionButton = ({
  children,
  handleClick,
  delay,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  delay: number;
}) => {
  return (
    <motion.button
      variants={quickActionVariants}
      transition={{ delay }}
      className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color,color] [transition-duration:200ms] relative group"
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-1/2 right-full bg-black text-white text-xs px-2 py-[1px] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-2 w-max pointer-events-none">
      {children}
      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[7.5px] border-b-[5px] border-b-transparent absolute border-black left-full top-1/2 -translate-y-1/2"></div>
    </div>
  );
};
