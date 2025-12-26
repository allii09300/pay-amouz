import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
