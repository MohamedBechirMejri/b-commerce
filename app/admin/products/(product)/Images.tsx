import type { Product } from "~/types/Product";

import { ImageInput } from "../../(ui)/index";
import { useEffect, useState } from "react";

export default function Images({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  useEffect(() => {
    console.log(product.images);
  }, [product.images]);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8">
      <h2 className="-mb-2 font-semibold text-slate-400">Images</h2>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Add up to 10 images to your product
      </p>
      <div className="grid grid-cols-1 gap-4">
        <ImageInput
          setImages={(images: string[]) => {
            setProduct({ ...product, images });
          }}
        />

        <div className="mt-2 flex flex-wrap rounded-md border border-zinc-800 p-8">
          {product.images?.map(image => (
            <div key={image} className="w-1/3 p-2">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
