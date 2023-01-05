import Link from "next/link";
import Main from "../../components/Dashboard/Main";
import Nav from "../../components/Dashboard/Nav";

const Dashboard = () => {
  return (
    <div className="grid h-screen grid-cols-10 grid-rows-[3rem,1fr]">
      <header className="col-span-10 flex items-center justify-between p-4 font-bold">
        <Link href="/">B Commerce</Link>
        <div className="h-8 w-8 rounded-full bg-slate-300"></div>
      </header>
      <Nav />
      <main className="col-span-9">
        <Main />
      </main>
    </div>
  );
};

export default Dashboard;
