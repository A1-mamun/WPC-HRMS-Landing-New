import CreateEmployee from "../pages/Dashboard/Employer/CreateEmployee";
import EmployerDashboard from "../pages/Dashboard/Employer/EmployerDashboard";
import ManageEmployee from "../pages/Dashboard/Employer/ManageEmployee";
import ManagePayroll from "../pages/Dashboard/Employer/ManagePayroll";

export const employerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <EmployerDashboard />,
  },
  {
    name: "Create Employee",
    path: "create-employee",
    element: <CreateEmployee />,
  },
  {
    name: "Manage Employee",
    path: "manage-employee",
    element: <ManageEmployee />,
  },
  {
    name: "Manage Payroll",
    path: "manage-payroll",
    element: <ManagePayroll />,
  },
];
