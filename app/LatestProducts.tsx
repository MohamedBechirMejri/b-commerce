"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LatestProducts() {
  const [products, setProducts] = useState<any[]>([]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      // slidesToScroll: 2
    },
    [Autoplay({ delay: 5000 }), WheelGesturesPlugin()]
  );

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/products?latest=true")
        .then(res => res.json())
        .then(res =>
          res.data.map((product: { images: string }) => ({
            ...product,
            image: JSON.parse(product.images)[0],
          }))
        )
        .then(data => (data.length < 10 ? [...data, ...data] : data)) // duplicate data if less than 10
        .then(data => setProducts(data));
    }
    fetchData();
  }, []);

  return (
    <section className="mx-auto py-8 w-ful flex flex-col items-center overflow-hidden">
      <h1 className="font-bold text-3xl">Fresh Products</h1>
      <p className="text-lg text-opacity-70">Our Latest Additions</p>

      <div className="embla relative overflow-hidden py-8" ref={emblaRef}>
        <div className="embla__container flex gap-8 pl-8">
          {products.map(product => (
            <div
              className="embla__slide min-w-0 xl:flex-[0_0_25%] md:flex-[0_0_50%] flex-[0_0_100%] h-[32rem] max-w-[min(90svw,20rem)] w -[20rem] shadow border group overflow-hidden relative"
              key={"productid" + product.id}
            >
              <Image
                src={product.image || "https://via.placeholder.com/2000"}
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
