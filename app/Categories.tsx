"use client";

import { register } from "swiper/element/bundle";
import Link from "next/link";

register();

const slides = [
  {
    image: "/images/home/categories/cat1.webp",
    title: "Exercise Bike & Shaver Clean",
    color: "#eff3ed",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat2.webp",
    title: "Wireless & Watches",
    color: "#fcded3",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat3.webp",
    title: "Camera Bluetooth & Headset",
    color: "#dff4d6",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat4.webp",
    title: "Ipad Phone & Tablets",
    color: "#f2e3f8",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat5.webp",
    title: "Planer & Virtual",
    color: "#dceff6",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat6.webp",
    title: "Spinning Reel & Kettle",
    color: "#f6e0ec",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat7.webp",
    title: "Computers Monitor & Laptop",
    color: "#dcf6e6",
    url: "/category/x",
  },
  {
    image: "/images/home/categories/cat4.webp",
    title: "Exercise Bike & Shaver Clean",
    color: "#dceff6",
    url: "/category/x",
  },
];

export default function Categories() {
  return (
    <div className="h-80 max-w-6xl mx-auto py-8 my-8">
      {/* @ts-ignore */}
      <swiper-container
        autoplay
        loop
        // @ts-ignore
        breakpoints={JSON.stringify({
          "0": { slidesPerView: 1 },
          "350": { slidesPerView: 2 },
          "720": { slidesPerView: 3 },
          "960": { slidesPerView: 4 },
        })}
      >
        {slides.map((slide, i) => {
          return (
            <swiper-slide key={"slide" + i}>
              <Link
                href={slide.url}
                className="grid grid-rows-[1fr,auto] gap-4 mx-4"
              >
                <div
                  className="h-full w-full p-8 border-black border"
                  style={{ backgroundColor: slide.color }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    height={200}
                    width={200}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h1 className="text-[#525258] font-semibold text-center">
                  {slide.title}
                </h1>
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}
