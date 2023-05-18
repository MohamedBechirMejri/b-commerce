export default function Variants() {
  return (
    <div className="grid grid-cols-2 auto-rows-min">
      <div className="flex p-4 flex-col">
        <label className="text-sm font-semibold text-gray-600" htmlFor="soon">
          Soon
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2"
          id="soon"
        />
      </div>
    </div>
  );
}
