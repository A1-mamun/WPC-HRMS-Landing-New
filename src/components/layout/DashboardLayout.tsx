import { Outlet } from "react-router-dom";

import { Avatar, Button, Link } from "@heroui/react";
import { FaCircleUser } from "react-icons/fa6";
import DashboardSidebar from "./Sidebar/DashboarSidebar";

const DashboardLayout = () => {
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
