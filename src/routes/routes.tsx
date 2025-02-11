import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import Home from "../pages/Home";
import { employerPaths } from "./employer.routes";
import { employeePaths } from "./employee.routes";
import { mainPaths } from "./main.routes";
import Pricing from "../pages/Pricing";
import DashboardLayout from "../components/layout/DashboardLayout";
import Contact from "../pages/Contact";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "admin",
        children: routeGenerator(adminPaths),
      },
      {
        path: "employer",
        children: routeGenerator(employerPaths),
      },
      {
        path: "employee",
        children: routeGenerator(employeePaths),
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <App />,
  //   children: routeGenerator(adminPaths),
  // },
  // {
  //   path: "/employer",
  //   element: <App />,
  //   children: routeGenerator(employerPaths),
  // },
  // {
  //   path: "/employee",
  //   element: <App />,
  //   children: routeGenerator(employeePaths),
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

export default router;
