import { Button } from "@heroui/react";
import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MenuItem = ({
  label,
  address,
  icon,
  onOpenChange,
}: {
  label: string;
  address: string;
  icon: ReactNode;
  onOpenChange?: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        ` flex items-center space-x-3 rounded-md gap-3 w-full ${
          isActive
            ? " bg-hrms-blue-hover transition-colors duration-300 transform "
            : " bg-hrms-blue-light transition-colors duration-300 transform "
        }`
      }
    >
      <Button
        onPress={() => {
          onOpenChange?.();
          navigate(address);
        }}
        startContent={icon}
        radius="sm"
        className="w-full flex items-center justify-start bg-transparent text-bg-primary font-inter font-medium"
      >
        {label}
      </Button>
    </NavLink>
  );
};
export default MenuItem;
