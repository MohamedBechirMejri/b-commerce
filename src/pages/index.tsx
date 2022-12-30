import { type NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";
import Logo from "../components/Logo";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Search from "../components/Search";

const className = " h-full w-full border border-current";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>B Commerce</title>
        <meta name="description" content="Open Source E-commerce solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-full min-h-screen w-full grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(12,minmax(0,1fr))]">
        <Logo />
        <div
          className={
            "grid grid-rows-2 border-0 [grid-area:1/3/3/13]" + className
          }
        >
          <Nav />
          <Search />
        </div>
        <Filter />
        <Main />
      </main>
    </>
  );
};

export default Home;
