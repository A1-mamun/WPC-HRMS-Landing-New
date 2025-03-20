import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

const EmployeeMenu = () => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Add Documents"
        address="add-employee-documents"
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Attendence"
        address="employee-attendance"
      />
      <MenuItem icon={<FaUserCog />} label="Leave" address="employee-leave" />
    </>
  );
};

export default EmployeeMenu;
