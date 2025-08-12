/* eslint-disable @typescript-eslint/no-explicit-any */
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

// PDF styling constants
const PDF_STYLES = {
  colors: {
    primary: [41, 128, 185] as [number, number, number],
    secondary: [52, 73, 94] as [number, number, number],
    text: [44, 62, 80] as [number, number, number],
    lightGray: [236, 240, 241] as [number, number, number],
  },
  fonts: {
    title: 16,
    subtitle: 12,
    header: 14,
    body: 10,
    small: 8,
  },
  margins: {
    top: 20,
    left: 14,
    right: 14,
    bottom: 20,
  },
};

/**
 * Formats date strings to a more readable format
 */
const formatDate = (dateString: string | undefined): string => {
  if (!dateString || dateString === "N/A") return "N/A";

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
};

const Actions = ({
  employee,
  organisation,
}: {
  employee: any;
  organisation: any;
}) => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const addCompanyHeader = async (doc: jsPDF): Promise<number> => {
    const { margins, fonts, colors } = PDF_STYLES;

    // Function to validate and load image
    const loadLogo = async (logoUrl: string): Promise<boolean> => {
      return new Promise((resolve) => {
        // Add detailed logging
        // console.log("Attempting to load logo from:", logoUrl);

        const img = new Image();

        // Set crossOrigin before setting src for external URLs
        if (!logoUrl.startsWith("data:")) {
          img.crossOrigin = "anonymous";
        }

        img.onload = () => {
          // console.log(
          //   "Image loaded successfully, dimensions:",
          //   img.width,
          //   "x",
          //   img.height
          // );

          try {
            // Create canvas to convert image to base64
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              console.warn("Could not get canvas context");
              resolve(false);
              return;
            }

            // Set reasonable dimensions to avoid memory issues
            const maxSize = 500;
            let { width, height } = img;

            if (width > maxSize || height > maxSize) {
              const scale = maxSize / Math.max(width, height);
              width *= scale;
              height *= scale;
            }

            canvas.width = width;
            canvas.height = height;

            // Clear canvas and draw image
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);

            const base64 = canvas.toDataURL("image/png", 0.9);
            // console.log(
            //   "Successfully converted to base64, length:",
            //   base64.length
            // );

            // Add image to PDF
            doc.addImage(
              base64,
              "PNG",
              margins.left + 25,
              margins.top - 5,
              25,
              25,
              undefined,
              "NONE"
            );

            resolve(true);
          } catch (error) {
            console.warn("Error processing logo image:", error);
            resolve(false);
          }
        };

        img.onerror = (error) => {
          console.warn("Failed to load logo image:", logoUrl, error);
          resolve(false);
        };

        img.onabort = () => {
          console.warn("Logo image loading was aborted:", logoUrl);
          resolve(false);
        };

        // Set timeout for loading
        const timeout = setTimeout(() => {
          console.warn("Logo loading timeout after 10 seconds");
          resolve(false);
        }, 10000); // Increased to 10 seconds

        // Clear timeout when image loads
        const originalOnload = img.onload;
        const originalOnerror = img.onerror;

        img.onload = (e) => {
          clearTimeout(timeout);
          originalOnload?.call(img, e);
        };

        img.onerror = (e) => {
          clearTimeout(timeout);
          originalOnerror?.call(img, e);
        };

        // Set the source last
        img.src = logoUrl;
      });
    };

    // Function to draw fallback logo
    const drawFallbackLogo = () => {
      try {
        // console.log("Drawing fallback logo");

        // Draw background rectangle
        doc.setFillColor(
          colors.lightGray[0],
          colors.lightGray[1],
          colors.lightGray[2]
        );
        doc.rect(margins.left + 25, margins.top - 5, 25, 25, "F");

        // Add border
        doc.setDrawColor(colors.text[0], colors.text[1], colors.text[2]);
        doc.setLineWidth(0.5);
        doc.rect(margins.left + 25, margins.top - 5, 25, 25);

        // Add "LOGO" text
        doc.setFontSize(8);
        doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
        doc.setFont("helvetica", "bold");
        doc.text("LOGO", margins.left + 35, margins.top + 8, {
          align: "center",
        });

        // console.log("Fallback logo drawn successfully");
      } catch (error) {
        console.warn("Fallback logo placeholder failed:", error);
      }
    };

    // Try to load logo
    const logoUrl = organisation?.organisationDetails?.logo;
    let logoLoaded = false;

    // console.log("Logo URL from organisation:", logoUrl);
    // console.log("Organisation data:", organisation?.organisationDetails);

    if (logoUrl && typeof logoUrl === "string" && logoUrl.trim() !== "") {
      const trimmedUrl = logoUrl.trim();

      try {
        // More comprehensive URL validation
        if (trimmedUrl.startsWith("data:image/")) {
          // console.log("Processing base64 image");
          logoLoaded = await loadLogo(trimmedUrl);
        } else if (
          trimmedUrl.startsWith("http://") ||
          trimmedUrl.startsWith("https://")
        ) {
          // console.log("Processing external URL");
          logoLoaded = await loadLogo(trimmedUrl);
        } else if (trimmedUrl.startsWith("/") || trimmedUrl.includes(".")) {
          // console.log("Processing relative/local URL");
          // Convert relative URLs to absolute
          const absoluteUrl = trimmedUrl.startsWith("/")
            ? `${window.location.origin}${trimmedUrl}`
            : trimmedUrl;
          logoLoaded = await loadLogo(absoluteUrl);
        } else {
          console.warn("Invalid logo URL format:", trimmedUrl);
        }
      } catch (error) {
        console.warn("Logo loading error:", error);
      }
    } else {
      console.warn("No valid logo URL provided. URL:", logoUrl);
    }

    // Draw fallback if logo failed to load
    if (!logoLoaded) {
      drawFallbackLogo();
    }

    const textStartX = margins.left + 55; // Adjust for logo space

    // Company name
    doc.setFontSize(fonts.title);
    doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    doc.setFont("helvetica", "bold");
    const companyName =
      organisation?.organisationDetails?.name || "Company Name";
    doc.text(companyName, textStartX, margins.top);

    // Company address
    doc.setFontSize(fonts.body);
    doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    doc.setFont("helvetica", "normal");
    const companyAddress =
      organisation?.organisationDetails?.address || "Company Address";
    doc.text(companyAddress, textStartX, margins.top + 8);

    // Report title
    doc.setFontSize(fonts.header);
    doc.setTextColor(
      colors.secondary[0],
      colors.secondary[1],
      colors.secondary[2]
    );
    doc.setFont("helvetica", "bold");
    doc.text("Employee Report", textStartX, margins.top + 20);

    // Add separator line
    doc.setDrawColor(
      colors.lightGray[0],
      colors.lightGray[1],
      colors.lightGray[2]
    );
    doc.setLineWidth(0.5);
    doc.line(
      margins.left,
      margins.top + 25,
      200 - margins.right,
      margins.top + 25
    );

    return margins.top + 35;
  };

  /**
   * Prepares employee data for the table with serial numbers
   */
  const prepareEmployeeData = (employee: any) => {
    const data = [
      // Personal details
      ["Employee Code", employee?.personalDetails?.employeeCode ?? "N/A"],
      ["Employee Name", employee?.personalDetails?.fullName ?? "N/A"],
      ["Gender", employee?.personalDetails?.gender ?? "N/A"],
      ["NI Number", employee?.personalDetails?.niNumber ?? "N/A"],
      ["Date of Birth", formatDate(employee?.personalDetails?.dateOfBirth)],
      ["Marital Status", employee?.personalDetails?.maritalStatus ?? "N/A"],
      ["Nationality", employee?.personalDetails?.nationality ?? "N/A"],
      ["Email", employee?.personalDetails?.email ?? "N/A"],
      ["Contact Number", employee?.personalDetails?.contactNo ?? "N/A"],
      ["Alternative Number", employee?.personalDetails?.alternativeNo ?? "N/A"],

      // Service details
      ["Department", employee?.serviceDetails?.department ?? "N/A"],
      ["Designation", employee?.serviceDetails?.designation ?? "N/A"],
      ["Employment Type", employee?.serviceDetails?.employeeType ?? "N/A"],
      ["Date of Joining", formatDate(employee?.serviceDetails?.dateOfJoining)],
      [
        "Date of Confirmation",
        formatDate(employee?.serviceDetails?.dateOfConfirmation),
      ],
      [
        "Contract Start Date",
        formatDate(employee?.serviceDetails?.contractStartDate),
      ],
      [
        "Contract End Date",
        formatDate(employee?.serviceDetails?.contractEndDate),
      ],
      ["Job Location", employee?.serviceDetails?.jobLocation ?? "N/A"],

      // transportation details
      ["Job Title", employee?.trainingDetails[0]?.title ?? "N/A"],
      ["Start Date", formatDate(employee?.trainingDetails[0]?.startDate)],
      ["End Date", formatDate(employee?.trainingDetails[0]?.endDate)],
      [
        "Years of Experience",
        employee?.trainingDetails[0]?.experience ?? "N/A",
      ],
      ["Job Description", employee?.trainingDetails[0]?.description ?? "N/A"],

      // Next of kin details
      [
        "Next of Kin Contact Name",
        employee?.nextOfKinDetails?.nextOfKinContactName ?? "N/A",
      ],
      [
        "Next of Kin Contact Relationship",
        employee?.nextOfKinDetails?.nextOfKinContactRelationship ?? "N/A",
      ],
      [
        "Next of Kin Contact Number",
        employee?.nextOfKinDetails?.nextOfKinContactNumber ?? "N/A",
      ],
      [
        "Next of Kin Contact Address",
        employee?.nextOfKinDetails?.nextOfKinContactAddress ?? "N/A",
      ],
      [
        "Next of Kin Contact Email",
        employee?.nextOfKinDetails?.nextOfKinContactEmail ?? "N/A",
      ],

      //
      // ["COS Number", details?.cosNumber ?? "N/A"],
      // ["COS Number Start Date", formatDate(details?.cosNumberStartDate)],
      // ["COS Number End Date", formatDate(details?.cosNumberEndDate)],

      [
        "Present Address",
        employee?.contactInfo?.addressLine1 ||
        employee?.contactInfo?.addressLine2 ||
        employee?.contactInfo?.addressLine3
          ? `${employee?.contactInfo?.addressLine1 || ""} ${
              employee?.contactInfo?.addressLine2 || ""
            } ${employee?.contactInfo?.addressLine3 || ""}`.trim()
          : "N/A",
      ],
      [
        "Proof Of Present Address",
        employee?.contactInfo.proofOfPresentAddress ? "Uploaded" : "N/A",
      ],

      // Passport and Visa details
      ["Passport No", employee?.passportDetails.passportNo ?? "N/A"],
      ["Nationality", employee?.passportDetails.nationality ?? "N/A"],
      ["Place Of Birth", employee?.passportDetails.placeOfBirth ?? "N/A"],
      ["Passport Issued By", employee?.passportDetails.issuedBy ?? "N/A"],
      ["Passport Issued Date", formatDate(employee?.passportDetails.issueDate)],
      [
        "Passport Expiry Date",
        formatDate(employee?.passportDetails.expiryDate),
      ],
      [
        "Passport Eligible Review Date",
        formatDate(employee?.passportDetails.eligibleReviewDate),
      ],
      [
        "Passport Document",
        employee?.passportDetails.document ? "Uploaded" : "N/A",
      ],
      [
        "Is this your current passport?",
        employee?.passportDetails.isCurrentStatus ? "Yes" : "No",
      ],
      ["Passport Remarks", employee?.passportDetails.remarks ?? "N/A"],

      // Visa details
      ["BRP/Visa No", employee?.visaDetails?.visaNo ?? "N/A"],
      ["Nationality", employee?.visaDetails?.nationality ?? "N/A"],
      [
        "Country of Residence",
        employee?.visaDetails?.countryOfResidence ?? "N/A",
      ],
      ["Visa Issued By", employee?.visaDetails?.issuedBy ?? "N/A"],
      ["Visa Issued Date", formatDate(employee?.visaDetails?.issueDate)],
      ["Visa Expiry Date", formatDate(employee?.visaDetails?.expiryDate)],
      [
        "Visa Eligible Review Date",
        formatDate(employee?.visaDetails.eligibleReviewDate),
      ],
      [
        "Visa Document",
        employee?.visaDetails.frontsideDocument ? "Uploaded" : "N/A",
      ],
      [
        "Is this your current visa?",
        employee?.visaDetails.isCurrentStatus ? "Yes" : "No",
      ],
      ["Visa Remarks", employee?.visaDetails.remarks ?? "N/A"],

      // EUSS details
      ["EUSS/Time Limit Ref. No.", employee?.eussDetails?.referenceNo ?? "N/A"],
      [
        "EUSS/Time Limit Nationality",
        employee?.eussDetails?.nationality ?? "N/A",
      ],
      [
        "EUSS/Time Limit Issued Date",
        formatDate(employee?.eussDetails?.issueDate),
      ],
      [
        "EUSS/Time Limit Expiry Date",
        formatDate(employee.eussDetails?.expiryDate),
      ],
      [
        "EUSS/Time Limit Eligible Review Date",
        formatDate(employee.eussDetails?.eligibleReviewDate),
      ],
      [
        "EUSS/Time Limit Document",
        employee.eussDetails?.document ? "Uploaded" : "N/A",
      ],
      ["EUSS/Time Limit Remarks", employee.eussDetails?.remarks ?? "N/A"],

      // DBS details
      ["DBS Type", employee?.dbsDetails.type ?? "N/A"],
      ["DBS Ref. No.", employee?.dbsDetails.referenceNo ?? "N/A"],
      ["DBS Nationality", employee?.dbsDetails.nationality ?? "N/A"],
      ["DBS Issued Date", formatDate(employee?.dbsDetails.issueDate)],
      ["DBS Expiry Date", formatDate(employee?.dbsDetails.expiryDate)],
      [
        "DBS Eligible Review Date",
        formatDate(employee?.dbsDetails.eligibleReviewDate),
      ],
      ["DBS Document", employee?.dbsDetails.document ?? "N/A"],
      ["DBS Remarks", employee?.dbsDetails?.remarks ?? "N/A"],

      // National ID details
      ["National Id No.", employee?.nationalIdDetails?.nationalIdNo ?? "N/A"],
      [
        "National Id Nationality",
        employee?.nationalIdDetails?.nationality ?? "N/A",
      ],
      [
        "National Id Country of Residence",
        employee?.nationalIdDetails?.countryOfResidence ?? "N/A",
      ],
      [
        "National Id Issued Date",
        formatDate(employee?.nationalIdDetails?.issueDate),
      ],
      [
        "National Id Expiry Date",
        formatDate(employee?.nationalIdDetails?.expiryDate),
      ],
      [
        "National Id Eligible Review Date",
        formatDate(employee?.nationalIdDetails?.eligibleReviewDate),
      ],
      [
        "National Id Document",
        employee?.nationalIdDetails?.document ? "Uploaded" : "N/A",
      ],
      ["National Id Remarks", employee?.nationalIdDetails?.remarks ?? "N/A"],

      // Bank details
      ["Bank Name", employee?.payDetails?.bankName ?? "N/A"],
      ["Branch Name", employee?.payDetails?.branchName ?? "N/A"],
      ["Sort Code", employee?.payDetails?.sortCode ?? "N/A"],
      ["Account Number", employee?.payDetails?.accountNo ?? "N/A"],
    ];

    // Add serial numbers to each row
    return data.map((row, index) => [index + 1, ...row]);
  };

  /**
   * Adds footer with generation date and page numbers (improved version)
   */
  const addFooter = (doc: jsPDF): void => {
    const { margins, fonts, colors } = PDF_STYLES;
    const pageCount = doc.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      // Generation date
      doc.setFontSize(fonts.small);
      doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
      doc.setFont("helvetica", "normal");

      const generatedDate = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      doc.text(`Generated on: ${generatedDate}`, margins.left, 285);

      // Page numbers
      doc.text(`Page ${i} of ${pageCount}`, 200 - margins.right - 30, 285);
    }
  };

  /**
   * Main function to generate and download employee PDF report
   */
  const handlePDFDownload = async () => {
    try {
      // console.log("Starting PDF generation...");
      // console.log("Employee data:", employee);

      // Validate employee data
      if (!employee || !employee.personalDetails) {
        throw new Error("Employee data is required");
      }

      // Create new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // console.log("PDF document created, adding header...");

      // Add company header
      const startY = await addCompanyHeader(doc);

      // console.log("Header added, preparing employee data...");

      // Prepare employee data
      const employeeData = prepareEmployeeData(employee);

      // console.log("Creating table...");

      // Create the main data table
      autoTable(doc, {
        startY: startY,
        head: [["S.No", "Field", "Details"]], // Updated header with serial number
        body: employeeData,
        theme: "striped",
        styles: {
          fontSize: PDF_STYLES.fonts.body,
          cellPadding: 4,
          textColor: PDF_STYLES.colors.text,
          lineColor: PDF_STYLES.colors.lightGray,
          lineWidth: 0.1,
        },
        headStyles: {
          fillColor: PDF_STYLES.colors.primary,
          textColor: [255, 255, 255],
          fontStyle: "bold",
          fontSize: PDF_STYLES.fonts.body + 1,
        },
        alternateRowStyles: {
          fillColor: [249, 249, 249],
        },
        columnStyles: {
          0: { cellWidth: 15, halign: "center" }, // Serial number column - centered and narrow
          1: { fontStyle: "bold", cellWidth: 50 }, // Field name column
          2: { cellWidth: "auto" }, // Details column - takes remaining space
        },
        margin: {
          left: PDF_STYLES.margins.left,
          right: PDF_STYLES.margins.right,
          bottom: 30, // Reserve space for footer
        },
        // Remove the problematic didDrawPage callback
        showFoot: "everyPage",
        footStyles: {
          fontSize: 0, // Hide default footer
        },
      });

      // console.log(
      //   "Table created. Pages before cleanup:",
      //   doc.getNumberOfPages()
      // );

      // Remove any empty pages
      const totalPages = doc.getNumberOfPages();
      for (let i = totalPages; i >= 1; i--) {
        doc.setPage(i);

        // Check if page has content (simple check by getting page info)
        const pageInfo = doc.getPageInfo(i);
        // Removed unused variable 'pageHeight'

        // If this is not the first page and appears to be empty, remove it
        if (i > 1 && pageInfo.objId) {
          // Get the content length of current page
          const pageContent = doc.internal.pages[i];
          if (
            pageContent &&
            Array.isArray(pageContent) &&
            pageContent.length < 100
          ) {
            // Minimal content threshold
            // console.log(`Removing empty page ${i}`);
            doc.deletePage(i);
          }
        }
      }

      // console.log("Pages after cleanup:", doc.getNumberOfPages());

      // Add footer to remaining pages
      addFooter(doc);

      // Generate filename
      const employeeName = employee.personalDetails?.fullName || "employee";
      const sanitizedName = employeeName.replace(/[^a-zA-Z0-9]/g, "_");
      const timestamp = new Date().toISOString().split("T")[0];
      const filename = `${sanitizedName}_report_${timestamp}.pdf`;

      // console.log("Saving PDF with filename:", filename);

      // Save the PDF
      doc.save(filename);

      // console.log(`PDF generated successfully: ${filename}`);
    } catch (error) {
      console.error("Error generating PDF:", error);

      // Show user-friendly error message
      if (error instanceof Error) {
        alert(`Failed to generate PDF: ${error.message}`);
      } else {
        alert(
          "An unexpected error occurred while generating the PDF. Please try again."
        );
      }
    }
  };

  const handleExcelDownload = () => {
    const data = [
      {
        "Employee Code": employee.personalDetails?.employeeCode ?? "N/A",
        "Full Name": employee.personalDetails?.fullName ?? "N/A",
        Email: employee.personalDetails?.email ?? "N/A",
        Contact: employee.personalDetails?.contactNo ?? "N/A",
        Designation: employee.personalDetails?.designation ?? "N/A",
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
          href={`/dashboard/edit-employee/${employee.id}`}
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
};

export default Actions;
