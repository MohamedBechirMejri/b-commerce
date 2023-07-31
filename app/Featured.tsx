import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

export default function Featured() {
  return (
    <section
      className="bg-[#f0f2ed] w-screen max-w-7xl h-[28.75rem] mt-32 mx-auto p-24"
      style={{
        backgroundImage: "url('/images/home/featured-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-start items-start">
        <p className="text-sm font-medium">Apple iPhone 12 Pro</p>
        <h1 className="text-5xl font-bold max-w-[32rem] mt-4">
          The wait is on: iphone 12 max pro
        </h1>
        <p className="font-medium mt-4">
          Last call for up to{" "}
          <strong className="text-xl text-[#f50963]">32%</strong> off!
        </p>

        <Link
          href="/products"
          className="bg-white text-black px-5 py-3 font-semibold hover:bg-[#00000000] transition-all duration-300 shadow hover:bg-black mt-7 flex items-center gap-1 text-sm hover:text-white"
        >
          Buy Now <TbArrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
