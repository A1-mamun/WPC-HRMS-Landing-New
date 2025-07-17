import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const EmployerMenu = () => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Create Employee"
        address="create-employee"
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Employee"
        address="manage-employee"
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Payroll"
        address="manage-payroll"
      />
      <MenuItem
        icon={<FaUserCog />}
        label="HCM Master"
        address="hcm-master"
      />
    </>
  );
};

export default EmployerMenu;
