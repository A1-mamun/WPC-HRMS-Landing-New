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
import { users } from "../../../data";

const ManageEmployee = () => {
  const [page, setPage] = useState(1);

  // api call to get employees
  const { data } = useGetOrgaisationEmployeesQuery(undefined);
  console.log("data", data);

  const rowsPerPage = 3;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <main className=" bg-white rounded-md shadow-md m-7 border-t-5 border-t-hrms-blue-hover border border-gray-300">
      <h1 className="text-xl font-medium p-4 border-b border-gray-300 ">
        Employee
      </h1>

      <div className="flex justify-end px-5 py-3">
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search:
          </label>
          <input
            id="search"
            type="text"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="Type to search..."
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-4 mx-5 border rounded-md">
        <div className="w-[1040px] ">
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
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="name"
              >
                Employee ID
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="role"
              >
                Employee Name
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                DOB
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Mobile
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Email
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Designation
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Nationality
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Ni Number
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Visa Expired
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Passport No
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Address
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-sm font-semibold  min-w-[100px] border-r-2 border-white"
                key="status"
              >
                Action
              </TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.name}>
                  {(columnKey) => (
                    <TableCell className="text-sm font-semibold border-r border-gray-200 px-3 py-2 h-24">
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default ManageEmployee;
