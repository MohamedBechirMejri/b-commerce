import {
  TbTruckDelivery,
  TbCoin,
  TbMessageStar,
  TbCreditCard,
} from "react-icons/tb";

const servies = [
  {
    title: "Free Shipping",
    description: "Free Shipping for orders \n over $120",
    icon: "TbTruckDelivery",
  },
  {
    title: "Refund",
    description: "Within 30 days for an \n exchange.",
    icon: "TbCoin",
  },
  {
    title: "Support",
    description: "24 hours a day, 7 days \n a week",
    icon: "TbMessageStar",
  },
  {
    title: "Payment",
    description: "Pay with Multiple Credit Cards \n or Cash on Delivery",
    icon: "TbCreditCard",
  },
];

const icons = {
  TbTruckDelivery: <TbTruckDelivery />,
  TbCoin: <TbCoin />,
  TbMessageStar: <TbMessageStar />,
  TbCreditCard: <TbCreditCard />,
} as any;

export default function Featured() {
  return (
    <section className="w-screen max-w-7xl my-[4.25rem] mx-auto flex justify-between">
      {servies.map((service, i) => (
        <div
          key={"service#" + i}
          className="flex justify-center items-center gap-4"
        >
          <div className="bg-white rounded-full border p-4 text-2xl text-gray-700">
            {icons[service.icon]}
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-lg text-center tracking-wide">
              {service.title}
            </h1>
            <p className="text-sm w-3/4 text-gray-500">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
