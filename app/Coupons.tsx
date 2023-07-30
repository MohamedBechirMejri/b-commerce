import Link from "next/link";

const coupons = [
  {
    image: "/images/home/categories/cat1.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: Date.now(),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat2.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: Date.now(),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat3.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: Date.now(),
    code: "AUG50",
    status: "active",
  },
  {
    image: "/images/home/categories/cat4.webp",
    title: "August Gift Voucher",
    subtitle: "50%",
    note: "Valid till 31st August",
    endDate: Date.now(),
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

      <div className="grid grid-cols-2 grid-rows-2 p-4 gap-6">
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
        <div className="font-semibold flex flex-col gap-1 py-2">
          <h1>{voucher.title}</h1>
          <p>
            <span className="text-[#f50963]">{voucher.subtitle}</span> Off
          </p>{" "}
          <p className="text-sm text-[#727275]">
            Valid till{" "}
            {new Date(voucher.endDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="voucher-border" />

      <div className="flex flex-col justify-center items-center gap-4 border p-4 px-6 border-l-0">
        <p className="text-sm text-[#727275]">Coupon: {voucher.status}</p>

        <button className="border-2 border-dashed p-1 px-8 border-teal-500 font-semibold text-teal-600 bg-teal-100 bg-opacity-50 tracking-widest">
          {voucher.code}
        </button>
      </div>
    </div>
  );
};
