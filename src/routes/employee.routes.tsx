import Attendance from "../pages/Dashboard/Employee/Attendance";
import EmployeeDashboard from "../pages/Dashboard/Employee/EmployeeDashboard";
import Leave from "../pages/Dashboard/Employee/Leave";

export const employeePaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <EmployeeDashboard />,
  },
  {
    name: "Ataendance",
    path: "employee-attendance",
    element: <Attendance />,
  },
  {
    name: "Leave",
    path: "employee-leave",
    element: <Leave />,
  },
];
