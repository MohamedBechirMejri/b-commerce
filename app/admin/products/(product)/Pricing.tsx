export default function Pricing() {
  return (
    <div className="grid grid-cols-2 auto-rows-min">
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="price"
          min={0}
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="salePrice"
        >
          Sale Price
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="salePrice"
          min={0}
        />
      </div>

      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="onSale">
          On Sale
        </label>
        <input
          type="checkbox"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="onSale"
        />
      </div>
    </div>
  );
}
