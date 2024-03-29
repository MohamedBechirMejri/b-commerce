"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { IoArrowBackOutline } from "react-icons/io5";

import Nav from "./(product)/Nav";
import useTabSwitcher from "~/lib/hooks/useTabSwitcher";
import { ZProduct } from "~/types";

const Details = dynamic(() => import("./(product)/Details"));
const Pricing = dynamic(() => import("./(product)/Pricing"));
const Images = dynamic(() => import("./(product)/Images"));
// const Variants = dynamic(() => import("./(product)/Variants"));
const Inventory = dynamic(() => import("./(product)/Inventory"));
const Shipping = dynamic(() => import("./(product)/Shipping"));
const SEO = dynamic(() => import("./(product)/SEO"));
const Related = dynamic(() => import("./(product)/Related"));
const Collections = dynamic(() => import("./(product)/Collections"));
const Reviews = dynamic(() => import("./(product)/Reviews"));
const Activity = dynamic(() => import("./(product)/Activity"));

// An object to store the components for each tab
const tabComponents = {
  details: Details,
  pricing: Pricing,
  images: Images,
  // variants: Variants,
  inventory: Inventory,
  shipping: Shipping,
  seo: SEO,
  related: Related,
  collections: Collections,
  reviews: Reviews,
  activity: Activity,
};

export default function ({ id }: { id?: string }) {
  // Use the custom hook to handle the state and logic of switching tabs
  const { currentTab, product, setProduct, switchTab } = useTabSwitcher(id);

  // @ts-ignore
  const Tab = tabComponents[currentTab];

  const router = useRouter();

  return (
    <div className="grid h-full grid-rows-[auto,auto,1fr]">
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          href="/admin/products"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          <IoArrowBackOutline />
          <span>Back</span>
        </Link>
        <h1 className="text-2xl font-bold">{product.name || "New Product"}</h1>
        <button
          className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-300"
          onClick={() => submitProduct(product, router, id)}
        >
          <span>Save</span>
        </button>
      </div>
      <Nav currentTab={currentTab} switchTab={switchTab} />
      <div className="p-4">
        {<Tab product={product} setProduct={setProduct} />}
      </div>
    </div>
  );
}

const submitProduct = async (product: any, router: any, id?: string) => {
  product = {
    ...product,
    images: JSON.stringify(product.images),
  };

  const z = ZProduct.safeParse(product);
  if (!z.success) return console.log(z.error);

  const res = await (id
    ? axios.post(`/api/products/${id}`, product)
    : axios.post("/api/products", product));

  return router.push(`/admin/products/`);
};
