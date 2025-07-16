import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@heroui/react";
import { FaEdit, FaFilePdf, FaFileExcel } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const Actions = ({ employee }: { employee: any }) => {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const handlePDFDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("SPICE TOWER LIMITED", 14, 15);
    doc.setFontSize(10);
    doc.text("198 Marple Road, Stockport, SK2 5EU, United Kingdom", 14, 22);
    doc.setFontSize(14);
    doc.text("Employee Report", 14, 32);

    const employeeDetails = [
      ["Employee Code", employee.personalDetails?.employeeCode ?? "N/A"],
      ["Employee Name", employee.personalDetails?.fullName ?? "N/A"],
      ["Gender", employee.personalDetails?.gender ?? "N/A"],
      ["NI Number", employee.personalDetails?.niNumber ?? "N/A"],
      ["Date of Birth", employee.personalDetails?.dateOfBirth ?? "N/A"],
      ["Marital Status", employee.personalDetails?.maritalStatus ?? "N/A"],
      ["Nationality", employee.personalDetails?.nationality ?? "N/A"],
      ["Email", employee.personalDetails?.email ?? "N/A"],
      ["Contact Number", employee.personalDetails?.contactNo ?? "N/A"],
      ["Designation", employee.personalDetails?.designation ?? "N/A"],
      ["Department", employee.personalDetails?.department ?? "N/A"],
      ["Date of Joining", employee.personalDetails?.dateOfJoining ?? "N/A"],
      ["Employment Type", employee.personalDetails?.employmentType ?? "N/A"],
      ["Job Location", employee.personalDetails?.jobLocation ?? "N/A"],
      ["Passport No", employee.personalDetails?.passportNo ?? "N/A"],
      ["Passport Issued Date", employee.personalDetails?.passportIssuedDate ?? "N/A"],
      ["Passport Expiry Date", employee.personalDetails?.passportExpiryDate ?? "N/A"],
      ["Visa Expiry Date", employee.personalDetails?.visaExpireDate ?? "N/A"],
      ["Address", employee.personalDetails?.address ?? "N/A"],
    ];

    autoTable(doc, {
      startY: 40,
      head: [["Type", "Particulars"]],
      body: employeeDetails,
      theme: "grid",
      styles: { fontSize: 9 },
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save(`${employee.personalDetails?.fullName || "employee"}_report.pdf`);
  };

  const handleExcelDownload = () => {
    const data = [
      {
        "Employee Code": employee.personalDetails?.employeeCode ?? "N/A",
        "Full Name": employee.personalDetails?.fullName ?? "N/A",
        "Email": employee.personalDetails?.email ?? "N/A",
        "Contact": employee.personalDetails?.contactNo ?? "N/A",
        "Designation": employee.personalDetails?.designation ?? "N/A",
      },
    ];
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employee");
    XLSX.writeFile(workbook, `${employee.personalDetails?.fullName}_data.xlsx`);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size="sm"
          className="bg-hrms-blue-hover text-sm font-jura text-white font-semibold"
        >
          Action
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
        <DropdownItem
          key="edit"
          startContent={<FaEdit className={iconClasses} />}
          as={Link}
          href={`/dashboard/edit-employee/${id}`}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="pdf"
          onClick={handlePDFDownload}
          startContent={<FaFilePdf className={iconClasses} />}
        >
          Download PDF
        </DropdownItem>
        <DropdownItem
          key="excel"
          onClick={handleExcelDownload}
          startContent={<FaFileExcel className={iconClasses} />}
        >
          Download Excel
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
