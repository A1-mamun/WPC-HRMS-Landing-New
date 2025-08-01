/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Checkbox, CheckboxGroup, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { employeeFileFields } from "../../../constants/employee";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  annualPays,
  bankNames,
  countries,
  dbsTypes,
  deductions,
  employmentTypes,
  genderOptions,
  kinRelationships,
  maritalStatus,
  nationalities,
  payGroups,
  paymentCurrencies,
  paymentModes,
  paymentTypes,
  taxables,
  taxCodes,
  wedgesPayModes,
} from "../../../data";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../redux/features/employee/createEmployee";
import {
  RHFDatepicker,
  RHFFileInput,
  RHFInput,
  RHFRadio,
  RHFSelect,
} from "../../../components";
import { useParams } from "react-router-dom";
import {
  EmployeeUpdateFormSchemaType,
  updateEmployeeDocumentsSchema,
} from "../../../schemas/updateEmployeeDocumentsSchema";
const EditEmployee = () => {
  const { id } = useParams();

  // fetch employee data by id
  const {
    data: employeeData,
    isLoading: employeeLoading,
    error: employeeError,
  } = useGetEmployeeByIdQuery(id);

  const [updateEmployee] = useUpdateEmployeeMutation();

  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeUpdateFormSchemaType>({
    resolver: zodResolver(updateEmployeeDocumentsSchema),
  });
  // console.log("Employee Data:", employeeData);

  useEffect(() => {
    if (employeeData?.data) {
      reset({
        employeeCode: employeeData?.data?.personalDetails.employeeCode,
        firstName: employeeData?.data?.personalDetails.firstName,
        middleName: employeeData?.data?.personalDetails.middleName,
        lastName: employeeData?.data?.personalDetails.lastName,
        gender: employeeData?.data?.personalDetails.gender,
        niNumber: employeeData?.data?.personalDetails.niNumber,
        dateOfBirth: employeeData?.data?.personalDetails.dateOfBirth,
        maritalStatus: employeeData?.data?.personalDetails.maritalStatus,
        nationality: employeeData?.data?.personalDetails.nationality,
        contactNumber: employeeData?.data?.personalDetails.contactNo,
        alternativeNumber: employeeData?.data?.personalDetails.alternativeNo,
        department: employeeData?.data?.serviceDetails.department,
        designation: employeeData?.data?.serviceDetails.designation,
        dateOfJoining: employeeData?.data?.serviceDetails.dateOfJoining,
        employeeType: employeeData?.data?.serviceDetails.employeeType,
        dateOfConfirmation:
          employeeData?.data?.serviceDetails.dateOfConfirmation,
        contractStartDate: employeeData?.data?.serviceDetails.contractStartDate,
        contractEndDate: employeeData?.data?.serviceDetails.contractEndDate,
        jobLocation: employeeData?.data?.serviceDetails.jobLocation,
        nextOfKinContactName:
          employeeData?.data?.nextOfKinDetails.nextOfKinContactName,
        nextOfKinContactRelationship:
          employeeData?.data?.nextOfKinDetails.nextOfKinContactRelationship,
        nextOfKinContactEmail:
          employeeData?.data?.nextOfKinDetails.nextOfKinContactEmail,
        nextOfKinContactNumber:
          employeeData?.data?.nextOfKinDetails.nextOfKinContactNumber,
        nextOfKinContactAddress:
          employeeData?.data?.nextOfKinDetails.nextOfKinContactAddress,
        titleCertifiedLicense:
          employeeData?.data?.certifiedMembership.licenseTitle,
        licenseNumber: employeeData?.data?.certifiedMembership.licenseNo,
        issueDate: employeeData?.data?.certifiedMembership.issueDate,
        expiryDate: employeeData?.data?.certifiedMembership.expiryDate,
        postCode: employeeData?.data?.contactInfo.postCode,
        addressLine1: employeeData?.data?.contactInfo.addressLine1,
        addressLine2: employeeData?.data?.contactInfo.addressLine2,
        addressLine3: employeeData?.data?.contactInfo.addressLine3,
        city: employeeData?.data?.contactInfo.city,
        country: employeeData?.data?.contactInfo.country,
        passportNumber: employeeData?.data?.passportDetails.passportNo,
        passportNationality: employeeData?.data?.passportDetails.nationality,
        placeOfBirth: employeeData?.data?.passportDetails.placeOfBirth,
        passportIssuedBy: employeeData?.data?.passportDetails.issuedBy,
        passportIssueDate: employeeData?.data?.passportDetails.issueDate,
        passportExpiryDate: employeeData?.data?.passportDetails.expiryDate,
        passportEligibleReviewDate:
          employeeData?.data?.passportDetails.eligibleReviewDate,
        passportRemarks: employeeData?.data?.passportDetails.remarks,
        passportStatus: employeeData?.data?.passportDetails.isCurrentStatus,
        visaNumber: employeeData?.data?.visaDetails.visaNo,
        visaNationality: employeeData?.data?.visaDetails.nationality,
        countryOfResidence: employeeData?.data?.visaDetails.countryOfResidence,
        visaIssuedBy: employeeData?.data?.visaDetails.issuedBy,
        visaIssueDate: employeeData?.data?.visaDetails.issueDate,
        visaExpiryDate: employeeData?.data?.visaDetails.expiryDate,
        visaEligibleReviewDate:
          employeeData?.data?.visaDetails.eligibleReviewDate,
        visaRemarks: employeeData?.data?.visaDetails.remarks,
        visaStatus: employeeData?.data?.visaDetails.isCurrentStatus,
        eussReferenceNumber: employeeData?.data?.eussDetails.referenceNo,
        eussNationality: employeeData?.data?.eussDetails.nationality,
        eussIssueDate: employeeData?.data?.eussDetails.issueDate,
        eussExpiryDate: employeeData?.data?.eussDetails.expiryDate,
        eussEligibleReviewDate:
          employeeData?.data?.eussDetails.eligibleReviewDate,
        eussRemarks: employeeData?.data?.eussDetails.remarks,
        eussStatus: employeeData?.data?.eussDetails.isCurrentStatus,
        dbsType: employeeData?.data?.dbsDetails.type,
        dbsReferenceNumber: employeeData?.data?.dbsDetails.referenceNo,
        dbsNationality: employeeData?.data?.dbsDetails.nationality,
        dbsIssueDate: employeeData?.data?.dbsDetails.issueDate,
        dbsExpiryDate: employeeData?.data?.dbsDetails.expiryDate,
        dbsEligibleReviewDate:
          employeeData?.data?.dbsDetails.eligibleReviewDate,
        dbsRemarks: employeeData?.data?.dbsDetails.remarks,
        dbsStatus: employeeData?.data?.dbsDetails.isCurrentStatus,
        nationalIdNumber: employeeData?.data?.nationalIdDetails.nationalIdNo,
        nationalIdNationality:
          employeeData?.data?.nationalIdDetails.nationality,
        nationalIdCountryOfResidence:
          employeeData?.data?.nationalIdDetails.countryOfResidence,
        nationalIdIssueDate: employeeData?.data?.nationalIdDetails.issueDate,
        nationalIdExpiryDate: employeeData?.data?.nationalIdDetails.expiryDate,
        nationalIdEligibleReviewDate:
          employeeData?.data?.nationalIdDetails.eligibleReviewDate,
        nationalIdRemarks: employeeData?.data?.nationalIdDetails.remarks,
        nationalIdStatus: employeeData?.data?.nationalIdDetails.isCurrentStatus,
        payGroup: employeeData?.data?.payDetails.paymentGroup,
        wedgesPayMode: employeeData?.data?.payDetails.wedgesPaymentMode,
        annualPay: employeeData?.data?.payDetails.annualPay,
        paymentType: employeeData?.data?.payDetails.paymentType,
        basicDailyWedges: employeeData?.data?.payDetails.basicDailyWedges,
        minWorkingHour: employeeData?.data?.payDetails.minWorkingHour,
        rate: employeeData?.data?.payDetails.rate,
        taxCode: employeeData?.data?.payDetails.taxCode,
        taxReference: employeeData?.data?.payDetails.taxReference,
        paymentMode: employeeData?.data?.payDetails.paymentMode,
        bankName: employeeData?.data?.payDetails.bankName,
        branchName: employeeData?.data?.payDetails.branchName,
        accountNo: employeeData?.data?.payDetails.accountNo,
        sortCode: employeeData?.data?.payDetails.sortCode,
        paymentCurrency: employeeData?.data?.payDetails.paymentCurrency,
        educationalDetails: employeeData?.data?.educationalDetails || [],
        jobDetails: employeeData?.data?.jobDetails || [],
        trainingDetails: employeeData?.data?.trainingDetails || [],
        otherDetails: employeeData?.data?.otherDetails || [],
      });

      setEducationalDetails(employeeData?.data?.educationalDetails || []);
      setJobDetails(employeeData?.data?.jobDetails || []);
      setTrainingDetails(employeeData?.data?.trainingDetails || []);
      setOtherDetails(employeeData?.data?.otherDetails || []);
    }
  }, [employeeData]);

  // state for managing the expandable educational details fields
  const [educationalDetails, setEducationalDetails] = useState([
    {
      qualification: "",
      subject: "",
      institutionName: "",
      awardingBody: "",
      yearOfPassing: "",
      percentage: "",
      grade: "",
      transcriptDocument: null,
      certificateDocument: null,
    },
  ]);

  // state for managing the expandable job details fields
  const [jobDetails, setJobDetails] = useState([
    {
      title: "",
      startDate: "",
      endDate: "",
      experience: "",
      description: "",
      responsibilities: "",
    },
  ]);

  // state for managing the expandable training details fields
  const [trainingDetails, setTrainingDetails] = useState([
    {
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  // state for managing the expandable other details fields
  const [otherDetails, setOtherDetails] = useState([
    {
      documentName: "",
      referenceNo: "",
      nationality: "",
      issueDate: "",
      expiryDate: "",
      eligibleReviewDate: "",
      document: null,
      remarks: "",
      isCurrentStatus: "",
    },
  ]);

  // educational details add row fanction
  const handleAddRow = () => {
    setEducationalDetails([
      ...educationalDetails,
      {
        qualification: "",
        subject: "",
        institutionName: "",
        awardingBody: "",
        yearOfPassing: "",
        percentage: "",
        grade: "",
        transcriptDocument: null,
        certificateDocument: null,
      },
    ]);
  };

  // educational details remove row fanction
  const handleRemoveRow = (index: any) => {
    setEducationalDetails(educationalDetails.filter((_, i) => i !== index));
  };

  // job details add row fanction
  const handleAddJobRow = () => {
    setJobDetails([
      ...jobDetails,
      {
        title: "",
        startDate: "",
        endDate: "",
        experience: "",
        description: "",
        responsibilities: "",
      },
    ]);
  };

  // job details remove row fanction
  const handleRemoveJobRow = (index: any) => {
    setJobDetails(jobDetails.filter((_, i) => i !== index));
  };

  // training details add row fanction
  const handleAddTrainingRow = () => {
    setTrainingDetails([
      ...trainingDetails,
      {
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  // training details remove row fanction
  const handleRemoveTrainingRow = (index: any) => {
    setTrainingDetails(trainingDetails.filter((_, i) => i !== index));
  };

  // other details add row fanction
  const handleAddOtherDetailsRow = () => {
    setOtherDetails([
      ...otherDetails,
      {
        documentName: "",
        referenceNo: "",
        nationality: "",
        issueDate: "",
        expiryDate: "",
        eligibleReviewDate: "",
        document: null,
        remarks: "",
        isCurrentStatus: "",
      },
    ]);
  };

  // other details remove row fanction
  const handleRemoveOtherDetailsRow = (index: any) => {
    setOtherDetails(otherDetails.filter((_, i) => i !== index));
  };

  const handleSubmitForm = async (data: FieldValues) => {
    const formData = new FormData();
    // console.log("Form Data:", data);
    const formattedData = {
      employeeData: {
        personalDetails: {
          employeeCode: data.employeeCode,
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          gender: data.gender,
          niNumber: data.niNumber,
          dateOfBirth: data.dateOfBirth,
          maritalStatus: data.maritalStatus,
          nationality: data.nationality,
          email: employeeData?.data?.personalDetails.email,
          contactNo: data.contactNumber,
          alternativeNo: data.alternativeNumber,
        },
        serviceDetails: {
          department: data.department,
          designation: data.designation,
          dateOfJoining: data.dateOfJoining,
          employeeType: data.employeeType,
          dateOfConfirmation: data.dateOfConfirmation,
          contractStartDate: data.contractStartDate,
          contractEndDate: data.contractEndDate,
          jobLocation: data.jobLocation,
          profilePicture: employeeData?.data?.serviceDetails.profilePicture,
        },
        nextOfKinDetails: {
          nextOfKinContactName: data.nextOfKinContactName,
          nextOfKinContactRelationship: data.nextOfKinContactRelationship,
          nextOfKinContactEmail: data.nextOfKinContactEmail,
          nextOfKinContactNumber: data.nextOfKinContactNumber,
          nextOfKinContactAddress: data.nextOfKinContactAddress,
        },
        certifiedMembership: {
          licenseTitle: data.titleCertifiedLicense,
          licenseNo: data.licenseNumber,
          issueDate: data.issueDate,
          expiryDate: data.expiryDate,
        },
        contactInfo: {
          postCode: data.postCode,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          addressLine3: data.addressLine3,
          city: data.city,
          country: data.country,
          proofOfAddress: employeeData?.data?.contactInfo.proofOfAddress,
        },
        passportDetails: {
          passportNo: data.passportNumber,
          nationality: data.passportNationality,
          placeOfBirth: data.placeOfBirth,
          issuedBy: data.passportIssuedBy,
          issueDate: data.passportIssueDate,
          expiryDate: data.passportExpiryDate,
          eligibleReviewDate: data.passportEligibleReviewDate,
          document: employeeData?.data?.passportDetails.document,
          remarks: data.passportRemarks,
          isCurrentStatus: data.passportStatus,
        },
        visaDetails: {
          visaNo: data.visaNumber,
          nationality: data.visaNationality,
          countryOfResidence: data.countryOfResidence,
          issuedBy: data.visaIssuedBy,
          issueDate: data.visaIssueDate,
          expiryDate: data.visaExpiryDate,
          eligibleReviewDate: data.visaEligibleReviewDate,
          frontsideDocument: employeeData?.data?.visaDetails.frontsideDocument,
          backsideDocument: employeeData?.data?.visaDetails.backsideDocument,
          remarks: data.visaRemarks,
          isCurrentStatus: data.visaStatus,
        },
        eussDetails: {
          referenceNo: data.eussReferenceNumber,
          nationality: data.eussNationality,
          issueDate: data.eussIssueDate,
          expiryDate: data.eussExpiryDate,
          eligibleReviewDate: data.eussEligibleReviewDate,
          document: employeeData?.data?.eussDetails.document,
          remarks: data.eussRemarks,
          isCurrentStatus: data.eussStatus,
        },
        dbsDetails: {
          type: data.dbsType,
          referenceNo: data.dbsReferenceNumber,
          nationality: data.dbsNationality,
          issueDate: data.dbsIssueDate,
          expiryDate: data.dbsExpiryDate,
          eligibleReviewDate: data.dbsEligibleReviewDate,
          document: employeeData?.data?.dbsDetails.document,
          remarks: data.dbsRemarks,
          isCurrentStatus: data.dbsStatus,
        },
        nationalIdDetails: {
          nationalIdNo: data.nationalIdNumber,
          nationality: data.nationalIdNationality,
          countryOfResidence: data.nationalIdCountryOfResidence,
          issueDate: data.nationalIdIssueDate,
          expiryDate: data.nationalIdExpiryDate,
          eligibleReviewDate: data.nationalIdEligibleReviewDate,
          document: employeeData?.data?.nationalIdDetails.document,
          remarks: data.nationalIdRemarks,
          isCurrentStatus: data.nationalIdStatus,
        },
        payDetails: {
          paymentGroup: data.payGroup,
          wedgesPaymentMode: data.wedgesPayMode,
          annualPay: data.annualPay,
          paymentType: data.paymentType,
          basicDailyWedges: data.basicDailyWedges,
          minWorkingHour: data.minWorkingHour,
          rate: data.rate,
          taxCode: data.taxCode,
          taxReference: data.taxReference,
          paymentMode: data.paymentMode,
          bankName: data.bankName,
          branchName: data.branchName,
          accountNo: data.accountNo,
          sortCode: data.sortCode,
          paymentCurrency: data.paymentCurrency,
        },
        payStructure: {
          taxablePayment: data.taxables,
          deductions: data.deductions,
        },
        educationalDetails: data.educationalDetails,
        jobDetails: data.jobDetails,
        trainingDetails: data.trainingDetails,
        otherDetails: data.otherDetails,
      },
    };
    // console.log("Form Data:", formattedData);

    formData.append("data", JSON.stringify(formattedData));

    // Append files to FormData
    employeeFileFields.forEach((field) => {
      const file = data[field];

      if (file) {
        formData.append(field, file);
      }
    });

    // append educational details files
    data.educationalDetails.forEach((detail: any, index: number) => {
      if (detail.transcriptDocument instanceof File) {
        formData.append(
          `educationalDetails.${index}.transcriptDocument`,
          detail.transcriptDocument
        );
      }

      if (detail.certificateDocument instanceof File) {
        formData.append(
          `educationalDetails.${index}.certificateDocument`,
          detail.certificateDocument
        );
      }
    });

    // append other details files
    data.otherDetails.forEach((detail: any, index: number) => {
      if (detail.document) {
        formData.append(`otherDetails.${index}.document`, detail.document);
      }
    });

    // console.log("FormData entries:");
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    // console.log("taxable:", data.taxables);
    const toastId = toast.loading("Creating Employee...");
    try {
      await updateEmployee({ employeeId: id, data: formData }).unwrap();

      toast.success("Employee updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      console.log("Error:", err);
      toast.error(err.data.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Edit Employee
      </h1>
      {employeeLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-gray-500">
            Loading Organisation Details...
          </p>
        </div>
      ) : employeeError ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-red-500">
            Internal server error! Please try again later.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* Employee personal details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Personal Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="employeeCode"
                control={control}
                label="Employee Code"
                placeholder="Enter employee code"
                error={errors.employeeCode?.message}
              />

              <RHFInput
                name="firstName"
                control={control}
                label="First Name"
                placeholder="Enter first name"
                error={errors.firstName?.message}
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
                name="gender"
                control={control}
                label="Gender"
                placeholder="Select gender"
                error={errors.gender?.message}
                options={genderOptions}
              />

              <RHFInput
                name="niNumber"
                control={control}
                label="NI Number"
                placeholder="Enter NI Number"
                error={errors.niNumber?.message}
              />

              <RHFDatepicker
                name="dateOfBirth"
                control={control}
                label="Date of Birth"
                error={errors.dateOfBirth?.message}
              />

              <RHFSelect
                name="maritalStatus"
                control={control}
                label="Marital Status"
                placeholder="Select status"
                error={errors.maritalStatus?.message}
                options={maritalStatus}
              />

              <RHFSelect
                name="nationality"
                control={control}
                label="Nationality"
                placeholder="Select nationality"
                error={errors.nationality?.message}
                options={nationalities}
              />

              <RHFInput
                name="contactNumber"
                control={control}
                label="Contact Number"
                placeholder="Enter contact number"
                error={errors.contactNumber?.message}
              />

              <RHFInput
                name="alternativeNumber"
                control={control}
                label="Alternative Number"
                placeholder="Enter alternative number"
                error={errors.alternativeNumber?.message}
              />
            </div>
          </div>

          {/* Service details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Service Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="department"
                control={control}
                label="Department"
                placeholder="Enter department"
                error={errors.department?.message}
              />

              <RHFInput
                name="designation"
                control={control}
                label="Designation"
                placeholder="Enter designation"
                error={errors.designation?.message}
              />

              <RHFSelect
                name="employeeType"
                control={control}
                label="Employee Type"
                placeholder="Select employee type"
                error={errors.employeeType?.message}
                options={employmentTypes}
              />

              <RHFDatepicker
                name="dateOfJoining"
                control={control}
                label="Date of Joining"
                error={errors.dateOfJoining?.message}
              />

              <RHFDatepicker
                name="dateOfConfirmation"
                control={control}
                label="Date of Confirmation"
                error={errors.dateOfConfirmation?.message}
              />

              <RHFDatepicker
                name="contractStartDate"
                control={control}
                label="Contract Start Date"
                error={errors.contractStartDate?.message}
              />

              <RHFDatepicker
                name="contractEndDate"
                control={control}
                label="Contract End Date (if applicable)"
                error={errors.contractEndDate?.message}
              />

              <RHFInput
                name="jobLocation"
                control={control}
                label="Job Location"
                placeholder="Enter job location"
                error={errors.jobLocation?.message}
              />

              <RHFFileInput
                name="profilePicture"
                control={control}
                label="Profile Picture"
                error={errors.profilePicture?.message}
              />
            </div>
          </div>

          {/* Educational details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
              Educational Details
            </h1>

            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Sl. No.</th>
                  <th className="border p-2">Qualification</th>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Institution Name</th>
                  <th className="border p-2">Awarding Body/ University</th>
                  <th className="border p-2">Year of Passing</th>
                  <th className="border p-2">Percentage</th>
                  <th className="border p-2">Grade/Division</th>
                  <th className="border p-2">Transcript Document</th>
                  <th className="border p-2">Certificate Document</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {educationalDetails.map((_, index) => (
                  <tr key={index}>
                    <td className="border p-2">{index + 1}</td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(
                          `educationalDetails.${index}.qualification`
                        )}
                      />
                      {errors.educationalDetails?.[index]?.qualification && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].qualification
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(`educationalDetails.${index}.subject`)}
                      />
                      {errors.educationalDetails?.[index]?.subject && (
                        <p className="text-xs text-red-500">
                          {errors.educationalDetails[index].subject.message}
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(
                          `educationalDetails.${index}.institutionName`
                        )}
                      />
                      {errors.educationalDetails?.[index]?.institutionName && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].institutionName
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(
                          `educationalDetails.${index}.awardingBody`
                        )}
                      />
                      {errors.educationalDetails?.[index]?.awardingBody && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].awardingBody
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(
                          `educationalDetails.${index}.yearOfPassing`
                        )}
                      />
                      {errors.educationalDetails?.[index]?.yearOfPassing && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].yearOfPassing
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(`educationalDetails.${index}.percentage`)}
                      />
                      {errors.educationalDetails?.[index]?.percentage && (
                        <p className="text-xs text-red-500">
                          {errors.educationalDetails[index].percentage.message}
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        className="w-full p-1 border rounded"
                        {...register(`educationalDetails.${index}.grade`)}
                      />
                      {errors.educationalDetails?.[index]?.grade && (
                        <p className="text-xs text-red-500">
                          {errors.educationalDetails[index].grade.message}
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <Input
                        radius="sm"
                        labelPlacement="outside"
                        type="file"
                        className="text-hrms-blue font-semibold"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setValue(
                              `educationalDetails.${index}.transcriptDocument`,
                              file,
                              {
                                shouldValidate: true,
                              }
                            );
                          }
                        }}
                      />
                      {errors.educationalDetails?.[index]
                        ?.transcriptDocument && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].transcriptDocument
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2">
                      <Input
                        radius="sm"
                        labelPlacement="outside"
                        type="file"
                        className="text-hrms-blue font-semibold"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setValue(
                              `educationalDetails.${index}.certificateDocument`,
                              file,
                              {
                                shouldValidate: true,
                              }
                            );
                          }
                        }}
                      />
                      {errors.educationalDetails?.[index]
                        ?.certificateDocument && (
                        <p className="text-xs text-red-500">
                          {
                            errors.educationalDetails[index].certificateDocument
                              .message
                          }
                        </p>
                      )}
                    </td>

                    <td className="border p-2 flex gap-2">
                      {index === educationalDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAddRow}
                          className="bg-green-500 text-white p-2 rounded"
                          aria-label="Add row"
                        >
                          +
                        </button>
                      )}
                      {educationalDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveRow(index)}
                          className="bg-red-500 text-white p-2 rounded"
                          aria-label="Remove row"
                        >
                          -
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Job Details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
              Job Details
            </h1>
            <div className="mt-5">
              {jobDetails.map((_, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-4 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        {...register(`jobDetails.${index}.title`)}
                      />
                      {errors.jobDetails?.[index]?.title && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].title.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded"
                        {...register(`jobDetails.${index}.startDate`)}
                      />
                      {errors.jobDetails?.[index]?.startDate && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].startDate.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded"
                        {...register(`jobDetails.${index}.endDate`)}
                      />
                      {errors.jobDetails?.[index]?.endDate && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].endDate.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Year of Experience
                      </label>
                      <select
                        className="w-full p-2 border rounded"
                        {...register(`jobDetails.${index}.experience`)}
                      >
                        <option value="">Select</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                      {errors.jobDetails?.[index]?.experience && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].experience.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-5 mt-4">
                    <div className="col-span-1 relative">
                      <label className="block text-sm font-medium mb-1">
                        Key Responsibilities
                      </label>
                      <textarea
                        className="w-full p-2 border rounded"
                        rows={3}
                        {...register(`jobDetails.${index}.responsibilities`)}
                      />
                      {errors.jobDetails?.[index]?.responsibilities && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].responsibilities.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-2 relative">
                      <label className="block text-sm font-medium mb-1">
                        Job Description
                      </label>
                      <textarea
                        className="w-full p-2 border rounded"
                        rows={3}
                        {...register(`jobDetails.${index}.description`)}
                      />
                      {errors.jobDetails?.[index]?.description && (
                        <p className="text-xs text-red-500">
                          {errors.jobDetails[index].description.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-1 flex justify-start items-end pb-2">
                      {index === jobDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAddJobRow}
                          className=" bg-green-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Add job"
                        >
                          +
                        </button>
                      )}
                      {jobDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveJobRow(index)}
                          className=" bg-red-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Remove job"
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* training details details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
              Training Details
            </h1>
            <div className="mt-5">
              {trainingDetails.map((_, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        {...register(`trainingDetails.${index}.title`)}
                      />
                      {errors.trainingDetails?.[index]?.title && (
                        <p className="text-xs text-red-500">
                          {errors.trainingDetails[index].title.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded"
                        {...register(`trainingDetails.${index}.startDate`)}
                      />
                      {errors.trainingDetails?.[index]?.startDate && (
                        <p className="text-xs text-red-500">
                          {errors.trainingDetails[index].startDate.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded"
                        {...register(`trainingDetails.${index}.endDate`)}
                      />
                      {errors.trainingDetails?.[index]?.endDate && (
                        <p className="text-xs text-red-500">
                          {errors.trainingDetails[index].endDate.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-5 mt-4">
                    <div className="col-span-2 relative">
                      <label className="block text-sm font-medium mb-1">
                        Description
                      </label>
                      <textarea
                        className="w-full p-2 border rounded"
                        rows={3}
                        {...register(`trainingDetails.${index}.description`)}
                      />
                      {errors.trainingDetails?.[index]?.description && (
                        <p className="text-xs text-red-500">
                          {errors.trainingDetails[index].description.message}
                        </p>
                      )}
                    </div>
                    <div className="col-span-1 flex justify-start items-end pb-2">
                      {index === trainingDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAddTrainingRow}
                          className=" bg-green-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Add job"
                        >
                          +
                        </button>
                      )}
                      {trainingDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTrainingRow(index)}
                          className=" bg-red-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Remove job"
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  Next of Kin Information */}
          <div className="pt-5">
            <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
              Emergency / Next of Kin Contact Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="nextOfKinContactName"
                control={control}
                label="Next of Kin Contact Name"
                placeholder="Enter name"
                error={errors.nextOfKinContactName?.message}
              />

              <RHFSelect
                name="nextOfKinContactRelationship"
                control={control}
                label="Next of Kin Contact Relationship"
                placeholder="Select Relationship"
                error={errors.nextOfKinContactRelationship?.message}
                options={kinRelationships}
              />

              <RHFInput
                name="nextOfKinContactEmail"
                control={control}
                label="Next of Kin Contact Email"
                placeholder="Enter email"
                type="email"
                error={errors.nextOfKinContactEmail?.message}
              />

              <RHFInput
                name="nextOfKinContactNumber"
                control={control}
                label="Next of Kin Contact Number"
                placeholder="Enter contact number"
                type="tel"
                error={errors.nextOfKinContactNumber?.message}
              />

              <RHFInput
                name="nextOfKinContactAddress"
                control={control}
                label="Next of Kin Contact Address"
                placeholder="Enter address"
                error={errors.nextOfKinContactAddress?.message}
              />
            </div>
          </div>

          {/* Certified Membership */}
          <div className="pt-5">
            <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
              Certified Membership
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="titleCertifiedLicense"
                control={control}
                label="Title of Certified License"
                placeholder="Enter Title of Certified License"
                error={errors.titleCertifiedLicense?.message}
              />

              <RHFInput
                name="licenseNumber"
                control={control}
                label="License Number"
                placeholder="Enter License Number"
                error={errors.licenseNumber?.message}
              />

              <RHFDatepicker
                name="issueDate"
                control={control}
                label="License Issue Date"
                error={errors.issueDate?.message}
              />

              <RHFDatepicker
                name="expiryDate"
                control={control}
                label="License Expiry Date"
                error={errors.expiryDate?.message}
              />
            </div>
          </div>

          {/* Contact Information  */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Contact Information (Correspondence Address)
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
                label="City / County"
                placeholder="Enter city / county"
                error={errors.city?.message}
              />

              <RHFSelect
                name="country"
                control={control}
                label="County"
                placeholder="Select county"
                error={errors.country?.message}
                options={countries}
              />

              <RHFFileInput
                name="proofOfAddress"
                control={control}
                label="Proof of Address"
                error={errors.proofOfAddress?.message}
              />
            </div>
          </div>

          {/* passport details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Passport Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="passportNumber"
                control={control}
                label="Passport Number"
                placeholder="Enter passport number"
                error={errors.passportNumber?.message}
              />

              <RHFSelect
                name="passportNationality"
                control={control}
                label="Nationality ( Passport )"
                placeholder="Select Nationality"
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
                label="Passport Issued By"
                placeholder="Enter issuing authority"
                error={errors.passportIssuedBy?.message}
              />

              <RHFDatepicker
                name="passportIssueDate"
                control={control}
                label="Passport Issue Date"
                error={errors.passportIssueDate?.message}
              />

              <RHFDatepicker
                name="passportExpiryDate"
                control={control}
                label="Passport Expiry Date"
                error={errors.passportExpiryDate?.message}
              />

              <RHFDatepicker
                name="passportEligibleReviewDate"
                control={control}
                label="Passport Eligible Review Date"
                error={errors.passportEligibleReviewDate?.message}
              />

              <RHFFileInput
                name="passportDocument"
                control={control}
                label="Passport Document"
                error={errors.passportDocument?.message}
              />

              <RHFInput
                name="passportRemarks"
                control={control}
                label="Passport Remarks"
                placeholder="Enter passport remarks"
                error={errors.passportRemarks?.message}
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
            </div>
          </div>

          {/*  Visa Information */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Visa/BRP Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="visaNumber"
                control={control}
                label="BPP/Visa Number"
                placeholder="Enter visa number"
                error={errors.visaNumber?.message}
              />

              <RHFSelect
                name="visaNationality"
                control={control}
                label="Nationality ( Visa /BRP )"
                placeholder="Select Nationality"
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
                label="Visa Issued By"
                placeholder="Enter visa issuing authority"
                error={errors.visaIssuedBy?.message}
              />

              <RHFDatepicker
                name="visaIssueDate"
                control={control}
                label="Visa Issue Date"
                error={errors.visaIssueDate?.message}
              />

              <RHFDatepicker
                name="visaExpiryDate"
                control={control}
                label="Visa Expiry Date"
                error={errors.visaExpiryDate?.message}
              />

              <RHFDatepicker
                name="visaEligibleReviewDate"
                control={control}
                label="Visa Eligible Review Date"
                error={errors.visaEligibleReviewDate?.message}
              />

              <RHFFileInput
                name="visaDocumentFrontSide"
                control={control}
                label="Visa Document Front Side"
                error={errors.visaDocumentFrontSide?.message}
              />

              <RHFFileInput
                name="visaDocumentBackSide"
                control={control}
                label="Visa Document Back Side"
                error={errors.visaDocumentBackSide?.message}
              />

              <RHFInput
                name="visaRemarks"
                control={control}
                label="Visa Remarks"
                placeholder="Enter visa remarks"
                error={errors.visaRemarks?.message}
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
            </div>
          </div>

          {/*EUSS (European Union Settlement Scheme) / Time Limit Details  */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              EUSS/Time Limit Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="eussReferenceNumber"
                control={control}
                label="Reference Number"
                placeholder="Enter reference number"
                error={errors.eussReferenceNumber?.message}
              />

              <RHFSelect
                name="eussNationality"
                control={control}
                label="Nationality"
                placeholder="Select Nationality"
                error={errors.eussNationality?.message}
                options={nationalities}
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
                name="eussEligibleReviewDate"
                control={control}
                label="Eligible Review Date"
                error={errors.eussEligibleReviewDate?.message}
              />

              <RHFFileInput
                name="eussDocument"
                control={control}
                label="EUSS/Time Limit Document"
                error={errors.eussDocument?.message}
              />

              <RHFInput
                name="eussRemarks"
                control={control}
                label="EUSS/Time Limit Remarks"
                placeholder="Enter remarks"
                error={errors.eussRemarks?.message}
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
            </div>
          </div>

          {/* DBS (Disclosure and Barring Service) Information */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              DBS (Disclosure and Barring Service) Information
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
                name="dbsReferenceNumber"
                control={control}
                label="Reference Number"
                placeholder="Enter reference number"
                error={errors.dbsReferenceNumber?.message}
              />

              <RHFSelect
                name="dbsNationality"
                control={control}
                label="Nationality"
                placeholder="Select Nationality"
                error={errors.dbsNationality?.message}
                options={nationalities}
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

              <RHFInput
                name="dbsRemarks"
                control={control}
                label="DBS Remarks"
                placeholder="Enter remarks"
                error={errors.dbsRemarks?.message}
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
            </div>
          </div>

          {/* National ID Details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              National ID Details
            </h1>
            <div className="grid grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="nationalIdNumber"
                control={control}
                label="National ID Number"
                placeholder="Enter national id number"
                error={errors.nationalIdNumber?.message}
              />

              <RHFSelect
                name="nationalIdNationality"
                control={control}
                label="Nationality"
                placeholder="Select Nationality"
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

              <RHFDatepicker
                name="nationalIdEligibleReviewDate"
                control={control}
                label="Eligible Review Date"
                error={errors.nationalIdEligibleReviewDate?.message}
              />

              <RHFFileInput
                name="nationalIdDocument"
                control={control}
                label="National ID Document"
                error={errors.nationalIdDocument?.message}
              />

              <RHFInput
                name="nationalIdRemarks"
                control={control}
                label="National ID Remarks"
                placeholder="Enter remarks"
                error={errors.nationalIdRemarks?.message}
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
            </div>
          </div>

          {/* other Details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Other Details
            </h1>

            <div className="mt-5">
              {otherDetails.map((_, index) => (
                <div key={index} className="mb-5">
                  <div className="grid grid-cols-4 gap-5">
                    <RHFInput
                      name={`otherDetails.${index}.documentName`}
                      control={control}
                      label="Document Name"
                      placeholder="Enter Document name"
                      error={
                        errors.otherDetails?.[index]?.documentName?.message
                      }
                    />

                    <RHFInput
                      name={`otherDetails.${index}.referenceNo`}
                      control={control}
                      label="Document Reference Number"
                      placeholder="Enter Document reference number"
                      error={errors.otherDetails?.[index]?.referenceNo?.message}
                    />

                    <RHFSelect
                      name={`otherDetails.${index}.nationality`}
                      control={control}
                      label="Nationality"
                      placeholder="Select nationality"
                      error={errors.otherDetails?.[index]?.nationality?.message}
                      options={nationalities}
                    />

                    <RHFDatepicker
                      name={`otherDetails.${index}.issueDate`}
                      control={control}
                      label="Issue Date"
                      error={errors.otherDetails?.[index]?.issueDate?.message}
                    />

                    <RHFDatepicker
                      name={`otherDetails.${index}.expiryDate`}
                      control={control}
                      label="Expiry Date"
                      error={errors.otherDetails?.[index]?.expiryDate?.message}
                    />

                    <RHFDatepicker
                      name={`otherDetails.${index}.eligibleReviewDate`}
                      control={control}
                      label="Eligible Review Date"
                      error={
                        errors.otherDetails?.[index]?.eligibleReviewDate
                          ?.message
                      }
                    />

                    <RHFFileInput
                      name={`otherDetails.${index}.document`}
                      control={control}
                      label="Document"
                      error={errors.otherDetails?.[index]?.document?.message}
                    />

                    <RHFInput
                      name={`otherDetails.${index}.remarks`}
                      control={control}
                      label="Remarks"
                      placeholder="Enter remarks"
                      error={errors.otherDetails?.[index]?.remarks?.message}
                    />

                    <RHFRadio
                      name={`otherDetails.${index}.isCurrentStatus`}
                      control={control}
                      label="Is this your current status?"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      error={
                        errors.otherDetails?.[index]?.isCurrentStatus?.message
                      }
                    />

                    <div className=" flex justify-start items-end pb-2">
                      {index === otherDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAddOtherDetailsRow}
                          className=" bg-green-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Add other details"
                        >
                          +
                        </button>
                      )}
                      {otherDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveOtherDetailsRow(index)}
                          className=" bg-red-500 text-white p-3 w-8 h-8 flex items-center justify-center rounded text-xl font-bold"
                          aria-label="Remove other details"
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pay Details */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Pay Details
            </h1>
            <div className="grid grid-cols-3 gap-5 pt-5">
              <RHFSelect
                name="payGroup"
                control={control}
                label="Pay Group"
                placeholder="Select Pay Group"
                error={errors.payGroup?.message}
                options={payGroups}
              />

              <RHFSelect
                name="wedgesPayMode"
                control={control}
                label="Wedges Pay Mode"
                placeholder="Select Wedges Pay Mode"
                error={errors.wedgesPayMode?.message}
                options={wedgesPayModes}
              />

              <RHFSelect
                name="annualPay"
                control={control}
                label="Annual Pay"
                placeholder="Select Annual Pay"
                error={errors.annualPay?.message}
                options={annualPays}
              />

              <RHFSelect
                name="paymentType"
                control={control}
                label="Payment Type"
                placeholder="Select Payment Type"
                error={errors.paymentType?.message}
                options={paymentTypes}
              />

              <RHFInput
                name="basicDailyWedges"
                control={control}
                label="Basic / Daily Wedges"
                placeholder="Enter Basic / Daily Wedges"
                error={errors.basicDailyWedges?.message}
              />

              <RHFInput
                name="minWorkingHour"
                control={control}
                label="Min. Working Hour"
                placeholder="Enter Min. Working Hour"
                error={errors.minWorkingHour?.message}
              />

              <RHFInput
                name="rate"
                control={control}
                label="Rate"
                placeholder="Enter Rate"
                error={errors.rate?.message}
              />

              <RHFSelect
                name="taxCode"
                control={control}
                label="Tax Code"
                placeholder="Select Tax Code"
                error={errors.taxCode?.message}
                options={taxCodes}
              />

              <RHFInput
                name="taxReference"
                control={control}
                label="Tax Reference"
                placeholder="Enter Tax Reference"
                error={errors.taxReference?.message}
              />

              <RHFInput
                name="taxPercentage"
                control={control}
                label="Tax Percentage"
                placeholder="Enter Tax Percentage"
                error={errors.taxPercentage?.message}
              />

              <RHFSelect
                name="paymentMode"
                control={control}
                label="Payment Mode"
                placeholder="Select Payment Mode"
                error={errors.paymentMode?.message}
                options={paymentModes}
              />

              <RHFSelect
                name="bankName"
                control={control}
                label="Bank Name"
                placeholder="Select Bank Name"
                error={errors.bankName?.message}
                options={bankNames}
              />

              <RHFInput
                name="branchName"
                control={control}
                label="Branch Name"
                placeholder="Enter Branch Name"
                error={errors.branchName?.message}
              />

              <RHFInput
                name="accountNo"
                control={control}
                label="Account No"
                placeholder="Enter Account No"
                error={errors.accountNo?.message}
              />

              <RHFInput
                name="sortCode"
                control={control}
                label="Sort Code"
                placeholder="Enter Sort Code"
                error={errors.sortCode?.message}
              />

              <RHFSelect
                name="paymentCurrency"
                control={control}
                label="Payment Currency"
                placeholder="Select Payment Currency"
                error={errors.paymentCurrency?.message}
                options={paymentCurrencies}
              />
            </div>
          </div>

          {/* pay straucture */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Pay Structure
            </h1>
            <div className="grid grid-cols-1 gap-5 pt-5">
              <Controller
                name="taxables"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup
                    aria-label="Payment (Taxable)"
                    label="Payment (Taxable)"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    {taxables.map((mode) => (
                      <Checkbox key={mode.value} value={mode.value}>
                        {mode.value}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                )}
              />
              <Controller
                name="deductions"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup
                    aria-label="Deduction"
                    label="Deductions"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    {deductions.map((mode) => (
                      <Checkbox key={mode.value} value={mode.value}>
                        {mode.value}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                )}
              />
            </div>
          </div>

          {/* submit button */}
          <div className="flex justify-between items-center pt-5 pb-10">
            <div className="mt-6">
              <Button
                type="submit"
                color="primary"
                className="bg-hrms-blue text-white"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
    </main>
  );
};

export default EditEmployee;
