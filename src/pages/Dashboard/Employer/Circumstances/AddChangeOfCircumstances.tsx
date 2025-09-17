/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@heroui/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { z } from "zod";
import { useGetOrgaisationEmployeesQuery } from "../../../../redux/features/employer/createOrganisation";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../../redux/features/employee/createEmployee";
import {
  RHFDatepicker,
  RHFFileInput,
  RHFInput,
  RHFRadio,
  RHFSelect,
} from "../../../../components";
import { countries, dbsTypes, nationalities } from "../../../../data";
import {
  useGetOrganisationDepartmentsQuery,
  useGetOrganisationDesignationsQuery,
} from "../../../../redux/features/employer/hcmMaster";
import { useEffect } from "react";

// Define the schema for the edit employee form
const editEmployeeSchema = z.object({
  selectedEmployee: z.string().min(1, "Please select an employee"),
  // Personal Information
  employeeCode: z.string().min(1, "Employee code is required"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  fullName: z.string().min(1, "Full name is required"),
  department: z.string().min(1, "Department is required"),
  jobTitle: z.string().optional(),
  contactNo: z.string().min(1, "Contact number is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  niNumber: z.string().optional(),
  nationality: z.string().min(1, "Nationality is required"),

  // Contact Information
  postCode: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  addressLine3: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  proofOfAddress: z.any().optional(),

  // Passport Details
  passportNo: z.string().optional(),
  passportNationality: z.string().optional(),
  placeOfBirth: z.string().optional(),
  passportIssuedBy: z.string().optional(),
  passportIssueDate: z.string().optional(),
  passportExpiryDate: z.string().optional(),
  passportEligibleReviewDate: z.string().optional(),
  passportDocument: z.any().optional(),
  passportStatus: z.string().optional(),
  passportRemarks: z.string().optional(),

  // Visa Details
  visaNo: z.string().optional(),
  visaNationality: z.string().optional(),
  countryOfResidence: z.string().optional(),
  visaIssuedBy: z.string().optional(),
  visaIssueDate: z.string().optional(),
  visaExpiryDate: z.string().optional(),
  visaDocumentFront: z.any().optional(),
  visaDocumentBack: z.any().optional(),
  visaEligibleReviewDate: z.any().optional(),
  visaStatus: z.string().optional(),
  visaRemarks: z.string().optional(),

  // EUSS Details
  eussReferenceNo: z.string().optional(),
  eussNationality: z.string().optional(),
  eussIssueDate: z.string().optional(),
  eussExpiryDate: z.string().optional(),
  eussReviewDate: z.string().optional(),
  eussDocument: z.any().optional(),
  eussStatus: z.string().optional(),
  eussRemarks: z.string().optional(),

  // DBS Details
  dbsType: z.string().optional(),
  dbsReferenceNo: z.string().optional(),
  dbsNationality: z.string().optional(),
  dbsIssueDate: z.string().optional(),
  dbsExpiryDate: z.string().optional(),
  dbsEligibleReviewDate: z.string().optional(),
  dbsDocument: z.any().optional(),
  dbsStatus: z.string().optional(),
  dbsRemarks: z.string().optional(),

  // National ID Details
  nationalIdNo: z.string().optional(),
  nationalIdNationality: z.string().optional(),
  nationalIdCountryOfResidence: z.string().optional(),
  nationalIdIssueDate: z.string().optional(),
  nationalIdExpiryDate: z.string().optional(),
  nationalIdDocument: z.any().optional(),
  nationalIdStatus: z.string().optional(),
  nationalIdRemarks: z.string().optional(),

  // Other Details
  changedDate: z.string().optional(),
  remarksOrRestriction: z.string().optional(),
  awareOfContactChange: z.string().optional(),
  awareOfHomeOfficeInterview: z.string().optional(),

  employerEmail: z.string().email("Valid email is required"),
});

type EditEmployeeFormType = z.infer<typeof editEmployeeSchema>;

const AddChangeOfCircumstances = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EditEmployeeFormType>({
    resolver: zodResolver(editEmployeeSchema),
  });

  const {
    data: employeesData,
    isError,
    isLoading,
    refetch,
  } = useGetOrgaisationEmployeesQuery(undefined);
  const { data: departmentData } =
    useGetOrganisationDepartmentsQuery(undefined);
  const { data: designationData } =
    useGetOrganisationDesignationsQuery(undefined);
  const [updateEmployee] = useUpdateEmployeeMutation();
  //   const [employees, setEmployees] = useState([]); // This would come from an API cal
  //   const employees = data?.
  console.log(designationData);

  const selectedEmployee = watch("selectedEmployee");
  const employeeValue = useGetEmployeeByIdQuery(selectedEmployee);
  console.log(employeeValue);
  useEffect(() => {
    // if (!selectedEmployee) return;
    //   const employeeValue = useGetEmployeeByIdQuery("687178fa86c4d5bdb3e0803d");

    const emp = employeeValue?.data?.data;
    if (!emp) return;

    // Personal Details
    setValue("employeeCode", emp.personalDetails?.employeeCode || "");
    setValue("firstName", emp.personalDetails?.firstName || "");
    setValue("middleName", emp.personalDetails?.middleName || "");
    setValue("lastName", emp.personalDetails?.lastName || "");
    setValue("fullName", emp.personalDetails?.fullName || "");
    setValue("contactNo", emp.personalDetails?.contactNo || "");
    setValue("dateOfBirth", emp.personalDetails?.dateOfBirth || "");
    setValue("niNumber", emp.personalDetails?.niNumber || "");
    setValue("nationality", emp.passportDetails?.nationality || "");
    setValue("department", emp.serviceDetails.department || "");
    setValue("jobTitle", emp.serviceDetails.designation || "");

    // Contact Info
    setValue("postCode", emp.contactInfo?.postCode || "");
    setValue("addressLine1", emp.contactInfo?.addressLine1 || "");
    setValue("addressLine2", emp.contactInfo?.addressLine2 || "");
    setValue("addressLine3", emp.contactInfo?.addressLine3 || "");
    setValue("city", emp.contactInfo?.city || "");
    setValue("country", emp.contactInfo?.country || "");

    //passport information
    setValue("passportNo", emp.passportDetails?.passportNo || "");
    setValue("passportNationality", emp.passportDetails?.nationality || "");
    setValue("placeOfBirth", emp.passportDetails?.placeOfBirth || "");
    setValue("passportIssuedBy", emp.passportDetails?.issuedBy || "");
    setValue("passportIssueDate", emp.passportDetails?.issueDate || "");
    setValue("passportExpiryDate", emp.passportDetails?.expiryDate || "");
    setValue(
      "passportEligibleReviewDate",
      emp.passportDetails?.eligibleReviewDate || ""
    );
    setValue("passportDocument", emp.passportDetails?.document || "");
    setValue("passportRemarks", emp.passportDetails?.remarks || "");
    setValue("passportStatus", emp.passportDetails?.isCurrentStatus || "");

    // --- Visa Details ---
    setValue("visaNo", emp.visaDetails?.visaNo || "");
    setValue("visaNationality", emp.visaDetails?.nationality || "");
    setValue("countryOfResidence", emp.visaDetails?.countryOfResidence || "");
    setValue("visaIssuedBy", emp.visaDetails?.issuedBy || "");
    setValue("visaIssueDate", emp.visaDetails?.issueDate || "");
    setValue("visaExpiryDate", emp.visaDetails?.expiryDate || "");
    setValue(
      "visaEligibleReviewDate",
      emp.visaDetails?.eligibleReviewDate || ""
    );
    setValue("visaDocumentFront", emp.visaDetails?.frontsideDocument || "");
    setValue("visaDocumentBack", emp.visaDetails?.backsideDocument || "");
    setValue("visaRemarks", emp.visaDetails?.remarks || "");
    setValue("visaStatus", emp.visaDetails?.isCurrentStatus || "");

    // Euss Details
    setValue("eussReferenceNo", emp.eussDetails?.referenceNo || "");
    setValue("eussNationality", emp.eussDetails?.nationality || "");
    setValue("eussIssueDate", emp.eussDetails?.issueDate || "");
    setValue("eussExpiryDate", emp.eussDetails?.expiryDate || "");
    setValue("eussReviewDate", emp.eussDetails?.eligibleReviewDate || "");
    setValue("eussDocument", emp.eussDetails?.document || "");
    setValue("eussRemarks", emp.eussDetails?.remarks || "");
    setValue("eussStatus", emp.eussDetails?.isCurrentStatus || "");

    // Dbs Details
    setValue("dbsType", emp.dbsDetails?.dbsType || "");
    setValue("dbsReferenceNo", emp.dbsDetails?.referenceNo || "");
    setValue("dbsNationality", emp.dbsDetails?.nationality || "");
    setValue("dbsIssueDate", emp.dbsDetails?.issueDate || "");
    setValue("dbsExpiryDate", emp.dbsDetails?.expiryDate || "");
    setValue("dbsDocument", emp.dbsDetails?.document || "");
    setValue("dbsRemarks", emp.dbsDetails?.remarks || "");
    setValue("dbsStatus", emp.dbsDetails?.isCurrentStatus || "");

    // National ID Details
    setValue("nationalIdNo", emp.nationalIdDetails?.nationalIdNo || "");
    setValue(
      "nationalIdNationality",
      emp.nationalIdDetails?.nationalIdNationality || ""
    );
    setValue(
      "nationalIdCountryOfResidence",
      emp.nationalIdDetails?.countryOfResidence || ""
    );
    setValue("nationalIdIssueDate", emp.nationalIdDetails?.issueDate || "");
    setValue("nationalIdExpiryDate", emp.nationalIdDetails?.expiryDate || "");
    setValue("nationalIdDocument", emp.nationalIdDetails?.document || "");
    setValue("nationalIdRemarks", emp.nationalIdDetails?.remarks || "");
    setValue("nationalIdStatus", emp.nationalIdDetails?.isCurrentStatus || "");
  }, [employeeValue?.data, setValue]);

  const handleSubmitForm = async (data: FieldValues) => {
    const formData = new FormData();

    const formattedData = {
      employeeId: data.selectedEmployee,
      personalInformation: {
        employeeCode: data.employeeCode,
        firstName: data.firstName,
        middleName: data.middleName || "",
        lastName: data.lastName,
        fullName: data.fullName,
        department: data.department,
        jobTitle: data.jobTitle || "",
        contactNo: data.contactNo,
        dateOfBirth: data.dateOfBirth,
        niNumber: data.niNumber || "",
        nationality: data.nationality,
      },
      contactInformation: {
        postCode: data.postCode || "",
        addressLine1: data.addressLine1 || "",
        addressLine2: data.addressLine2 || "",
        addressLine3: data.addressLine3 || "",
        city: data.city || "",
        country: data.country || "",
        proofOfAddress: "",
      },
      passportDetails: {
        passportNo: data.passportNo || "",
        nationality: data.passportNationality || "",
        placeOfBirth: data.placeOfBirth || "",
        issuedBy: data.passportIssuedBy || "",
        issueDate: data.passportIssueDate || "",
        expiryDate: data.passportExpiryDate || "",
        document: "",
        isCurrentStatus: data.passportStatus || "",
        remarks: data.passportRemarks || "",
      },
      visaDetails: {
        visaNo: data.visaNo || "",
        nationality: data.visaNationality || "",
        countryOfResidence: data.countryOfResidence || "",
        issuedBy: data.visaIssuedBy || "",
        issueDate: data.visaIssueDate || "",
        expiryDate: data.visaExpiryDate || "",
        documentFront: "",
        documentBack: "",
        isCurrentStatus: data.visaStatus || "",
        remarks: data.visaRemarks || "",
      },
      eussDetails: {
        referenceNo: data.eussReferenceNo || "",
        nationality: data.eussNationality || "",
        issueDate: data.eussIssueDate || "",
        expiryDate: data.eussExpiryDate || "",
        document: "",
        isCurrentStatus: data.eussStatus || "",
        remarks: data.eussRemarks || "",
      },
      dbsDetails: {
        dbsType: data.dbsType || "",
        referenceNo: data.dbsReferenceNo || "",
        nationality: data.dbsNationality || "",
        issueDate: data.dbsIssueDate || "",
        expiryDate: data.dbsExpiryDate || "",
        document: "",
        isCurrentStatus: data.dbsStatus || "",
        remarks: data.dbsRemarks || "",
      },
      nationalIdDetails: {
        nationalIdNo: data.nationalIdNo || "",
        nationality: data.nationalIdNationality || "",
        countryOfResidence: data.nationalIdCountryOfResidence || "",
        issueDate: data.nationalIdIssueDate || "",
        expiryDate: data.nationalIdExpiryDate || "",
        document: "",
        isCurrentStatus: data.nationalIdStatus || "",
        remarks: data.nationalIdRemarks || "",
      },
      otherDetails: {
        changedDate: data.changedDate || "",
        remarksOrRestriction: data.remarksOrRestriction || "",
        awareOfContactChange: data.awareOfContactChange || "",
        awareOfHomeOfficeInterview: data.awareOfHomeOfficeInterview || "",
      },
      employerEmail: data.employerEmail,
    };

    formData.append("data", JSON.stringify(formattedData));

    // Append files to FormData
    const fileFields = [
      "proofOfAddress",
      "passportDocument",
      "visaDocumentFront",
      "visaDocumentBack",
      "eussDocument",
      "dbsDocument",
      "nationalIdDocument",
    ];

    fileFields.forEach((field) => {
      const file = data[field];
      if (file) {
        formData.append(field, file);
      }
    });

    const toastId = toast.loading("Updating Employee...");
    try {
      await updateEmployee(formData).unwrap();
      toast.success("Employee updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to update employee", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  const values = watch("dateOfBirth");
  console.log(values);

  return (
    <div>
      {employeesData?.data ? (
        <main className="dashboard-padding">
          <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
            Create Change of Circumstances Form
          </h1>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* Personal Information */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                Personal Information
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFSelect
                  name="selectedEmployee"
                  control={control}
                  label="Select Employee"
                  placeholder="Choose an employee"
                  error={errors.selectedEmployee?.message}
                  options={employeesData?.data?.employees?.map(
                    (employee: any) => ({
                      _id: employee._id,
                      name:
                        employee.personalDetails?.fullName ||
                        "Unnamed Employee",
                      value: employee._id, // stored value in form
                    })
                  )}
                />

                <RHFInput
                  name="employeeCode"
                  control={control}
                  label="Employee Code"
                  placeholder="Employee code"
                  error={errors.employeeCode?.message}
                  disabled
                />

                <RHFInput
                  name="fullName"
                  control={control}
                  label="Existing Employee Name"
                  placeholder="Enter full name"
                  error={errors.fullName?.message}
                  disabled
                />

                <RHFInput
                  name="firstName"
                  control={control}
                  label="First Name"
                  placeholder="Enter first name"
                  error={errors.firstName?.message}
                  disabled
                />

                <RHFInput
                  name="middleName"
                  control={control}
                  label="Middle Name"
                  placeholder="Enter middle name"
                  error={errors.middleName?.message}
                />

                <RHFInput
                  name="lastName"
                  control={control}
                  label="Last Name"
                  placeholder="Enter last name"
                  error={errors.lastName?.message}
                />

                <RHFSelect
                  name="department"
                  control={control}
                  label="Department"
                  placeholder="Select department"
                  error={errors.department?.message}
                  options={
                    departmentData?.data?.map((dep: any) => ({
                      name: dep.name,
                      _id: dep._id,
                      value: dep.name,
                    })) || []
                  }
                />

                <RHFSelect
                  name="jobTitle"
                  control={control}
                  label="Job Title"
                  placeholder="Select job title"
                  error={errors.jobTitle?.message}
                  options={
                    designationData?.data?.map((des: any) => ({
                      name: des.name,
                      _id: des._id,
                      value: des.name,
                    })) || []
                  }
                />

                <RHFInput
                  name="contactNo"
                  control={control}
                  label="Contact Number"
                  placeholder="Enter contact number"
                  error={errors.contactNo?.message}
                />

                <RHFDatepicker
                  name="dateOfBirth"
                  control={control}
                  label="Date of Birth"
                  error={errors.dateOfBirth?.message}
                />

                <RHFInput
                  name="niNumber"
                  control={control}
                  label="NI Number"
                  placeholder="Enter NI Number"
                  error={errors.niNumber?.message}
                />

                <RHFSelect
                  name="nationality"
                  control={control}
                  label="Nationality"
                  placeholder="Select nationality"
                  error={errors.nationality?.message}
                  options={nationalities}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                Contact Information
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFInput
                  name="postCode"
                  control={control}
                  label="Post Code"
                  placeholder="Enter post code"
                  error={errors.postCode?.message}
                />

                <RHFInput
                  name="addressLine1"
                  control={control}
                  label="Address Line 1"
                  placeholder="Enter address line 1"
                  error={errors.addressLine1?.message}
                />

                <RHFInput
                  name="addressLine2"
                  control={control}
                  label="Address Line 2"
                  placeholder="Enter address line 2"
                  error={errors.addressLine2?.message}
                />

                <RHFInput
                  name="addressLine3"
                  control={control}
                  label="Address Line 3"
                  placeholder="Enter address line 3"
                  error={errors.addressLine3?.message}
                />

                <RHFInput
                  name="city"
                  control={control}
                  label="City"
                  placeholder="Enter city"
                  error={errors.city?.message}
                />

                <RHFSelect
                  name="country"
                  control={control}
                  label="Country"
                  placeholder="Select country"
                  error={errors.country?.message}
                  options={countries.map((country) => ({
                    _id: country._id,  
                    name: country.name,
                    value: country.name
                  }))}
                />

                <RHFFileInput
                  name="proofOfAddress"
                  control={control}
                  label="Proof of Address"
                  error={errors.proofOfAddress?.message}
                />
              </div>
            </div>

            {/* Passport Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                Passport Details
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFInput
                  name="passportNo"
                  control={control}
                  label="Passport Number"
                  placeholder="Enter passport number"
                  error={errors.passportNo?.message}
                />

                <RHFSelect
                  name="passportNationality"
                  control={control}
                  label="Nationality (Passport)"
                  placeholder="Select nationality"
                  error={errors.passportNationality?.message}
                  options={nationalities}
                  />

                <RHFInput
                  name="placeOfBirth"
                  control={control}
                  label="Place of Birth"
                  placeholder="Enter place of birth"
                  error={errors.placeOfBirth?.message}
                  />

                <RHFInput
                  name="passportIssuedBy"
                  control={control}
                  label="Issued By"
                  placeholder="Enter issuing authority"
                  error={errors.passportIssuedBy?.message}
                  disabled
                />

                <RHFDatepicker
                  name="passportIssueDate"
                  control={control}
                  label="Issue Date"
                  error={errors.passportIssueDate?.message}
                />

                <RHFDatepicker
                  name="passportExpiryDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.passportExpiryDate?.message}
                />

                <RHFDatepicker
                  name="passportEligibleReviewDate"
                  control={control}
                  label="Eligible Review Date"
                  error={errors.passportExpiryDate?.message}
                />

                <RHFFileInput
                  name="passportDocument"
                  control={control}
                  label="Passport Document"
                  error={errors.passportDocument?.message}
                />

                <RHFRadio
                  name="passportStatus"
                  control={control}
                  label="Is this your current status?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.passportStatus?.message}
                />

                <RHFInput
                  name="passportRemarks"
                  control={control}
                  label="Remarks"
                  placeholder="Enter remarks"
                  error={errors.passportRemarks?.message}
                />
              </div>
            </div>

            {/* Visa Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                Visa/BRP Details
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFInput
                  name="visaNo"
                  control={control}
                  label="Visa Number"
                  placeholder="Enter visa number"
                  error={errors.visaNo?.message}
                />

                <RHFSelect
                  name="visaNationality"
                  control={control}
                  label="Nationality (Visa)"
                  placeholder="Select nationality"
                  error={errors.visaNationality?.message}
                  options={nationalities}
                />

                <RHFSelect
                  name="countryOfResidence"
                  control={control}
                  label="Country of Residence"
                  placeholder="Select country"
                  error={errors.countryOfResidence?.message}
                  options={countries}
                />

                <RHFInput
                  name="visaIssuedBy"
                  control={control}
                  label="Issued By"
                  placeholder="Enter issuing authority"
                  error={errors.visaIssuedBy?.message}
                />

                <RHFDatepicker
                  name="visaIssueDate"
                  control={control}
                  label="Issue Date"
                  error={errors.visaIssueDate?.message}
                />

                <RHFDatepicker
                  name="visaExpiryDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.visaExpiryDate?.message}
                />

                <RHFDatepicker
                  name="visaEligibleReviewDate"
                  control={control}
                  label="Eligible Review Date"
                  error={errors.visaExpiryDate?.message}
                />

                <RHFFileInput
                  name="visaDocumentFront"
                  control={control}
                  label="Visa Document (Front)"
                  error={errors.visaDocumentFront?.message}
                />

                <RHFFileInput
                  name="visaDocumentBack"
                  control={control}
                  label="Visa Document (Back)"
                  error={errors.visaDocumentBack?.message}
                />

                <RHFRadio
                  name="visaStatus"
                  control={control}
                  label="Is this your current status?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.visaStatus?.message}
                />

                <RHFInput
                  name="visaRemarks"
                  control={control}
                  label="Remarks"
                  placeholder="Enter remarks"
                  error={errors.visaRemarks?.message}
                />
              </div>
            </div>

            {/* EUSS Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                EUSS/Time Limit Details
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFInput
                  name="eussReferenceNo"
                  control={control}
                  label="Reference Number"
                  placeholder="Enter reference number"
                  error={errors.eussReferenceNo?.message}
                />

                <RHFSelect
                  name="eussNationality"
                  control={control}
                  label="Nationality"
                  placeholder="Select nationality"
                  error={errors.eussNationality?.message}
                  options={nationalities.map((nat) => ({
                    _id: nat._id,
                    name: nat.name,
                    value: nat.name
                  }))}
                />

                <RHFDatepicker
                  name="eussIssueDate"
                  control={control}
                  label="Issue Date"
                  error={errors.eussIssueDate?.message}
                />

                <RHFDatepicker
                  name="eussExpiryDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.eussExpiryDate?.message}
                />

                <RHFDatepicker
                  name="eussReviewDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.eussExpiryDate?.message}
                />

                <RHFFileInput
                  name="eussDocument"
                  control={control}
                  label="EUSS Document"
                  error={errors.eussDocument?.message}
                />

                <RHFRadio
                  name="eussStatus"
                  control={control}
                  label="Is this your current status?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.eussStatus?.message}
                />

                <RHFInput
                  name="eussRemarks"
                  control={control}
                  label="Remarks"
                  placeholder="Enter remarks"
                  error={errors.eussRemarks?.message}
                />
              </div>
            </div>

            {/* DBS Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                DBS Details
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFSelect
                  name="dbsType"
                  control={control}
                  label="DBS Type"
                  placeholder="Select DBS type"
                  error={errors.dbsType?.message}
                  options={dbsTypes}
                />

                <RHFInput
                  name="dbsReferenceNo"
                  control={control}
                  label="Reference Number"
                  placeholder="Enter reference number"
                  error={errors.dbsReferenceNo?.message}
                />

                <RHFSelect
                  name="dbsNationality"
                  control={control}
                  label="Nationality"
                  placeholder="Select nationality"
                  error={errors.dbsNationality?.message}
                  options={nationalities.map((nat) => ({
                    _id: nat._id,
                    name: nat.name,
                    value: nat.name
                  }))}
                />

                <RHFDatepicker
                  name="dbsIssueDate"
                  control={control}
                  label="Issue Date"
                  error={errors.dbsIssueDate?.message}
                />

                <RHFDatepicker
                  name="dbsExpiryDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.dbsExpiryDate?.message}
                />

                <RHFDatepicker
                  name="dbsEligibleReviewDate"
                  control={control}
                  label="Eligible Review Date"
                  error={errors.dbsEligibleReviewDate?.message}
                />

                <RHFFileInput
                  name="dbsDocument"
                  control={control}
                  label="DBS Document"
                  error={errors.dbsDocument?.message}
                />

                <RHFRadio
                  name="dbsStatus"
                  control={control}
                  label="Is this your current status?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.dbsStatus?.message}
                />

                <RHFInput
                  name="dbsRemarks"
                  control={control}
                  label="Remarks"
                  placeholder="Enter remarks"
                  error={errors.dbsRemarks?.message}
                />
              </div>
            </div>

            {/* National ID Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                National ID Details
              </h1>
              <div className="grid grid-cols-4 gap-5 pt-5">
                <RHFInput
                  name="nationalIdNo"
                  control={control}
                  label="National ID Number"
                  placeholder="Enter national ID number"
                  error={errors.nationalIdNo?.message}
                />

                <RHFSelect
                  name="nationalIdNationality"
                  control={control}
                  label="Nationality"
                  placeholder="Select nationality"
                  error={errors.nationalIdNationality?.message}
                  options={nationalities}
                />

                <RHFSelect
                  name="nationalIdCountryOfResidence"
                  control={control}
                  label="Country of Residence"
                  placeholder="Select country"
                  error={errors.nationalIdCountryOfResidence?.message}
                  options={countries}
                />

                <RHFDatepicker
                  name="nationalIdIssueDate"
                  control={control}
                  label="Issue Date"
                  error={errors.nationalIdIssueDate?.message}
                />

                <RHFDatepicker
                  name="nationalIdExpiryDate"
                  control={control}
                  label="Expiry Date"
                  error={errors.nationalIdExpiryDate?.message}
                />

                <RHFFileInput
                  name="nationalIdDocument"
                  control={control}
                  label="National ID Document"
                  error={errors.nationalIdDocument?.message}
                />

                <RHFRadio
                  name="nationalIdStatus"
                  control={control}
                  label="Is this your current status?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  error={errors.nationalIdStatus?.message}
                />

                <RHFInput
                  name="nationalIdRemarks"
                  control={control}
                  label="Remarks"
                  placeholder="Enter remarks"
                  error={errors.nationalIdRemarks?.message}
                />
              </div>
            </div>

            {/* Other Details */}
            <div className="pt-5">
              <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
                Other Details
              </h1>
              <div className="grid grid-cols-2 gap-5 pt-5">
                <RHFDatepicker
                  name="changedDate"
                  control={control}
                  label="Changed Date"
                  error={errors.changedDate?.message}
                />

                <RHFInput
                  name="remarksOrRestriction"
                  control={control}
                  label="Remarks or Restriction"
                  placeholder="Enter remarks or restriction"
                  error={errors.remarksOrRestriction?.message}
                />
                  <RHFRadio
                    name="awareOfContactChange"
                    control={control}
                    label="Aware of Contact Change?"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "n/a", label: "N/A" },
                    ]}
                    error={errors.awareOfContactChange?.message}
                  />

                  <RHFRadio
                    name="awareOfHomeOfficeInterview"
                    control={control}
                    label="Aware of Home Office Interview?"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "n/a", label: "N/A" },
                    ]}
                    error={errors.awareOfHomeOfficeInterview?.message}
                  />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-5 pb-10">
              <div className="mt-6">
                <Button
                  type="submit"
                  color="primary"
                  className="bg-hrms-blue text-white"
                >
                  Update Employee
                </Button>
              </div>
            </div>
          </form>
        </main>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-xl font-bold text-red-700">
            Something went wrong. Please try again later.
          </p>
          <Button
            onPress={refetch}
            className="bg-hrms-blue-hover text-white mt-4 font-semibold text-lg"
          >
            Try Again
          </Button>
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-semibold">Loading Add Change of Circumstances Form...</p>
        </div>
      ) : null}
    </div>
  );
};

export default AddChangeOfCircumstances;