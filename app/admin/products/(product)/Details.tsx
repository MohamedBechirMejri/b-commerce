import type { Product } from "~/types/Product";

import Input from "../../(ui)/Input";
import Textarea from "../../(ui)/Textarea";
import Select from "../../(ui)/Select";

export default function Details({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  // an array of objects with the properties for each input field
  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "reference", label: "Reference", type: "text" },
    { id: "description", label: "Description", type: "textarea", rows: 4 },
    {
      id: "categories",
      label: "Categories",
      type: "select",
      multiple: true,
      options: [
        { value: "1", text: "Category 1" },
        { value: "2", text: "Category 2" },
        { value: "3", text: "Category 3" },
      ],
    },
    {
      id: "brand",
      label: "Brand",
      type: "select",
      options: [
        { value: "1", text: "Brand 1" },
        { value: "2", text: "Brand 2" },
        { value: "3", text: "Brand 3" },
      ],
    },
    { id: "published", label: "Published", type: "checkbox" },
  ];

  return (
    <div className="flex flex-col w-full min-h-full gap-4 p-8 mx-auto border rounded-md border-zinc-800 max-w-7xl">
      <h2 className="-mb-2 font-semibold text-slate-400">Details</h2>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Give your product a short and clear name. 50-60 characters is the
        recommended length for search engines.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type={"text"}
          label={"Name"}
          placeholder={"Jacket, Sunglasses..."}
          value={product.name}
          onChange={(e: { target: { value: any } }) =>
            setProduct({ ...product, name: e.target.value })
          }
          autoComplete="off"
          required
        />
        <Input
          type={"text"}
          label={"Reference"}
          placeholder={"Jacket-001, Sunglasses-001..."}
          value={product.reference}
          onChange={(e: { target: { value: any } }) =>
            setProduct({ ...product, reference: e.target.value })
          }
          autoComplete="off"
          required
        />
      </div>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Give your product a short and clear description. 120-160 characters is
        the recommended length for search engines.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Textarea
          type={"text"}
          label={"Name"}
          placeholder={"Jacket, Sunglasses..."}
          value={product.name}
          onChange={(e: { target: { value: any } }) =>
            setProduct({ ...product, name: e.target.value })
          }
          rows={10}
          required
        />
        <div className="grid grid-rows-3 gap-8">
          <Select
            label={"Categories"}
            options={[{ id: "1", name: "sdcsdc" }]}
            selected={product.categories}
            setSelected={categories => setProduct({ ...product, categories })}
            placeholder={"Search..."}
            required
          />
          <Input
            type={"text"}
            label={"Reference"}
            placeholder={"Jacket-001, Sunglasses-001..."}
            value={product.reference}
            onChange={(e: { target: { value: any } }) =>
              setProduct({ ...product, reference: e.target.value })
            }
            autoComplete="off"
            required
          />
          <Input
            type={"text"}
            label={"Reference"}
            placeholder={"Jacket-001, Sunglasses-001..."}
            value={product.reference}
            onChange={(e: { target: { value: any } }) =>
              setProduct({ ...product, reference: e.target.value })
            }
            autoComplete="off"
            required
          />
        </div>
      </div>
    </div>
  );
}
