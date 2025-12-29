import { createBrowserRouter } from "react-router";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Scanner from "./pages/scanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/scanner",
        element: <Scanner />,
      },
    ],
  },
]);

export default router;
