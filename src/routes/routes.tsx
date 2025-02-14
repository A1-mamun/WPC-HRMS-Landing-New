import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import { DashboardLayout } from "../components";
import Leave from "../pages/employee/Leave";

import Attendance from "../pages/employee/Attendance";

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
      // {
      //   path: "admin",
      //   children: routeGenerator(adminPaths),
      // },
      // {
      //   path: "employer",
      //   children: routeGenerator(employerPaths),
      // },
      // {
      //   path: "employee",
      //   children: routeGenerator(employeePaths),
      // },
      {
        index: true,
        element: <EmployeeDashboard />,
      },
      {
        path: "employee-dashboard",
        element: <EmployeeDashboard />,
      },
      {
        path: "employee-attendance",
        element: <Attendance />,
      },
      {
        path: "employee-leave",
        element: <Leave />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
