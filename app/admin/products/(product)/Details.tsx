export default function Details() {
  return (
    <div className="grid grid-cols-2 auto-rows-min">
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="name"
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="reference"
        >
          Reference
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="reference"
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          rows={4}
          id="description"
        />
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="categories"
        >
          Categories
        </label>
        <select
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="categories"
          multiple
        >
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
      </div>
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="brand">
          Brand
        </label>
        <select
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="brand"
        >
          <option value="1">Brand 1</option>
          <option value="2">Brand 2</option>
          <option value="3">Brand 3</option>
        </select>
      </div>

      <div className="flex p-4 flex-col">
        <label
          className="text-sm font-semibold text-gray-600"
          htmlFor="published"
        >
          Published
        </label>
        <input
          type="checkbox"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="published"
        />
      </div>
    </div>
  );
}
