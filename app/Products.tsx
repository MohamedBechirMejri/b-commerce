"use client";

import { useState } from "react";

export default function Products() {
  const [tab, setTab] = useState("top-rated");

  return (
    <section className="max-w-7xl mx-auto mt-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl pl-4 border-l-[3px] border-[#f50963]">
          Products Products
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
    </section>
  );
}
