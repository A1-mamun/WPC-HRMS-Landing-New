import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const EmployerMenu = () => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Add Org Documents"
        address="add-org-documents"
      />
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
    </>
  );
};

export default EmployerMenu;
