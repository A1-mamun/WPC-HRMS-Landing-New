import CommonTable from "./CommonTable";
import { useGetOrganisationDepartmentsQuery } from "../../../redux/features/employer/hcmMaster";

// const rawData = [
//   { id: 1, name: "MANAGEMENT" },
//   { id: 2, name: "KITCHEN" },
//   { id: 3, name: "BAR" },
//   { id: 3, name: "BAR" },
// ];

// const DepartmentTable = () => {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   const pages = Math.ceil(rawData.length / rowsPerPage);

//   // Add serial numbers before rendering
//   const paginatedData: Department[] = rawData
//     .slice((page - 1) * rowsPerPage, page * rowsPerPage)
//     .map((item, index) => ({
//       ...item,
//       serial: (page - 1) * rowsPerPage + index + 1,
//     }));

//   return (
//     <div>
//       {/* Search bar */}
//       <div className="flex justify-end py-3">
//         <div className="flex items-center space-x-2">
//           <label htmlFor="search" className="text-sm font-medium">
//             Search:
//           </label>
//           <input
//             id="search"
//             type="text"
//             className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
//             placeholder="Type to search..."
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto my-3 border rounded-md">
//         <Table
//           aria-label="Department Table"
//           classNames={{
//             wrapper: "min-h-[222px]",
//             table: "table-auto w-full border-none",
//             base: "max-w-full",
//           }}
//           bottomContent={
//             <div className="flex w-full justify-end px-4 py-2">
//               <Pagination
//                 isCompact
//                 showControls
//                 showShadow
//                 color="primary"
//                 page={page}
//                 total={pages}
//                 onChange={setPage}
//               />
//             </div>
//           }
//         >
//           <TableHeader>
//             <TableColumn
//               key="serial"
//               className="bg-[#2561b4] text-white text-xs font-semibold border-r border-white w-[10%]"
//             >
//               Sl. No.
//             </TableColumn>
//             <TableColumn
//               key="name"
//               className="bg-[#2561b4] text-white text-xs font-semibold border-r border-white"
//             >
//               Department Name
//             </TableColumn>
//             <TableColumn
//               key="action"
//               className="bg-[#2561b4] text-white text-xs font-semibold border-white w-[10%]"
//             >
//               Action
//             </TableColumn>
//           </TableHeader>

//           <TableBody items={paginatedData}>
//             {(item: Department) => (
//               <TableRow
//                 key={item.id}
//                 className={item.serial % 2 === 0 ? "bg-[#f4f4f5]" : "bg-white"}
//               >
//                 {(columnKey) => (
//                   <TableCell className="text-xs font-medium text-gray-700 border-r border-gray-200 px-3 py-3 truncate rounded-md">
//                     {columnKey === "serial" ? (
//                       <div>{item.serial}</div>
//                     ) : columnKey === "action" ? (
//                       <div className="flex justify-center">
//                         <FaEdit className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm" />
//                       </div>
//                     ) : (
//                       <div>{item.name}</div>
//                     )}
//                   </TableCell>
//                 )}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

const DepartmentTable = () => {
  const { data, isError } = useGetOrganisationDepartmentsQuery(undefined);

  console.log("data:", data);

  return <CommonTable tableName="Department" limit={5} data={data?.data} />;
};

export default DepartmentTable;
