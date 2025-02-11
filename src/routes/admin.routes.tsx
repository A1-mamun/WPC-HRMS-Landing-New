import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateEmployer from "../pages/admin/CreateEmployer";
import EmployerSubscription from "../pages/admin/EmployerSubscription";
import ManageEmployer from "../pages/admin/ManageEmployer";

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
