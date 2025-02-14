import { Outlet } from "react-router-dom";
import { Header } from "../../sections";
import Footer from "../../sections/shared/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
