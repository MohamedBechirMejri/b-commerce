import type { Product } from "~/types/Product";

import { useEffect, useState } from "react";
import Image from "next/image";

import { ImageInput } from "../../_ui/index";
import { useUploadThing } from "~/lib/hooks/useUploadThing";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing({
    endpoint: "imageUploader",
    onClientUploadComplete: res => {
      if (res) {
        setIsUploading(false);
        setProduct(product => ({
          ...product,
          images: [...(product.images || []), ...res?.map(r => r.fileUrl)],
        }));
      }
    },
    onUploadError: err => {
      console.log(err);
      alert("error occurred while uploading");
      setIsUploading(false);
    },
  });

  useEffect(() => {
    setPreviews({ old: product.images || [], new: { raw: [], preview: [] } });
  }, [product.images]);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8 pt-6">
      <AnimatePresence>
        {isUploading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900 bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-zinc-800 rounded-md p-8"
            >
              <h2 className="font-semibold text-slate-400">Uploading...</h2>
              <p className="text-xs leading-4 text-zinc-500">
                Please wait while we upload your images
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-slate-400">Images</h2>
          <p className="max-w-sm text-xs leading-4 text-zinc-500">
            Add up to 10 images to your product
          </p>
        </div>
        <button
          className="rounded-md p-2 bg-violet-700"
          onClick={() => {
            setIsUploading(true);
            startUpload(
              previews.new.raw.filter(
                // max 10 images
                (_, i) => previews.old.length + i < 10
              )
            );
          }}
        >
          Upload Images
        </button>
      </div>

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
