import "~/styles/globals.css";

export const metadata = {
  title: "B-Commerce",
  description: "The best e-commerce site for all your needs",
  image: "/logo.png",
  siteUrl: "https://bcommerce.vercel.app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
