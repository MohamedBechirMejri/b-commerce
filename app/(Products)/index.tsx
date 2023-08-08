"use client";

import { useEffect, useState } from "react";
import useProducts from "~/lib/hooks/useProducts";
import Product from "./Product";
import ProductQuickView from "./ProductQuickView";
import type { Product as ProductType } from "~/types";
import { AnimatePresence } from "framer-motion";

export default function Products() {
  const [tab, setTab] = useState("latest");
  const [quickView, setQuickView] = useState<null | ProductType>(null);
  const products = useProducts({
    latest: true,
    limit: 12,
  });

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
  }, [products, quickView]);

  return (
    <section className="max-w-7xl mx-auto mt-8 p-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="font-bold text-3xl pl-4 border-l-[3px] border-[#f50963]">
          Products
        </h1>

        <nav className="flex gap-8 font-medium text-[#727275]">
          <button
            className={`hover:text-[#f50963] transition-all duration-300 animated-underline ${
              tab === "top-rated" ? "text-[#f50963] active" : ""
            }`}
            onClick={() => setTab("top-rated")}
          >
            Top Rated
          </button>
          <button
            className={`hover:text-[#f50963] transition-all duration-300 animated-underline ${
              tab === "best-selling" ? "text-[#f50963] active" : ""
            }`}
            onClick={() => setTab("best-selling")}
          >
            Best Selling
          </button>
          <button
            className={`hover:text-[#f50963] transition-all duration-300 animated-underline ${
              tab === "latest" ? "text-[#f50963] active" : ""
            }`}
            onClick={() => setTab("latest")}
          >
            Latest Products
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8 place-items-center">
        {products.map((product, i) => {
          return (
            <Product
              key={"home_product#" + i}
              product={product}
              i={i}
              setQuickView={setQuickView}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {quickView && (
          <ProductQuickView product={quickView} setQuickView={setQuickView} />
        )}
      </AnimatePresence>
    </section>
  );
}
