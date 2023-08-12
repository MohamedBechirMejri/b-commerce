import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full w-full min-h-[100svh] flex items-center justify-center">
      <SignIn />
    </div>
  );
}
