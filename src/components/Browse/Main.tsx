import { type Product } from "@prisma/client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main className="grid min-h-full gap-4 overflow-y-scroll p-4 scrollbar-none xl:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative h-[24rem] overflow-hidden border border-current bg-cover bg-center"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        >
          <div className="absolute bottom-0 w-full translate-y-full bg-white bg-opacity-30 backdrop-blur-3xl transition-all group-hover:translate-y-0">
            <div className="flex justify-between p-4">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4">
              <button className="rounded-md bg-black p-2 text-white">
                Add to cart
              </button>
              <button className="rounded-md bg-black p-2 text-white">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
