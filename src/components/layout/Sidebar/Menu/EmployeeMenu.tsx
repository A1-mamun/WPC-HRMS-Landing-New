import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

const EmployeeMenu = ({ onOpenChange }: { onOpenChange?: () => void }) => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Add Documents"
        address="add-employee-documents"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Attendence"
        address="employee-attendance"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Leave"
        address="employee-leave"
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default EmployeeMenu;
