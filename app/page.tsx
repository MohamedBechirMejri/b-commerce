import dynamic from "next/dynamic";

const Categories = dynamic(() => import("./Categories"), { ssr: false });

import Hero from "./Hero";
import Products from "./Products";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Categories />
      <Products />
      <div className="h-screen"></div> {/* TODO: remove this */}
    </main>
  );
}
