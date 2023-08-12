"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import { TiSocialYoutube } from "react-icons/ti";

const links = [
  {
    name: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Store Locations", href: "/stores" },
      { name: "Our Blog", href: "/blog" },
      { name: "Reviews", href: "/reviews" },
    ],
  },
  {
    name: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Warranty", href: "/warranty" },
    ],
  },
  {
    name: "Account",
    links: [
      { name: "My Account", href: "/account" },
      { name: "Order Tracking", href: "/order-tracking" },
      { name: "Wishlist", href: "/wishlist" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  return /admin|sign-(up|in)/.test(pathname) ? null : (
    <footer className="w-full max-w-7xl mx-auto sm:mt-24 pb-8 text-[#525258] p-4">
      <div className="grid sm:grid-cols-5 gap-8">
        <div className="flex flex-wrap items-start justify-start gap-4">
          <Link href={"/"} className="w-max block">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="h-14"
              priority
            />
          </Link>

          <p className="sm:pt-4 max-w-[12rem] leading-snug font-medium text-[#7d7f82]">
            The home and elements needed to create beautiful products.
          </p>

          <div className="flex gap-3 mt-4">
            <Link href="https://www.facebook.com/">
              <TfiFacebook />
            </Link>
            <Link href="https://www.twitter.com/">
              <TfiTwitterAlt />
            </Link>
            <Link href="https://www.linkedin.com/">
              <TfiLinkedin />
            </Link>
            <Link href="https://www.youtube.com/">
              <TiSocialYoutube />
            </Link>
          </div>
        </div>

        {links.map(link => (
          <div key={link.name}>
            <h5 className="font-bold text-xl">{link.name}</h5>
            <ul className="mt-8">
              {link.links.map(link => (
                <li key={link.name} className="mt-2">
                  <Link
                    href={link.href}
                    className="hover:text-[#f50963] transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="font-bold text-xl">Talk To Us</h5>
          <p className="tracking-wide mt-8">
            Find a location nearest you.
            <br />
            See{" "}
            <a href="/stores" className="text-[#f50963] underline">
              Our Stores
            </a>{" "}
          </p>
          <a
            href="phone:+6222446622"
            className="hover:underline pt-4 inline-block font-semibold text-xl"
          >
            +622 244 66 22
          </a>
          <br />
          <a
            href="mailto:bechir@mejri.dev"
            className="hover:underline pt-1 inline-block"
          >
            bechir@mejri.dev
          </a>
        </div>
      </div>

      <hr className="my-7 sm:mt-28" />

      <div className="flex justify-between flex-col gap-8 items-center p-4 text-center sm:flex-row">
        <p className="text-sm tracking-wide">
          Copyright © 2023 by{" "}
          <a
            href="https://mohamedbechirmejri.dev"
            target="_blank"
            className="text-[#f50963]"
          >
            MBM
          </a>{" "}
          <br className="sm:hidden" />
          All rights reserved.
        </p>
        <Image
          src={"/images/home/footer-payment.webp"}
          alt="footer payment"
          width={232}
          height={30}
        />
      </div>
    </footer>
  );
}
