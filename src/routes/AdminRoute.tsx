import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);
  console.log("AdminRoute user:", user);

  if (user?.role === "admin") return children;
  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoute;
