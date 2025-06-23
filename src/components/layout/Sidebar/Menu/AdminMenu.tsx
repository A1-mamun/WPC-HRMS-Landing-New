import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={<FaUserCog />}
        label="Create Organisation"
        address="create-organisation"
      />
      <MenuItem
        icon={<FaUserCog />}
        label="Manage Org"
        address="manage-organisation"
      />
    </>
  );
};

export default AdminMenu;
