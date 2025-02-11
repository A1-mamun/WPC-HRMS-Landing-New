import DashboardLayout from "../components/layout/DashboardLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

export const mainPaths = [
  {
    name: "Home",
    path: "home",
    element: <Home />,
  },
  {
    name: "Pricing",
    path: "pricing",
    element: <Pricing />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardLayout />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];
