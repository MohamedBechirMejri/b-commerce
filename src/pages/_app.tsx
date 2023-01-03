import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {router.pathname.startsWith(`/admin`) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
};

export default MyApp;
