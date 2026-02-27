import { Outlet } from "react-router";
import { Navbar } from "../common/navbar";

export const RootLayout = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen w-full bg-background-light px-4 md:px-20">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};
