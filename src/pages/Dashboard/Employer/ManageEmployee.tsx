import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@heroui/react";
import { useGetOrgaisationEmployeesQuery } from "../../../redux/features/employer/createOrganisation";
const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
  },
];

const ManageEmployee = () => {
  const [page, setPage] = useState(1);

  // api call to get employees
  const { data } = useGetOrgaisationEmployeesQuery(undefined);
  console.log("data", data);

  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Employee
      </h1>
      <div>
        <Table
          color="primary"
          radius="sm"
          isStriped
          aria-label="Example table with client side pagination"
          className="text-lg"
          bottomContent={
            <div className="flex w-full justify-end">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader className="bg-red-700 text-lg">
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="name"
            >
              Employee ID
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="role"
            >
              Employee Name
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              DOB
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Mobile
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Email
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Designation
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Nationality
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Ni Number
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Visa Expired
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Passport No
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold border-r"
              key="status"
            >
              Address
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-sm font-semibold"
              key="status"
            >
              Action
            </TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => (
                  <TableCell className=" text-sm font-semibold border-r border-white">
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default ManageEmployee;
