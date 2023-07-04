import "./globals.css";

import { Lato } from "next/font/google";

import Header from "./Header";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
