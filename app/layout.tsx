import "./globals.css";

import { Roboto } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "B-Commerce",
  description: "The best e-commerce site for all your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
