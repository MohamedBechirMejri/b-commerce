import { api } from "utils/api";

import "~/styles/globals.css";

export const metadata = {
  title: "MBM Lab",
  description: "MBM Lab",
  image: "/logo.png",
  siteUrl: "https://mbm-lab.vercel.app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="noscroll fixed left-0 top-1/2 z-50 flex h-[70vh] -translate-x-[93%] -translate-y-1/2 flex-col items-center gap-4 overflow-y-scroll rounded rounded-r-none border-2 bg-[#ffffff00] px-12 shadow ring ring-white backdrop-blur-3xl transition-all duration-300 hover:translate-x-0 hover:p-2 "></nav>
        {children}
      </body>
    </html>
  );
}

export default api.withTRPC(RootLayout);
