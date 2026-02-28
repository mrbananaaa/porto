import { Outlet } from "react-router";
import { Navbar } from "@/components/common/navbar";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-screen w-full bg-background-light">
        <main className="px-4 md:px-8 lg:px-0 lg:max-w-4xl xl:max-w-6xl">
          <Outlet />
        </main>
      </div>
    </>
  );
};
