import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import MainLayout from "../components/Layout/Layout";
import AdminDashboardLayout from "../components/admin/dashboard/Layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {router.pathname.startsWith(`/admin/dashboard`) ? (
        <AdminDashboardLayout>
          <Component {...pageProps} />
        </AdminDashboardLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </SessionProvider>
  );
};

export default MyApp;
