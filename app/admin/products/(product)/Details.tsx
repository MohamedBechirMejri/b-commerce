export default function Details() {
  // Define an array of objects with the properties for each input field
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
          {field.type === "textarea" ? (
            <textarea
              className="px-4 py-2 mt-2 border border-gray-300 rounded-md"
              rows={field.rows}
              id={field.id}
            />
          ) : field.type === "select" ? (
            <select
              className="px-4 py-2 mt-2 border border-gray-300 rounded-md"
              id={field.id}
              multiple={field.multiple}
            >
              {field.options!.map(option => (
                <option value={option.value} key={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              className="px-4 py-2 mt-2 border border-gray-300 rounded-md"
              id={field.id}
            />
          )}
        </div>
      ))}
    </div>
  );
}
