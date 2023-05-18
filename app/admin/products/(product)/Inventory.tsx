export default function Inventory() {
  return (
    <div className="grid grid-cols-2 auto-rows-min">
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="stock">
          Stock
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="stock"
          min={0}
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="restockAlert"
        >
          Restock alert (-1 means no alert)
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="minStock"
          min={-1}
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="minAmount"
        >
          Minimum amount
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="minAmount"
          min={1}
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="maxAmount"
        >
          Maximum amount
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="maxAmount"
          min={1}
        />
      </div>
    </div>
  );
}
