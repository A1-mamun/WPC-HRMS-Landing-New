import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { employerPaths } from "../../routes/employer.routes";
import { employeePaths } from "../../routes/employee.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  EMPLOYER: "employer",
  EMPLOYEE: "employee",
};

const Sidebar = () => {
  const role = "employee";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.EMPLOYER:
      sidebarItems = sidebarItemsGenerator(employerPaths, userRole.EMPLOYER);
      break;
    case userRole.EMPLOYEE:
      sidebarItems = sidebarItemsGenerator(employeePaths, userRole.EMPLOYEE);
      break;

    default:
      break;
  }
  console.log("sidebarItems", sidebarItems);
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-2xl font-bold">HRMS</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
