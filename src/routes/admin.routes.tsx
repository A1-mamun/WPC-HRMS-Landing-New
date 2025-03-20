import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import CreateEmployer from "../pages/Dashboard/Admin/CreateEmployer";
import EmployerSubscription from "../pages/Dashboard/Admin/EmployerSubscription";
import ManageEmployer from "../pages/Dashboard/Admin/ManageEmployer";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Employer Management",
    children: [
      {
        name: "Create Employer",
        path: "create-employer",
        element: <CreateEmployer />,
      },
      {
        name: "Employer Subscription",
        path: "create-subscription",
        element: <EmployerSubscription />,
      },
      {
        name: "Manage Employer",
        path: "manage-employer",
        element: <ManageEmployer />,
      },
    ],
  },
];
