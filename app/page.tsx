import dynamic from "next/dynamic";

import Hero from "./Hero";
import Products from "./(Products)";
import Coupons from "./Coupons";

const Categories = dynamic(() => import("./Categories"), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <Products />
      <Coupons />
      <div className="h-screen"></div> {/* TODO: remove this */}
    </main>
  );
}
