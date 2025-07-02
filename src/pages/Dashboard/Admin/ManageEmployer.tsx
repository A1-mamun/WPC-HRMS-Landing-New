/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Button,
  Tooltip,
} from "@heroui/react";
import { useGetOrgaisationsQuery } from "../../../redux/features/admin/adminApi";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageEmployer = () => {
  const [page, setPage] = useState(1);

  // api call to get employees
  const { data, isError } = useGetOrgaisationsQuery(undefined);
  // console.log("data", data);

  const rowsPerPage = data?.meta?.limit;

  const pages =
    data?.data && rowsPerPage ? Math.ceil(data.data.length / rowsPerPage) : 1;

  const items = useMemo(() => {
    if (!data?.data || !rowsPerPage) return [];
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.data.slice(start, end).map((org: any, i: number) => ({
      ...org,
      siNo: start + i + 1,
    }));
  }, [page, data, rowsPerPage]);

  // console.log("items", items);

  return (
    <main className="bg-white rounded-md shadow-md m-7 border-t-5 border-t-hrms-blue-hover border border-gray-300">
      <h1 className="text-xl font-medium p-4 border-b border-gray-300">
        Organisations
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
      <div className="overflow-x-auto my-4 mx-5 border rounded-md">
        {data?.data && rowsPerPage ? (
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
            <TableHeader>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[2%] border-r-2 border-white whitespace-nowrap"
                key="siNo"
              >
                Si. No.
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[20%] border-r-2 border-white"
                key="name"
              >
                Organisation Name
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[20%] border-r-2 border-white whitespace-nowrap"
                key="address"
              >
                Organisation Address
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[15%] border-r-2 border-white"
                key="websiteURL"
              >
                Website
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[20%] border-r-2 border-white"
                key="loginEmail"
              >
                Email
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[15%] border-r-2 border-white"
                key="contactNo"
              >
                Phone No
              </TableColumn>
              <TableColumn
                className="bg-hrms-blue-hover text-white text-xs font-semibold w-[8%] border-r-2 border-white"
                key="action"
              >
                Action
              </TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item: any) => (
                <TableRow key={item._id}>
                  {(columnKey) => (
                    <TableCell className="text-xs font-semibold border-r border-gray-200 px-2 py-1  truncate">
                      {columnKey === "action" ? (
                        <div>
                          <Tooltip
                            content="Edit"
                            showArrow
                            placement="bottom"
                            color="primary"
                          >
                            <Link
                              to={`/dashboard/edit-organisation/${item._id}`}
                            >
                              <Button
                                size="sm"
                                isIconOnly
                                className="bg-hrms-blue-hover text-sm font-jura text-white font-semibold"
                              >
                                <FaEdit />
                              </Button>
                            </Link>
                          </Tooltip>
                        </div>
                      ) : columnKey === "siNo" ? (
                        <span className="text-center">
                          {item.siNo ?? "N/A"}
                        </span>
                      ) : (
                        <div className="truncate">
                          {(() => {
                            const val = getKeyValue(
                              item.organisationDetails,
                              columnKey
                            );
                            return val !== undefined &&
                              val !== null &&
                              val !== ""
                              ? val
                              : "N/A";
                          })()}
                        </div>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        ) : isError ? (
          <div className="p-4 text-center text-xl font-bold text-red-700">
            Something went wrong. Please try again later.
          </div>
        ) : (
          <div className="p-4 text-center text-xl font-bold text-gray-500">
            Loading employees...
          </div>
        )}
      </div>
    </main>
  );
};

export default ManageEmployer;
