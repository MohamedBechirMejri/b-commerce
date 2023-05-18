"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import Nav from "./(product)/Nav";

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

export default function () {
  const [currentTab, setCurrentTab] = useState("details");

  return (
    <div className="h-full grid grid-rows-[auto,1fr]">
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "details" ? (
        <Details />
      ) : currentTab === "pricing" ? (
        <Pricing />
      ) : currentTab === "images" ? (
        <Images />
      ) : // ) : currentTab === "variants" ? (
      // <Variants />
      currentTab === "inventory" ? (
        <Inventory />
      ) : currentTab === "shipping" ? (
        <Shipping />
      ) : currentTab === "seo" ? (
        <SEO />
      ) : currentTab === "related" ? (
        <Related />
      ) : currentTab === "collections" ? (
        <Collections />
      ) : currentTab === "reviews" ? (
        <Reviews />
      ) : currentTab === "activity" ? (
        <Activity />
      ) : (
        <div></div>
      )}
    </div>
  );
}
