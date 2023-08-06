import { TbSearch } from "react-icons/tb";

const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={
        "h-[3rem] w-full max-w-[320px] border rounded-full overflow-hidden relative shadow-sm " +
        className
      }
    >
      <input
        type="search"
        placeholder="Search for products..."
        className="text-sm h-full w-full px-6 pr-11 outline-none"
      />
      <button className="absolute right-4 top-3 text-xl">
        <TbSearch />
      </button>
    </div>
  );
};

export default SearchBar;