import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const EmployerMenu = ({ onOpenChange }: { onOpenChange?: () => void }) => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Create Employee"
        address="create-employee"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Employee"
        address="manage-employee"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Payroll"
        address="manage-payroll"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Circumstances"
        address="circumstances"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="HCM Master"
        address="hcm-master"
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default EmployerMenu;
