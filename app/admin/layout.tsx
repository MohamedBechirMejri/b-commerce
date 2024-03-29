import Nav from "./Nav";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-[100svh] grid-cols-[auto,1fr] grid-rows-1 border-[#222] bg-[#141414] text-white">
      <Nav />
      <main className="h-full overflow-y-scroll">{children}</main>
    </div>
  );
}
