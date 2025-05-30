import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import { DashboardLayout } from "../components";
import Leave from "../pages/Dashboard/Employee/Leave";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import CreateEmployee from "../pages/Dashboard/Employer/CreateEmployee";
import ManageEmployee from "../pages/Dashboard/Employer/ManageEmployee";
import ManagePayroll from "../pages/Dashboard/Employer/ManagePayroll";
import Attendance from "../pages/Dashboard/Employee/Attendance";
import CreateOrganisation from "../pages/Dashboard/Admin/CreateOrganisation";

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
        index: true,
        element: <Dashboard />,
      },

      {
        path: "employee-attendance",
        element: <Attendance />,
      },
      {
        path: "employee-leave",
        element: <Leave />,
      },
      {
        path: "create-organisation",
        element: <CreateOrganisation />,
      },
      {
        path: "create-employee",
        element: <CreateEmployee />,
      },
      {
        path: "manage-employee",
        element: <ManageEmployee />,
      },
      {
        path: "manage-payroll",
        element: <ManagePayroll />,
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
