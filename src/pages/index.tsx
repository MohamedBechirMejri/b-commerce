import { type NextPage } from "next";
import Head from "next/head";
import Filter from "../components/Filter";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>B Commerce</title>
        <meta name="description" content="Open Source E-commerce solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-full min-h-[90vh] grid-cols-[1fr,6fr]">
        <Filter />
        <Main />
      </div>
    </>
  );
};

export default Home;
