import { motion } from "framer-motion";

import { useUploadThing } from "~/lib/hooks/useUploadThing";

export default function ImageInput({
  setImages,
  ...props
}: {
  setImages: (images: string[]) => void;
}) {
  const { startUpload } = useUploadThing({
    endpoint: "imageUploader",
    onClientUploadComplete: res => {
      console.log(res);
      if (res) setImages(res?.map(r => r.fileUrl));
    },
    onUploadError: err => {
      console.log(err);
      alert("error occurred while uploading");
    },
  });

  return (
    <motion.div
      className="relative overflow-hidden rounded-md p-8 shadow-sm"
      initial={{ border: "1px dashed #303030" }}
      whileHover={{ border: "1px dashed #6d28d9" }}
    >
      <div className="flex flex-col items-center text-gray-400">
        <p>
          Drop your images here, or{" "}
          <span className="text-violet-300">click to browse</span>
        </p>
        1200 x 1600 (3:4) recommended, up to 10MB each
      </div>

      <motion.input
        className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
        type="file"
        accept="image/*"
        multiple
        onChange={e => {
          const files = e.target.files;
          if (!files) return;

          const fileArray = Array.from(files);

          startUpload(fileArray);
        }}
        {...props}
      />
    </motion.div>
  );
}
