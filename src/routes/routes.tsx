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
import ManageEmployer from "../pages/Dashboard/Admin/ManageEmployer";
import EditOrganisation from "../pages/Dashboard/Admin/EditOrganisation";
import EditEmployee from "../pages/Dashboard/Employer/EditEmployee";

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
        path: "create-organisation",
        element: <CreateOrganisation />,
      },
      {
        path: "manage-organisation",
        element: <ManageEmployer />,
      },
      {
        path: "edit-organisation/:id",
        element: <EditOrganisation />,
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
        path: "create-employee",
        element: <CreateEmployee />,
      },
      {
        path: "manage-employee",
        element: <ManageEmployee />,
      },
      {
        path: "edit-employee/:id",
        element: <EditEmployee />,
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
