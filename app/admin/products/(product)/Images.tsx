import { useState } from "react";

export default function Images() {
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([
    "https://picsum.photos/seed/1/300",
    "https://picsum.photos/seed/2/300",
    "https://picsum.photos/seed/3/300",
    "https://picsum.photos/seed/4/300",
    "https://picsum.photos/seed/5/300",
  ]);

  return (
    <div className="grid grid-cols-2 auto-rows-min">
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="images">
          Images
        </label>
        <input
          type="file"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="images"
          multiple
        />
      </div>

      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="images">
          Previews
        </label>
        <div className="flex flex-wrap mt-2">
          {previewImages.map(image => (
            <div className="w-1/3 p-2">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
