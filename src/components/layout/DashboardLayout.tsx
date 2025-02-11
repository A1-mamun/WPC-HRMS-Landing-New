import { Button, Layout } from "antd";

import { NavLink, Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <NavLink to={"/"} className="text-white">
            <Button type="primary">Home</Button>
          </NavLink>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
