import { useState } from "react";
import { Layout, Menu, Drawer, Button, Flex } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const menuItems = [
    { key: "Home", label: <NavLink to="/">Home</NavLink> },
    { key: "Pricing", label: <NavLink to="/pricing">Pricing</NavLink> },
    { key: "Dashboard", label: <NavLink to="/dashboard">Dashboard</NavLink> },
    { key: "Contact Us", label: <NavLink to="/contact">Contact Us</NavLink> },
  ];

  return (
    <Layout className="min-h-screen">
      {/* HEADER */}
      <Header className="flex justify-between items-center bg-blue-500 p-4">
        <div className="text-2xl font-bold text-white">MyWebsite</div>

        {/* Desktop Menu */}
        <div className="hidden md:block w-96">
          <Menu mode="horizontal" items={menuItems} />
        </div>

        {/* Mobile Menu Button */}
        <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} />
      </Header>

      {/* MOBILE DRAWER */}
      <Drawer
        title="Menu"
        placement="top"
        closable
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <Menu mode="vertical" items={menuItems} />
      </Drawer>

      {/* CONTENT AREA */}
      <Content className="p-4">
        <Outlet />
      </Content>

      {/* FOOTER */}
      {/* <Footer className="text-center bg-gray-100 py-4">
        © 2025 MyWebsite. All rights reserved.
      </Footer> */}
    </Layout>
  );
};

export default MainLayout;
