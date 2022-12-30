import { type NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";
import Logo from "../components/Logo";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Search from "../components/Search";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>B Commerce</title>
        <meta name="description" content="Open Source E-commerce solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-full min-h-screen w-full grid-cols-12 grid-rows-[repeat(12,minmax(0,1fr))]">
        <Logo />
        <div className="grid h-full w-full grid-rows-2 [grid-area:1/3/3/13]">
          <Nav />
          <Search />
        </div>
        <Filter />
        <Main />
      </div>
    </>
  );
};

export default Home;
