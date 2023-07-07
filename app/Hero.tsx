"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { id: 1, src: "https://picsum.photos/4000/2000", alt: "Honey" },
  { id: 2, src: "https://picsum.photos/2200/1100", alt: "Harissa" },
  { id: 3, src: "https://picsum.photos/3000/1500", alt: "Olive Oil" },
];

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
    WheelGesturesPlugin(),
  ]);

  return (
    <section className="px-8 p-2">
      <div
        className="embla overflow-hidden relative max-w-6xl mx-auto"
        ref={emblaRef}
      >
        <div className="embla__container flex h-[calc(70svh-5rem)]">
          {slides.map(slide => (
            <div
              className="embla__slide min-w-0 flex-[0_0_100%]"
              key={"slideid" + slide.id}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={4000}
                height={2000}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black text-white font-bold text-2xl flex items-end">
          <div className="flex p-8 justify-between w-full max-w-7xl mx-auto">
            <div>
              <h1>B-Commerce</h1>
              <p className="text-lg font-medium text-opacity-70">
                The best products in one place
              </p>
            </div>

            <Link href={"/products"}>
              <button className="bg-white text-black px-4 py-2 mt-4 text-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
