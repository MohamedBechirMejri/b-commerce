"use client";

import { TbCreditCard, TbMoodHappy, TbTruckDelivery } from "react-icons/tb";

export default function Services() {
  return (
    <section className="mx-auto py-8 w-ful flex flex-col items-center overflow-hidden bg-yellow-600 text-white gap-8">
      <h1 className="font-bold text-3xl">Our Services and Garantees</h1>

      <div className="flex gap-8 text-4xl text-center font-semibold">
        <div className="flex flex-col items-center gap-2">
          <TbTruckDelivery />
          <p className="text-sm">Deliveries in 48h</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbMoodHappy />
          <p className="text-sm">
            Your satisfaction is
            <br />
            our Goal!
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbCreditCard />
          <p className="text-sm">Secure payments</p>
        </div>
      </div>
    </section>
  );
}
