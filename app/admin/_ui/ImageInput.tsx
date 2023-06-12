import { motion } from "framer-motion";
import { TbPlus } from "react-icons/tb";

export default function ImageInput({
  setPreviews,
  ...props
}: {
  setPreviews: any;
}) {
  // display new previews in File form and upload them after user confirms
  const handleChange = (e: any) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files).filter((_, i) => i < 10);
    const fileUrlArray = fileArray.map((file: any) =>
      URL.createObjectURL(file)
    );

    setPreviews(
      (previews: {
        new: {
          raw: File[];
          preview: string[];
        };
      }) => ({
        ...previews,
        new: {
          raw: [...previews.new.raw, ...fileArray],
          preview: [...previews.new.preview, ...fileUrlArray],
        },
      })
    );
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-md p-8 shadow-sm"
      initial={{ border: "1px dashed #303030" }}
      whileHover={{ border: "1px dashed #6d28d9" }}
    >
      <div className="flex flex-col items-center text-gray-400 text-center gap-2">
        <TbPlus className="font-bold text-5xl" />
        <p>
          <span className="text-violet-300">click to browse images</span>
        </p>
        up to 10MB each
      </div>

      <motion.input
        className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        max={10}
        {...props}
      />
    </motion.div>
  );
}
