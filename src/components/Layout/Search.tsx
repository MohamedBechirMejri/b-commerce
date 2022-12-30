import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="flex h-full w-full">
      <input
        type="search"
        placeholder="Search"
        className="h-full w-full border-0"
      />
      <button className="flex w-24 items-center justify-center text-3xl">
        <CgSearch />
      </button>
    </div>
  );
};

export default Search;
