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
import Actions from "./Actions";

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
    <main className="bg-white rounded-md shadow-md m-7 border-t-5 border-t-hrms-blue-hover border border-gray-300">
      <h1 className="text-xl font-medium p-4 border-b border-gray-300">
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

      {/* Responsive table wrapper */}
      <div className="overflow-x-auto mt-4 mx-5 border rounded-md">
        <Table
          color="primary"
          radius="sm"
          isStriped
          aria-label="Employee management table with responsive design"
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
            table: "table-auto w-full",
            base: "max-w-full",
          }}
        >
          <TableHeader className="bg-red-700 text-lg">
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white whitespace-nowrap"
              key="employeeId"
            >
              Emp ID
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[12%] border-r-2 border-white"
              key="name"
            >
              Name
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white whitespace-nowrap"
              key="dob"
            >
              DOB
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[10%] border-r-2 border-white"
              key="mobile"
            >
              Mobile
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[15%] border-r-2 border-white"
              key="email"
            >
              Email
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[10%] border-r-2 border-white"
              key="designation"
            >
              Designation
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white"
              key="nationality"
            >
              Nationality
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white whitespace-nowrap"
              key="niNumber"
            >
              NI No
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white whitespace-nowrap"
              key="visaExpired"
            >
              Visa Exp
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white whitespace-nowrap"
              key="passportNo"
            >
              Passport
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[3%] border-r-2 border-white"
              key="address"
            >
              Address
            </TableColumn>
            <TableColumn
              className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white"
              key="action"
            >
              Action
            </TableColumn>
          </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.name}>

                  {(columnKey) => (
                    <TableCell className="text-xs font-semibold border-r border-gray-200 px-2 py-2 h-20 truncate">
                      {columnKey === "action" ? (
                        <div>
                          <Actions/>
                        </div>
                      ) : (
                         <div className="truncate">
                          {getKeyValue(item, columnKey)}
                        </div>
                      )}
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