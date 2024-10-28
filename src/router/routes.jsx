import { useRoutes } from "react-router-dom";

import AllRoutes from "./allRouter";
import Layout from "../pages/layout/layout.jsx";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: AllRoutes,
    },
  ]);
  return routes;
};

export default Routes;
