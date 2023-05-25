"use client";

import dynamic from "next/dynamic";

import Nav from "./(product)/Nav";
import useTabSwitcher from "~/lib/hooks/useTabSwitcher";

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

export default function () {
  // Use the custom hook to handle the state and logic of switching tabs
  const { currentTab, product, setProduct, switchTab } = useTabSwitcher();

  // @ts-ignore
  const Tab = tabComponents[currentTab];

  return (
    <div className="h-full grid grid-rows-[auto,1fr]">
      <Nav currentTab={currentTab} switchTab={switchTab} />
      {/* Use the object to render the component for the current tab */}
      {<Tab product={product} setProduct={setProduct} />}
    </div>
  );
}
