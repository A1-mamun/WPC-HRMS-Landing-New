import { Outlet, useNavigate } from "react-router-dom";

import { Avatar, Button, Link } from "@heroui/react";
import { FaCircleUser } from "react-icons/fa6";
import DashboardSidebar from "./Sidebar/DashboarSidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className="font-jura flex">
      <DashboardSidebar />
      <div className="w-full">
        <div className="w-full h-16 bg-hrms-blue sticky left-0 top-0 z-10">
          <div className="flex items-center justify-start lg:justify-end h-full pl-5 md:pl-8 lg:pr-10">
            <div className="flex items-center gap-6">
              <Link className="hidden lg:block" href="/">
                <Button className="font-inter text-hrms-blue font-medium">
                  Back to Home
                </Button>
              </Link>
              <Link className="hidden lg:block" href="/">
                <Button
                  onPress={handleLogOut}
                  className="font-inter text-hrms-blue font-medium"
                >
                  Log Out
                </Button>
              </Link>

              <Avatar size="sm" isBordered className="">
                <FaCircleUser />
              </Avatar>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
