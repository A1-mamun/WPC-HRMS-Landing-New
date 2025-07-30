import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Tooltip,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

import HCMEditModal from "./HCMEditModal";

type Department = {
  _id: string;
  name: string;
  siNo?: number; // Optional for pagination
};

const CommonHCMTable = ({
  title,
  route,
  tableName,
  limit,
  data,
  refetch,
}: {
  tableName: string;
  limit: number;
  data: Department[];
  title: string;
  route: string;
  refetch: () => void;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Department | null>(null);

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
                key={item._id}
                className={
                  (item?.siNo as number) % 2 === 0 ? "bg-[#f4f4f5]" : "bg-white"
                }
              >
                {(columnKey) => (
                  <TableCell className="text-xs font-medium text-gray-700 border-r border-gray-200 px-3 py-[6px] truncate rounded-md">
                    {columnKey === "serial" ? (
                      <div>{item.siNo}</div>
                    ) : columnKey === "action" ? (
                      <div className="flex justify-center">
                        <Tooltip
                          content="Edit"
                          showArrow
                          placement="bottom"
                          color="primary"
                        >
                          <Button
                            isIconOnly
                            size="sm"
                            className="bg-hrms-blue-hover"
                            onPress={() => {
                              setSelectedItem(item);
                              onOpen();
                            }}
                          >
                            <FaEdit size={16} color="white" />
                          </Button>
                        </Tooltip>
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
        <HCMEditModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          title={title}
          name={selectedItem ? selectedItem.name : ""}
          id={selectedItem ? selectedItem._id : ""}
          route={route}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default CommonHCMTable;
