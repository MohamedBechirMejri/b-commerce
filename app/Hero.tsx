"use client";

import Link from "next/link";
import Image from "next/image";

import { TbArrowRight } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionImage = motion(Image);

const slides = [
  {
    id: 1,
    image: "/slide-1.webp",
    title1: "Best Ear",
    title2: "Headphones",
    subtitle1: "Music To",
    subtitle2: "Fill Your Heart",
  },
  {
    id: 2,
    image: "/slide-2.png",
    title1: "Best Ear2",
    title2: "Headphones2",
    subtitle1: "Find your",
    subtitle2: "Beats Studio.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="h-[45rem] bg-[#f0f2ee]">
      <div className="grid grid-cols-2 relative max-w-[100rem] mx-auto">
        <div className="pt-[12.5rem] pl-24">
          <div className="relative">
            <AnimatePresence>
              {slides.map((slide, i) => {
                return i === currentSlide ? (
                  <Slide key={"slide" + i} slide={slide} />
                ) : null;
              })}
            </AnimatePresence>

            {/* placeholder */}
            <div className="h-full opacity-0 ">
              <p className="pl-2 border-l-2 border-rose-500 leading-[1.05] tracking-wide text-[#525258]">
                slide.title1
                <br />
                slide.title2
              </p>
              <h1 className="font-semibold text-7xl pt-4 pl-1 tracking-wide leading-[1.1] pb-14">
                slide.subtitle1
                <br />
                slide.subtitle2
              </h1>
            </div>
          </div>
          <Link
            href="/products"
            className="border border-current p-3 px-8 text-sm font-bold flex w-max items-center gap-1 hover:bg-black hover:text-white transition-all duration-500"
          >
            Shop Now <TbArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="grid place-items-center h-[45rem] w-[45rem] relative">
          <div className="relative w-full h-full">
            {Array.from({ length: 2 }).map((_, i) => {
              return (
                <motion.div
                  key={"circle" + i}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 0, scale: 1 }}
                  transition={{
                    duration: 2.5,
                    repeatDelay: i,
                    repeat: Infinity,
                  }}
                  className="bg-white rounded-full absolute inset-0"
                />
              );
            })}
          </div>

          {slides.map((slide, i) => {
            return (
              <AnimatePresence>
                {i === currentSlide ? (
                  <MotionImage
                    key={"slideimage" + i}
                    initial={{ opacity: 0, x: "60%" }}
                    animate={{ opacity: 1, x: "50%" }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    exit={{
                      opacity: 0,
                      x: "40%",
                      transition: { delay: 0, duration: 0.4 },
                    }}
                    src={slide.image}
                    alt={`slide-${i}`}
                    width={460}
                    height={525}
                    className="h-[32rem] w-max absolute bottom-0 right-1/2"
                  />
                ) : null}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Slide = ({ slide }: { slide: any }) => {
  return (
    <motion.div className="h-full absolute">
      <motion.p className="pl-2 border-l-2 border-rose-500 leading-[1.05] tracking-wide text-[#525258]">
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          exit={{ opacity: 0, y: 5, transition: { delay: 0 } }}
          className="inline-block"
        >
          {slide.title1}
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          exit={{ opacity: 0, y: 5, transition: { delay: 0.1 } }}
          className="inline-block"
        >
          {slide.title2}
        </motion.span>
      </motion.p>
      <h1 className="font-semibold text-7xl pt-4 pl-1 tracking-wide leading-[1.1] pb-14">
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          exit={{ opacity: 0, y: 5, transition: { delay: 0.2 } }}
          className="inline-block"
        >
          {slide.subtitle1}
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          exit={{ opacity: 0, y: 10, transition: { delay: 0.3 } }}
          className="inline-block"
        >
          {slide.subtitle2}
        </motion.span>
      </h1>
    </motion.div>
  );
};
