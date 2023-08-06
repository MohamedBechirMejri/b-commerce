const Counter = ({ value }: { value: number }) => {
  return (
    <span className="absolute top-2 -right-1 text-xs bg-[#f50963] text-[#f0f2ee] rounded-full w-4 h-4 flex items-center justify-center font-bold ring ring-[#f0f2ee]">
      {value.toString()}
    </span>
  );
};

export default Counter;
