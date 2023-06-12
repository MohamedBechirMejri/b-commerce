import type { Product } from "~/types/Product";

import { ImageInput } from "../../_ui/index";
import { useState } from "react";
import Image from "next/image";

export default function Images({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  const [previews, setPreviews] = useState({
    old: product.images || [], // loaded from db
    new: {
      raw: [],
      preview: [],
    }, // uploaded by user
  });

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8">
      <h2 className="-mb-2 font-semibold text-slate-400">Images</h2>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Add up to 10 images to your product
      </p>
      <div className="grid grid-cols-4 gap-4 mt-2 rounded-md border border-zinc-800 p-8">
        {previews.old?.map(image => (
          <div key={image} className="">
            <Image
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-md"
              width={100}
              height={100}
            />
          </div>
        ))}
        {previews.new.preview?.map(image => (
          <div key={image} className="">
            <Image
              src={image}
              alt=""
              className="h-full w-full object-cover rounded-md"
              width={100}
              height={100}
            />
          </div>
        ))}
        {previews.old?.length + previews.new?.preview.length <= 10 && (
          <ImageInput setPreviews={setPreviews} />
        )}
      </div>
    </div>
  );
}
