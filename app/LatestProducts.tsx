"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Link from "next/link";
import Image from "next/image";

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
    [Autoplay({ delay: 5000 }), WheelGesturesPlugin()]
  );

  return (
    <section className="mx-auto py-8 w-ful flex flex-col items-center overflow-hidden">
      <h1 className="font-bold text-3xl">Fresh Products</h1>
      <p className="text-lg text-opacity-70">Our Latest Additions</p>

      <div className="embla relative overflow-hidden py-8" ref={emblaRef}>
        <div className="embla__container flex gap-8 pl-8">
          {products.map(product => (
            <div
              className="embla__slide min-w-0 xl:flex-[0_0_25%] md:flex-[0_0_50%] flex-[0_0_100%] h-[32rem] max-w-[min(90svw,20rem)] shadow border group transition-all overflow-hidden relative"
              key={"productid" + product.id}
            >
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover object-center h-full"
                width={4000}
                height={2000}
              />

              <div className="flex flex-col gap-2 group-hover:bg-black group-hover:text-white absolute bottom-0 left-0 w-full translate-y-[4rem] group-hover:translate-y-0 transition-all bg-white text-black duration-300">
                <div className="flex p-4 justify-between">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-lg text-opacity-70">${product.price}</p>
                </div>
                <div className="flex items-center justify-center gap-2 pb-4">
                  <Link href={`/products/${product.id}`}>
                    <button className="bg-white text-black px-4 py-2 text-lg w-full">
                      View Product
                    </button>
                  </Link>
                  <button className="bg-white text-black px-4 py-2 text-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
