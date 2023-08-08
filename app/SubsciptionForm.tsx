import { TbArrowRight } from "react-icons/tb";

export default function SubscriptionForm() {
  return (
    <section
      className="bg-[#f0f2ed] w-full sm:p-[3.25rem] p-4"
      style={{
        backgroundImage: "url('/images/home/sub-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl bg-white p-6 sm:p-[3.25rem] flex flex-col gap-4 sm:grid grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-sm sm:text-4xl font-bold sm:max-w-[32rem]">
            Subscribe to our newsletter
          </h1>
          <p className="font-medium text-xs sm:text-base opacity-70">
            Get updates on our latest products and promotions
          </p>
        </div>

        <div className="flex relative flex-col gap-2">
          <input
            type="email"
            className="border w-full sm:h-full h-12 outline-none px-4 sm:pr-[8.5rem]"
            placeholder="Enter your email address"
          />

          <button className="justify-center text-white px-5 py-3 font-semibold transition-all duration-300 bg-black flex items-center gap-1 text-sm sm:absolute right-2 top-1/2 sm:-translate-y-1/2 hover:bg-[#f50963]">
            Subscribe <TbArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
