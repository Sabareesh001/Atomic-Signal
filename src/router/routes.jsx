import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/layout";
import { privateRoutes, publicRoutes } from "./allRouter";
import Theme from "../themes/theme";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: privateRoutes,
    },
    ...publicRoutes,
  ]);
  return routes;
};

export default Routes;
