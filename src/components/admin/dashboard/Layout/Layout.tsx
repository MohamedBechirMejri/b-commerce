import Link from "next/link";
import Nav from "./Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen grid-cols-10 grid-rows-[3rem,1fr]">
      <header className="col-span-10 flex items-center justify-between p-4 font-bold">
        <Link href="/">B Commerce</Link>
        <div className="h-8 w-8 rounded-full bg-slate-300"></div>
      </header>
      <Nav />
      <main className="col-span-9 h-full overflow-y-scroll scrollbar-none">
        {children}
      </main>
    </div>
  );
};

export default Layout;
