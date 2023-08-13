"use client";

import { useState } from "react";
import { TbLayoutGrid, TbListDetails } from "react-icons/tb";

import BreadCrumbs from "./BreadCrumbs";
import Sorting from "./Sorting";

export default function Products() {
  const [sorting, setSorting] = useState({
    id: "price_ascending",
    name: "Price: Low to High",
  });
  const [view, setView] = useState("grid");

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
    </div>
  );
}
