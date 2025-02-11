import { TSidebarItem, TUserPath } from "../types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: (
          <NavLink to={`/dashboard/${role}/${item.path}`}>{item.name}</NavLink>
        ),
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: (
            <NavLink to={`/dashboard/${role}/${child.path}`}>
              {child.name}
            </NavLink>
          ),
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

// export const navbarItemsGenerator = (items: TUserPath[]) => {
//   const navbarItems = items.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/dashboard/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: (
//             <NavLink to={`/dashboard/${child.path}`}>{child.name}</NavLink>
//           ),
//         })),
//       });
//     }

//     return acc;
//   }, []);

//   return navbarItems;
// };
