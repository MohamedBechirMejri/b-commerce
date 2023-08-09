import Image from "next/image";
import Team from "./Team";
import SubscriptionForm from "../SubsciptionForm";

export default function About() {
  return (
    <div className="py-12">
      <h1 className="font-semibold text-2xl text-center pill">
        Welcome to our Shop!
      </h1>

      <div className="flex flex-col gap-4 px-4 mt-16 sm:flex-row max-w-6xl mx-auto">
        <div>
          <h2 className="font-semibold text-xl sm:text-3xl text-[#f50963]">
            Our Story
          </h2>
          <p className="mt-2 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
            voluptates quas doloribus. Quisquam voluptatibus, quibusdam, quia,
            quos.
          </p>
        </div>
        <Image
          src="https://source.unsplash.com/random/700x500"
          alt="random image"
          width={700}
          height={500}
          className="rounded-tr-3xl rounded-bl-3xl"
        />
      </div>

      <h2 className="px-4 font-semibold text-xl sm:text-3xl text-[#f50963] mt-16 max-w-6xl mx-auto">
        The Team
      </h2>
      <Team />

      <SubscriptionForm />
    </div>
  );
}
