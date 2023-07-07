"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Link from "next/link";

const products = [
  { id: 1, name: "Honey", price: 10, image: "https://picsum.photos/4000/2000" },
  {
    id: 2,
    name: "Harissa",
    price: 20,
    image: "https://picsum.photos/2200/1100",
  },
  {
    id: 3,
    name: "Olive Oil",
    price: 30,
    image: "https://picsum.photos/3000/1500",
  },
  { id: 4, name: "Honey", price: 10, image: "https://picsum.photos/4000/2000" },
  {
    id: 5,
    name: "Harissa",
    price: 20,
    image: "https://picsum.photos/2200/1100",
  },
  {
    id: 6,
    name: "Olive Oil",
    price: 30,
    image: "https://picsum.photos/3000/1500",
  },
  { id: 7, name: "Honey", price: 10, image: "https://picsum.photos/4000/2000" },
  {
    id: 8,
    name: "Harissa",
    price: 20,
    image: "https://picsum.photos/2200/1100",
  },
  {
    id: 9,
    name: "Olive Oil",
    price: 30,
    image: "https://picsum.photos/3000/1500",
  },
  {
    id: 10,
    name: "Honey",
    price: 10,
    image: "https://picsum.photos/4000/2000",
  },
];

export default function LatestProducts() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      // slidesToScroll: 2
    },
    [Autoplay({ delay: 7000 }), WheelGesturesPlugin()]
  );

  return (
    <div className="mx-auto py-8 w-ful flex flex-col items-center">
      <h1 className="font-bold text-3xl">Fresh Products</h1>
      <p className="text-lg text-opacity-70">Our Latest Additions</p>

      <div className="embla relative overflow-hidden py-8" ref={emblaRef}>
        <div className="embla__container flex">
          {products.map(product => (
            <div
              className="embla__slide min-w-0 xl:flex-[0_0_25%] md:flex-[0_0_50%] flex-[0_0_100%] h-[32rem] p-4"
              key={"productid" + product.id}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
