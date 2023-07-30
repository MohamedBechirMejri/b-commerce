import type { Product } from "~/types";

import Image from "next/image";
import { useState } from "react";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandWhatsapp,
  TbHeart,
  TbLink,
  TbMinus,
  TbPlus,
  TbShoppingCart,
  TbX,
} from "react-icons/tb";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { motion } from "framer-motion";

export default function ProductQuickView({
  product,
  setQuickView,
}: {
  product: Product;
  setQuickView: (product: Product | null) => void;
}) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(product.minBuy);

  const handleAddition = () => {
    if (quantity < product.maxBuy) setQuantity(quantity + 1);
  };
  const handleSubtraction = () => {
    if (quantity > product.minBuy) setQuantity(quantity - 1);
  };

  return (
    <dialog
      className="w-full h-full fixed top-0 left-0 z-20 overflow-scroll flex items-center justify-center bg-transparent"
      open
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-40 "
        onClick={() => setQuickView(null)}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{}}
        className="bg-white min-h-[min(42rem,90svh)] max-w-[76rem] w-[94svw] relative z-50 grid grid-cols-[auto,1fr]"
      >
        <button
          className="absolute top-4 right-4 text-2xl hover:text-[#f50963] transition-all duration-300"
          onClick={() => setQuickView(null)}
        >
          <TbX />
        </button>

        <div className="w-[38rem] h-full grid grid-rows-[1fr,auto] gap-4 p-10">
          <div className="bg-[#f6f8fa] h-full relative">
            <Image
              src={activeImage}
              alt={product.name}
              height={1125}
              width={960}
              className="absolute h-full w-full object-contain"
            />
          </div>
          <div className="h-[6rem] flex gap-12">
            {product.images.map(image => {
              return (
                <div
                  key={"quickview" + image}
                  className={`bg-[#f6f8fa] h-full relative w-[6rem] border shrink-0 ${
                    activeImage === image && "border-[#f50963]"
                  } transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveImage(image)}
                >
                  <Image
                    src={image}
                    alt={product.name}
                    height={1125}
                    width={960}
                    className="h-full w-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-10">
          <h1 className="text-[2rem] font-medium leading-tight">
            {product.name}
          </h1>
          <p className="mt-6 text-sm text-[#525258]">{product.description}</p>

          <div className="flex gap-2 mt-8 text-sm font-medium">
            <span className="line-through">
              ${product.price + product.price * 0.12}
            </span>
            <span className="text-[#f50963]">${product.price}</span>
          </div>

          <div className="border w-max flex items-center text-sm mt-3 font-medium">
            <button
              className="p-3 text-xl hover:text-[#f50963] transition-all duration-300"
              onClick={handleSubtraction}
            >
              <TbMinus />
            </button>
            <span className="border-x px-6 py-1">{quantity}</span>
            <button
              className="p-3 text-xl hover:text-[#f50963] transition-all duration-300"
              onClick={handleAddition}
            >
              <TbPlus />
            </button>
          </div>

          <div className="mt-12 flex items-stretch gap-2">
            <button className="bottom-0 left-0 h-12 bg-[#03041c] w-max text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#f50963] [transition-property:background-color] [transition-duration:300ms] px-10">
              <TbShoppingCart className="text-xl" /> Add to Cart
            </button>

            <ActionButton handleClick={() => {}}>
              {/* // TODO: add wishlist state */}
              <TbHeart />
              <Tooltip>Add To Wishlist</Tooltip>
            </ActionButton>

            <Link
              href={`/product/${product.id}`}
              className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white [transition-property:background-color] [transition-duration:150ms] relative group flex items-center justify-center px-3 border text-xl"
            >
              <TbLink />
              <Tooltip>View Details</Tooltip>
            </Link>
          </div>

          <hr className="my-10" />

          <p className="mt-10 font-light">
            <strong className="font-medium">SKU: </strong>
            {product.reference}
          </p>
          <div className="font-light flex gap-2">
            <strong className="font-medium">Categories: </strong>
            <div className="flex gap-1">
              {product.categories.map((c, i) => (
                <Link
                  //   @ts-ignore
                  href={`/c/${c.id}`}
                  className="hover:text-[#f50963] transition-all"
                >
                  {/* @ts-ignore */}
                  {c.name}
                  {i < product.categories.length - 1 ? "," : "."}
                </Link>
              ))}
            </div>
          </div>

          <div className="font-light flex gap-2 my-4">
            <strong className="font-medium">Tags: </strong>
            {/* @ts-ignore */}
            <div className="flex">
              {product.tags.split(",").map(t =>
                !t ? null : (
                  //   @ts-ignore
                  <Link
                    href={`/serach?tags=${t}`}
                    className="hover:bg-[#f50963] hover:text-white transition-all border px-2"
                  >
                    {t}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="font-light flex gap-2 my-4">
            <strong className="font-medium">Share: </strong>
            {/* @ts-ignore */}
            <div className="flex gap-2 text-xl">
              <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/products/${product.id}`}
              >
                <TbBrandFacebook />
              </FacebookShareButton>
              <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/products/${product.id}`}
              >
                <TbBrandTwitter />
              </TwitterShareButton>
              <WhatsappShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/products/${product.id}`}
              >
                <TbBrandWhatsapp />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}

const ActionButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="bg-white shadow p-2 hover:bg-[#f50963] hover:text-white relative group text-xl px-3 border transition-all duration-300"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute left-1/2 bottom-full bg-black text-white text-xs px-2 py-[1px] -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-3 w-max pointer-events-none">
      {children}
      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[7.5px] border-b-[5px] border-b-transparent absolute border-black top-full left-1/2 -translate-x-1/2 rotate-90 -translate-y-[1.5px]" />
    </div>
  );
};
