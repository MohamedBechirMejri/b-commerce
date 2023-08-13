"use client";

import type { Product as ProductType } from "~/types";

import { useState } from "react";
import { TbLayoutGrid, TbListDetails } from "react-icons/tb";

import BreadCrumbs from "./BreadCrumbs";
import Sorting from "./Sorting";
import useProducts from "~/lib/hooks/useProducts";
import Product from "../(Products)/Product";

export default function Products() {
  const [sorting, setSorting] = useState({
    id: "price_ascending",
    name: "Price: Low to High",
  });
  const [view, setView] = useState("grid");
  const [quickView, setQuickView] = useState<null | ProductType>(null);
  const products = useProducts({ limit: 999999 });

  return (
    <div className="max-w-7xl mx-auto ">
      <BreadCrumbs />

      <div className="border flex justify-between items-center text-gray-500 px-5">
        <div className="flex gap-2 items-center py-5">
          Showing 1-9 of 27 results
        </div>

        <div className="flex gap-4 items-center text-2xl">
          <button
            className={
              (view === "grid" ? "text-[#f50963]" : "") +
              " transition-all duration-300"
            }
            onClick={() => setView("grid")}
          >
            <TbLayoutGrid />
          </button>
          <button
            className={
              (view === "list" ? "text-[#f50963]" : "") +
              " transition-all duration-300"
            }
            onClick={() => setView("list")}
          >
            <TbListDetails />
          </button>

          <Sorting sorting={sorting} setSorting={setSorting} />
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] mt-8 gap-4">
        <div className="w-72 border"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {products.map((product: ProductType, i: number) => {
            return (
              <Product
                key={"browse_product#" + i}
                product={product}
                i={i}
                setQuickView={setQuickView}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
