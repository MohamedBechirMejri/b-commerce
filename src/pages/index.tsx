import { type NextPage } from "next";
import Head from "next/head";

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
        <div
          className={"bg-yellow-500x0 [grid-area:1/1/3/3] " + className}
        ></div>
        <div
          className={
            "grid grid-rows-2 border-0 [grid-area:1/3/3/13]" + className
          }
        >
          <div
            className={
              "grid grid-cols-[15fr,1fr,1fr] border-0" + className
            }
          >
            <div className={"bg-green-500x0 " + className}></div>
            <div className={"bg-green-500x0 " + className}></div>
            <div className={"bg-green-500x0 " + className}></div>
          </div>
          <div className={"bg-green-500x0 " + className}></div>
        </div>
        <div
          className={"bg-blue-500x0 [grid-area:3/1/13/3] " + className}
        ></div>
        <div
          className={"bg-red-500x0 [grid-area:3/3/13/13] " + className}
        ></div>
      </main>
    </>
  );
};

export default Home;
