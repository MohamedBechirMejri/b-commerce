"use client";

import Link from "next/link";

import { register } from "swiper/element/bundle";

register();

const slides = [
  {
    name: "John Doe",
    title: "CEO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "John Doe",
    title: "CEO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "John Doe",
    title: "CEO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "John Doe",
    title: "CEO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image: "https://source.unsplash.com/random/200x300",
    url: "https://linkedin.com",
  },
];

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto mt-4 mb-16">
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
                target="_blank"
                className="grid grid-rows-[1fr,auto] gap-2 mx-4"
              >
                <div className="h-full w-full border-black border">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    height={300}
                    width={200}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-[#525258] text-center ">
                  <h1 className="font-medium">{slide.name}</h1>
                  <p className="text-sm">{slide.title}</p>
                </div>
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}
