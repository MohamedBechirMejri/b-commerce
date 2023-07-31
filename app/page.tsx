import dynamic from "next/dynamic";

import Hero from "./Hero";
import Products from "./(Products)";
import Coupons from "./Coupons";
import Featured from "./Featured";
import Services from "./Services";
import SubscriptionForm from "./SubsciptionForm";

const Categories = dynamic(() => import("./Categories"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
      <Coupons />
      <Featured />
      <Services />
      <SubscriptionForm />
    </main>
  );
}
