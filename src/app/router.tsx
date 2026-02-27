import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoute from "./routes/landing";
import { RootLayout } from "@/components/layouts/root-layout";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [{ index: true, Component: LandingRoute }],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
