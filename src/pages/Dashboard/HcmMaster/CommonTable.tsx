import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

type Department = {
  id: number;
  name: string;
  siNo?: number; // Optional for pagination
};

const CommonTable = ({
  tableName,
  limit,
  data,
}: {
  tableName: string;
  limit: number;
  data: Department[];
}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = limit;

  const pages = data && rowsPerPage ? Math.ceil(data.length / rowsPerPage) : 1;

  const items = useMemo(() => {
    if (!data || !rowsPerPage) return [];
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end).map((item: Department, i: number) => ({
      ...item,
      siNo: start + i + 1,
    }));
  }, [page, data, rowsPerPage]);

  return (
    <div>
      {/* Search bar */}
      <div className="flex justify-end py-3">
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search:
          </label>
          <input
            id="search"
            type="text"
            className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="Type to search..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto my-3 border rounded-md">
        <Table
          aria-label="Department Table"
          classNames={{
            wrapper: "min-h-[222px]",
            table: "table-auto w-full border-none",
            base: "max-w-full",
          }}
          bottomContent={
            <div className="flex w-full justify-end px-4 py-2">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn
              key="serial"
              className="bg-[#2561b4] text-white text-xs font-semibold border-r border-white w-[10%]"
            >
              Sl. No.
            </TableColumn>
            <TableColumn
              key="name"
              className="bg-[#2561b4] text-white text-xs font-semibold border-r border-white"
            >
              {tableName}
            </TableColumn>
            <TableColumn
              key="action"
              className="bg-[#2561b4] text-white text-xs font-semibold border-white w-[10%]"
            >
              Action
            </TableColumn>
          </TableHeader>

          <TableBody items={items}>
            {(item: Department) => (
              <TableRow
                key={item.id}
                className={
                  (item?.siNo as number) % 2 === 0 ? "bg-[#f4f4f5]" : "bg-white"
                }
              >
                {(columnKey) => (
                  <TableCell className="text-xs font-medium text-gray-700 border-r border-gray-200 px-3 py-3 truncate rounded-md">
                    {columnKey === "serial" ? (
                      <div>{item.siNo}</div>
                    ) : columnKey === "action" ? (
                      <div className="flex justify-center">
                        <FaEdit className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm" />
                      </div>
                    ) : (
                      <div>{item.name}</div>
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CommonTable;
