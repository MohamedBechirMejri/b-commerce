import { Lato } from "next/font/google";

import "~/styles/globals.css";

export const metadata = {
  title: "B-Commerce",
  description: "The best e-commerce site for all your needs",
  image: "/logo.png",
  siteUrl: "https://bcommerce.vercel.app",
};

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={lato.style}>{children}</body>
    </html>
  );
}

export default RootLayout;
