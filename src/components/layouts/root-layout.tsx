import { Outlet } from "react-router";
import { Navbar } from "@/components/common/navbar";
import { useState } from "react";
import { Intro } from "../common/intro";

export const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Intro onFinish={() => setLoading(false)} />}
      {!loading && (
        <main className="py-4">
          <Navbar />
          <div className="flex justify-center min-h-screen w-full bg-background-light">
            <div className="w-full px-4 md:px-8 lg:px-0 lg:max-w-4xl xl:max-w-6xl">
              <Outlet />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
