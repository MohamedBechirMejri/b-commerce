import Link from "next/link";

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
    </section>
  );
}
