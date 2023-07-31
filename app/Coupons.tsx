"use client";

import Link from "next/link";
import Countdown from "react-countdown";
import { TbInfoSquareRounded } from "react-icons/tb";

const coupons = [
  {
    image: "/images/home/categories/cat1.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: new Date("2024-08-31T00:00:00"),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat2.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: new Date("2023-08-31T00:00:00"),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat3.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: new Date("2023-08-31T00:00:00"),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat4.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: new Date("2024-08-31T00:00:00"),
    code: "AUG50",
    status: "active",
  },
];

export default function Coupons() {
  return (
    <section className="max-w-7xl mx-auto mt-28">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl pl-4 border-l-[3px] border-[#f50963]">
          Deals of The Day
        </h1>

        <Link
          href="/products"
          className="bg-[#f50963] text-white px-6 py-[11px] font-semibold hover:bg-[#00000000] transition-all duration-300 border border-current hover:text-[#f50963]"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 p-4 pt-8 gap-6">
        {coupons.map((voucher, i) => {
          return <Voucher key={"voucher#" + i} voucher={voucher} />;
        })}
      </div>
    </section>
  );
}

const Voucher = ({ voucher }: { voucher: (typeof coupons)[0] }) => {
  return (
    <div className="grid grid-cols-[2fr,2px,1fr] overflow-hidden">
      <div className="flex gap-4 border p-4 border-r-0">
        <div className="w-[7rem] h-[7rem] bg-[#f6f8fa] rounded-lg relative">
          <img
            src={voucher.image}
            alt={voucher.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-semibold flex flex-col gap-1 py-2 justify-between">
          <h1>{voucher.title}</h1>
          <p>
            <span className="text-[#f50963]">{voucher.subtitle}</span> Off
          </p>{" "}
          <p className="text-sm text-[#727275]">
            <Countdown
              date={voucher.endDate}
              autoStart
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 font-normal text-xs gap-2">
                  <p className="flex flex-col items-start">
                    <span>{days}</span>
                    <span>DAYS</span>
                  </p>
                  <p className="flex flex-col items-start">
                    <span>{hours}</span>
                    <span>HRS</span>
                  </p>
                  <p className="flex flex-col items-start">
                    <span>{minutes}</span>
                    <span>MIN</span>
                  </p>
                  <p className="flex flex-col items-start">
                    <span>{seconds}</span>
                    <span>SEC</span>
                  </p>
                </div>
              )}
            />
          </p>
        </div>
      </div>

      <div className="voucher-border" />

      <div className="flex flex-col justify-center items-center gap-4 border p-4 px-6 border-l-0">
        <div className="text-sm text-[#727275] capitalize flex items-center gap-2">
          <span> Status: {voucher.status}</span>

          <div className="group relative">
            <TbInfoSquareRounded className="hover:text-[#585858] cursor-help" />
            <Tooltip>{voucher.note}</Tooltip>
          </div>
        </div>

        <button
          className="border-2 border-dashed p-1 px-8 border-teal-500 font-semibold text-teal-600 bg-teal-100 bg-opacity-50 tracking-widest"
          onClick={e => {
            navigator.clipboard.writeText(voucher.code);

            // @ts-ignore
            e.target.innerText = "Copied!";

            setTimeout(() => {
              // @ts-ignore
              e.target.innerText = voucher.code;
            }, 1000);
          }}
        >
          {voucher.code}
        </button>
      </div>
    </div>
  );
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute right-4 -top-2 bg-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 w-52 pointer-events-none shadow-lg group-hover:-translate-x-2 p-1 px-2 border">
      {children}
      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[7.5px] border-b-[5px] border-b-transparent absolute border-[#d3d3d3] shadow-sm left-full top-2" />
    </div>
  );
};
