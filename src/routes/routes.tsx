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
import HcmTab from "../pages/Dashboard/Employer/HcmMaster/HcmTab";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EmployerRoute from "./EmployerRoute";
import EmployeeRoute from "./EmployeeRoute";
import AddChangeOfCircumstances from "../pages/Dashboard/Employer/Circumstances/AddChangeOfCircumstances";
import CircumstancesTab from "../pages/Dashboard/Employer/Circumstances/Circumstances";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "create-organisation",
        element: (
          <AdminRoute>
            <CreateOrganisation />
          </AdminRoute>
        ),
      },
      {
        path: "manage-organisation",
        element: (
          <AdminRoute>
            <ManageEmployer />
          </AdminRoute>
        ),
      },
      {
        path: "edit-organisation/:id",
        element: (
          <AdminRoute>
            <EditOrganisation />
          </AdminRoute>
        ),
      },
      {
        path: "create-employee",
        element: (
          <EmployerRoute>
            <CreateEmployee />
          </EmployerRoute>
        ),
      },
      {
        path: "manage-employee",
        element: (
          <EmployerRoute>
            <ManageEmployee />
          </EmployerRoute>
        ),
      },
      {
        path: "edit-employee/:id",
        element: (
          <EmployerRoute>
            <EditEmployee />
          </EmployerRoute>
        ),
      },
      {
        path: "manage-payroll",
        element: (
          <EmployerRoute>
            <ManagePayroll />
          </EmployerRoute>
        ),
      },
      {
        path: "add-change-of-circumstances",
        element: (
          <EmployerRoute>
            <AddChangeOfCircumstances />
          </EmployerRoute>
        ),
      },
      {
        path: "circumstances",
        element: (
          <EmployerRoute>
            <CircumstancesTab />
          </EmployerRoute>
        ),
      },
      {
        path: "hcm-master",
        element: (
          <EmployerRoute>
            <HcmTab />
          </EmployerRoute>
        ),
      },
      {
        path: "employee-attendance",
        element: (
          <EmployeeRoute>
            <Attendance />
          </EmployeeRoute>
        ),
      },
      {
        path: "employee-leave",
        element: (
          <EmployeeRoute>
            <Leave />
          </EmployeeRoute>
        ),
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
