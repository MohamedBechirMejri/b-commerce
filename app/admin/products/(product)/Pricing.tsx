export default function Pricing() {
  // Define an array of objects with the properties for each input field
  const fields = [
    { id: "price", label: "Price", type: "number", min: 0 },
    { id: "salePrice", label: "Sale Price", type: "number", min: 0 },
    { id: "onSale", label: "On Sale", type: "checkbox" },
  ];

  // Use map to iterate over the array and render each input field
  return (
    <div className="grid grid-cols-2 auto-rows-min">
      {fields.map(field => (
        <div className="flex flex-col p-4" key={field.id}>
          <label
            className="text-sm font-semibold text-gray-600"
            htmlFor={field.id}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            className="px-4 py-2 mt-2 border border-gray-300 rounded-md"
            id={field.id}
            min={field.min}
          />
        </div>
      ))}
    </div>
  );
}
