"use client";

import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandTwitter,
  TbCircleFilled,
} from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="pb-4 pt-12 grid grid-cols-2 [place-items:_start_center;] px-4">
      <div>
        <h2 className="font-bold text-xl">Help & Advice</h2>
        <ul className="pt-2">
          <li className="py-2 flex items-center gap-2">
            <TbCircleFilled className="text-gray-300" />
            <Link href={"/about"} className="hover:underline">
              About
            </Link>
          </li>
          <li className="py-2 flex items-center gap-2">
            <TbCircleFilled className="text-gray-300" />
            <Link href={"/toc"} className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
          <li className="py-2 flex items-center gap-2">
            <TbCircleFilled className="text-gray-300" />
            <Link href={"/privacy"} className="hover:underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-xl">Contact Us</h2>
        <h3 className="font-semibold pt-2">Follow us on:</h3>
        <div className="py-2 flex items-center gap-2 text-2xl">
          <Link href={"/"}>
            <TbBrandFacebook />
          </Link>
          <Link href={"/"}>
            <TbBrandInstagram />
          </Link>
          <Link href={"/"}>
            <TbBrandTiktok />
          </Link>
          <Link href={"/"}>
            <TbBrandTwitter />
          </Link>
        </div>
        <h3 className="font-semibold pt-2">Newsletter</h3>
        <form className="flex pt-2">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 p-2 w-full outline-none focus:border-yellow-600 transition-all text-yellow-600 font-semibold"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white font-semibold p-2 -ml-2"
          >
            Subscribe
          </button>
        </form>
        <h4 className="font-medium pt-2 text-sm text-gray-600 max-w-[95%]">
          Subscribe to our Newsletter and access the best offers of the moment
        </h4>
      </div>

      <hr className="w-full col-span-2 h-[2px] bg-yellow-600 mt-8" />

      <p className="col-span-2 text-center text-gray-500 pt-4">
        © {new Date().getFullYear()} - All rights reserved
      </p>
    </footer>
  );
}
