import Layout from "./Components/shared/Layout";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Categories/Home/Home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "categories", element: <Categories /> },
    ],
  },
];

export default routes;
