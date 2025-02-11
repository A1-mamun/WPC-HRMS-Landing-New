import Attendance from "../pages/employee/Attendance";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import Leave from "../pages/employee/Leave";

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
