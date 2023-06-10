export default function Variants() {
  return (
    <div className="grid auto-rows-min grid-cols-2">
      <div className="flex flex-col p-4">
        <label className="text-sm font-semibold text-gray-600" htmlFor="soon">
          Soon
        </label>
        <input
          type="text"
          className="mt-2 rounded-md border border-gray-300 px-4 py-2"
          id="soon"
        />
      </div>
    </div>
  );
}
