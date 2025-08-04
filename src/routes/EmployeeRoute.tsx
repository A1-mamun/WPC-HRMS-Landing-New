import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const EmployeeRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role === "employee") return children;
  return <Navigate to="/dashboard"></Navigate>;
};

export default EmployeeRoute;
