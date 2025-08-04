import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);
  const location = useLocation();

  //   if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
