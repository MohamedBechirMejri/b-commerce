import type { Product } from "~/types/Product";

import useCategories from "~/lib/hooks/useCategories";
import useBrands from "~/lib/hooks/useBrands";
import {
  Input,
  Textarea,
  Select,
  SelectMultiple,
  Tags,
  Toggle,
} from "../../_ui/index";

export default function Details({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}) {
  const { categories, addCategory } = useCategories();
  const { brands, addBrand } = useBrands();

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 p-8">
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
          required
        />
      </div>
      <p className="max-w-sm text-xs leading-4 text-zinc-500">
        Give your product a short and clear description. 120-160 characters is
        the recommended length for search engines.
      </p>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex flex-col gap-6">
          <Textarea
            type={"text"}
            label={"Description"}
            placeholder={"Short description of the product..."}
            value={product.description}
            onChange={(e: { target: { value: any } }) =>
              setProduct({ ...product, description: e.target.value })
            }
            rows={10}
            required
          />
          <Toggle
            label={"Publish"}
            isToggled={product.isPublished}
            setIsToggled={(isPublished: boolean) =>
              setProduct({ ...product, isPublished })
            }
          />
        </div>
        <div className="grid h-max grid-rows-[repeat(3,auto)] gap-8">
          <SelectMultiple
            label={"Categories"}
            options={categories}
            selected={product.categories}
            setSelected={categories => setProduct({ ...product, categories })}
            placeholder={"Search or Create a Category..."}
            onCreate={addCategory}
          />
          <Select
            label={"Brand"}
            options={brands}
            selected={product.brand}
            setSelected={brand => setProduct({ ...product, brand })}
            placeholder={"Select Brand"}
            onCreate={addBrand}
          />
          <Tags
            label={"Tags"}
            tags={product.tags}
            setTags={tags => setProduct(product => ({ ...product, tags }))}
            placeholder={"Comma separated tags..."}
          />
        </div>
      </div>
    </div>
  );
}
