import type { Product } from "~/types";

import Link from "next/link";
import Image from "next/image";
import useStore from "~/lib/hooks/useStore";

import { motion } from "framer-motion";
import { TbMinus, TbPlus, TbShoppingCart, TbX } from "react-icons/tb";

export default function CartOverlay() {
  const { setMenuStatus, cart, addToCart, reduceItem, removeItem } = useStore();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="h-[100svh] w-full fixed top-0 right-[-6.5px] bg-white overflow-y-scroll z-20 max-w-[28rem] grid grid-rows-[auto,1fr,auto]"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-semibold text-black">
          Cart <span className="text-[#09f5ae]">({cart.length})</span>
        </h1>

        <button
          className="text-lg hover:text-white transition-all duration-300 border-2 border-transparent rounded-full p-3 hover:bg-[#000000] hover:border-current"
          onClick={() => setMenuStatus("closed")}
        >
          <TbX />
        </button>
      </div>

      <div className="h-full overflow-scroll flex flex-col gap-2">
        {cart.length === 0 && (
          <div className="flex flex-col gap-4 p-2 items-center justify-center h-full">
            <Image
              src={"/images/empty-cart.webp"}
              alt={"empty cart"}
              width={283}
              height={171}
              objectFit="contain"
            />
            <p>Your cart is empty</p>
            <Link
              href={"/products"}
              className="h-12 w-max px-8 font-semibold flex items-center justify-center gap-2 hover:bg-[#09f5ae] hover:text-white transition-all duration-300 border shadow border-current"
            >
              Continue Shopping
            </Link>
          </div>
        )}
        {cart.map((item, i) => {
          const { product, quantity } = item;

          return (
            <div
              key={product.id}
              className="flex items-start justify-between gap-4 border-b"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={100}
                  height={100}
                  objectFit="contain"
                />

                <div className="flex flex-col">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-black font-semibold hover:text-[#09f5ae] transition-all duration-300"
                  >
                    {product.name}
                  </Link>

                  <div className="flex gap-2 items-center">
                    <p className="text-[#09f5ae] font-semibold">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantity: {quantity}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="text-lg hover:text-white transition-all duration-300 border-2 p-1 hover:bg-[#000000] hover:border-current disabled:opacity-50 disabled:pointer-events-none"
                      disabled={quantity <= product.minBuy}
                      onClick={() => reduceItem(product.id)}
                    >
                      <TbMinus />
                    </button>

                    <button
                      className="text-lg hover:text-white transition-all duration-300 border-2 p-1 hover:bg-[#000000] hover:border-current disabled:opacity-50 disabled:pointer-events-none"
                      disabled={
                        quantity >= product.maxBuy || quantity >= product.stock
                      }
                      onClick={() => addToCart(product)}
                    >
                      <TbPlus />
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="text-lg hover:text-white transition-all duration-300 border-2 p-2 hover:bg-[#000000] hover:border-current mt-3"
                onClick={() => removeItem(product.id)}
              >
                <TbX />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-black">Subtotal</h1>
          <p className="text-xl font-semibold text-[#09f5ae]">
            $
            {cart
              .reduce((acc, item) => {
                return acc + item.product.price * item.quantity;
              }, 0)
              .toFixed(2)}
          </p>
        </div>

        <Link
          href="/cart"
          className="h-12 w-full font-semibold flex items-center justify-center gap-2 hover:bg-[#09f5ae] hover:text-white transition-all duration-300 border shadow"
          onClick={() => setMenuStatus("closed")}
        >
          <TbShoppingCart /> View Cart
        </Link>
        <Link
          href="/checkout"
          className="h-12 bg-black w-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#09f5ae] transition-all duration-300"
          onClick={() => setMenuStatus("closed")}
        >
          <TbShoppingCart /> Go To Checkout
        </Link>
      </div>
    </motion.div>
  );
}
