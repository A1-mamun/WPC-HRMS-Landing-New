import { MdClose } from "react-icons/md";
import { AiOutlineDashboard, AiOutlineMenu } from "react-icons/ai";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import EmployerMenu from "./Menu/EmployerMenu";
import EmployeeMenu from "./Menu/EmployeeMenu";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const userRole = {
  ADMIN: "admin",
  EMPLOYER: "employer",
  EMPLOYEE: "employee",
};

const DashboardSidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);

  const handleOpen = () => {
    onOpen();
  };

  const navLinks = (
    <>
      <MenuItem
        label="Dashboard"
        address="/dashboard"
        icon={<AiOutlineDashboard />}
        onOpenChange={onOpenChange}
      />
      {user!.role === userRole.ADMIN && (
        <AdminMenu onOpenChange={onOpenChange} />
      )}
      {user!.role === userRole.EMPLOYER && (
        <EmployerMenu onOpenChange={onOpenChange} />
      )}
      {user!.role === userRole.EMPLOYEE && (
        <EmployeeMenu onOpenChange={onOpenChange} />
      )}
    </>
  );

  return (
    <div className="">
      <div
        className="lg:hidden absolute z-20 top-2
        right-1 md:right-3"
      >
        <div className="flex items-center justify-between h-full">
          <Button
            className="bg-transparent text-bg-text"
            size="lg"
            onPress={() => handleOpen()}
            isIconOnly
          >
            <AiOutlineMenu size={25} />
          </Button>
        </div>
        <Drawer
          radius="none"
          size="xs"
          isOpen={isOpen}
          placement="top"
          onOpenChange={onOpenChange}
          closeButton={<MdClose size={50} />}
          className="bg-hrms-blue"
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  <h2 className="text-start text-3xl font-bold text-bg-text">
                    HRMS
                  </h2>
                </DrawerHeader>
                <DrawerBody>
                  <div className="space-y-2">{navLinks}</div>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    size="sm"
                    onPress={() => {
                      onClose(); // close the drawer
                      navigate("/"); // navigate to home
                    }}
                  >
                    Back to Home
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
        {/* <div className="relative top-10 left-1 btn btn-xs">
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div
          className={`relative h-full transition-transform duration-300 transform ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full -left-24 "
          }`}
        >
          <div className="min-h-[calc(100vh-25px)] p-3 space-y-2 w-60  text-gray-800 bg-white">
            <div className="flex items-center gap-4">
              <MdClose size={20} onClick={() => setIsOpen(!isOpen)} />
              <h2 className="text-center text-2xl font-bold">Medical Store</h2>
            </div>
            <div>
              <ul className="pt-2 pb-4 space-y-2 text-base">{navLinks}</ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="hidden lg:block bg-hrms-blue sticky left-0 top-0 h-screen z-20 ">
        <div className="h-screen px-3 w-52">
          <div className="h-16 flex items-center justify-center">
            <NavLink to="/">
              <Button className="font-jura text-4xl font-bold text-bg-primary bg-transparent">
                HRMS
              </Button>
            </NavLink>
          </div>
          <div className="space-y-2">{navLinks}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
