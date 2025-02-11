import CreateEmployee from "../pages/employer/CreateEmployee";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import ManageEmployee from "../pages/employer/ManageEmployee";
import ManagePayroll from "../pages/employer/ManagePayroll";

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
