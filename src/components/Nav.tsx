const className = " h-full w-full border border-current";

const Nav = () => {
  return (
    <nav className={"grid grid-cols-[15fr,1fr,1fr] border-0" + className}>
      <div className={"bg-green-500x0 " + className}></div>
      <div className={"bg-green-500x0 " + className}></div>
      <div className={"bg-green-500x0 " + className}></div>
    </nav>
  );
};

export default Nav;
