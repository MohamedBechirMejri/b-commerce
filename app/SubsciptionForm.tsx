import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

export default function SubscriptionForm() {
  return (
    <section
      className="bg-[#f0f2ed] w-screen p-[3.25rem]"
      style={{
        backgroundImage: "url('/images/home/sub-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl bg-white p-[3.25rem] grid grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold max-w-[32rem]">
            Subscribe to our newsletter
          </h1>
          <p className="font-medium">
            Get updates on our latest products and promotions
          </p>
        </div>

        <div className="flex relative">
          <input
            type="email"
            className="border w-full h-full outline-none px-4 pr-[8.5rem]"
            placeholder="Enter your email address"
          />

          <button className=" text-white px-5 py-3 font-semibold transition-all duration-300 bg-black flex items-center gap-1 text-sm absolute right-2 top-1/2 -translate-y-1/2 hover:bg-[#f50963]">
            Subscribe <TbArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
