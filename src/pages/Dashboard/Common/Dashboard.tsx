import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import AdminDashboard from "../Admin/AdminDashboard";
import EmployeeDashboard from "../Employee/EmployeeDashboard";
import EmployerDashboard from "../Employer/EmployerDashboard";

const Dashboard = () => {
  const user = useAppSelector(useCurrentUser);

  if (!user) {
    return <div>Loading...</div>;
  } else if (user.role === "admin") {
    return <AdminDashboard />;
  } else if (user.role === "employer") {
    return <EmployerDashboard />;
  } else if (user.role === "employee") {
    return <EmployeeDashboard />;
  }
};

export default Dashboard;
