import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = ({ onOpenChange }: { onOpenChange?: () => void }) => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Create Organisation"
        address="create-organisation"
        onOpenChange={onOpenChange}
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Org"
        address="manage-organisation"
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default AdminMenu;
