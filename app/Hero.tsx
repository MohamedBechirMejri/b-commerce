"use client";

import Link from "next/link";
import Image from "next/image";

import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[45rem] bg-[#f0f2ee]">
      <div className="grid grid-cols-2 relative max-w-[100rem] mx-auto">
        <div className="pt-[12.5rem] pl-24">
          <p className="pl-2 border-l-2 border-rose-500 leading-[1.05] tracking-wide text-[#525258]">
            Best Ear
            <br />
            Headphones
          </p>
          <h1 className="font-semibold text-7xl pt-4 pl-1 tracking-wide leading-[1.1] pb-14">
            Music To
            <br />
            Fill Your Heart
          </h1>

          <Link
            href="/products"
            className="border border-current p-3 px-8 text-sm font-bold flex w-max items-center gap-1 hover:bg-black hover:text-white transition-all duration-500"
          >
            Shop Now <TbArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="grid place-items-center h-[45rem] w-[45rem] relative">
          <div className="relative w-full h-full">
            <motion.div
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white rounded-full absolute inset-0"
            />
            <motion.div
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              transition={{ duration: 3, repeatDelay: 1.5, repeat: Infinity }}
              className="bg-white rounded-full absolute inset-0"
            />
          </div>
          <Image
            src={"/slide-1.webp"}
            alt="slide-1"
            width={460}
            height={525}
            className="h-[32rem] w-max absolute bottom-0 right-1/2 translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
