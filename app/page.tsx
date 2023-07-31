import dynamic from "next/dynamic";

import Hero from "./Hero";
import Products from "./(Products)";
import Coupons from "./Coupons";
import Featured from "./Featured";
import Services from "./Services";

const Categories = dynamic(() => import("./Categories"), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <Products />
      <Coupons />
      <Featured />
      <Services />
      <div className="h-screen"></div> {/* TODO: remove this */}
    </main>
  );
}
