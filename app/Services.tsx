"use client";

import { TbCreditCard, TbMoodHappy, TbTruckDelivery } from "react-icons/tb";

export default function Services() {
  return (
    <section className="mx-auto py-8 w-ful flex flex-col items-center overflow-hidden bg-yellow-600 text-white">
      <h1 className="font-bold text-3xl">Our Services and Garantees</h1>
      <p className="text-lg text-opacity-70">Our Latest Additions</p>

      <div className="pt-12 flex gap-8 text-5xl text-center font-semibold">
        <div className="flex flex-col items-center gap-4">
          <TbTruckDelivery />
          <p className="text-lg">
            Deliveries in 48h <br /> (in France)
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <TbMoodHappy />
          <p className="text-lg">
            Your satisfaction
            <br />
            is our goal
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <TbCreditCard />
          <p className="text-lg">Secure payments</p>
        </div>
      </div>
    </section>
  );
}
