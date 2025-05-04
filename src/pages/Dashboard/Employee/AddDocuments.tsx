import {
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import {
  annualPays,
  bankNames,
  countries,
  dbsTypes,
  deductions,
  employmentTypes,
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
import { Controller, type FieldValues, useForm } from "react-hook-form";
import { format } from "date-fns";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addEmployeeDocumentsSchema,
  EmployeeFormSchemaType,
} from "../../../schemas/addEmployeeDocumentsSchema";

const AddDocuments = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeFormSchemaType>({
    resolver: zodResolver(addEmployeeDocumentsSchema),
  });
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

  const [trainingDetails, setTrainingDetails] = useState([
    {
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

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

  const handleRemoveRow = (index: any) => {
    setEducationalDetails(educationalDetails.filter((_, i) => i !== index));
  };

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

  const handleRemoveJobRow = (index: any) => {
    setJobDetails(jobDetails.filter((_, i) => i !== index));
  };

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

  const handleRemoveTrainingRow = (index: any) => {
    setTrainingDetails(trainingDetails.filter((_, i) => i !== index));
  };

  const handleSubmitForm = async (data: FieldValues) => {
    console.log("Form submission triggered", data);
    // setLoading(true);

    const formattedData = {
      educationalDetails: { ...data.educationalDetails },
    };
    // const formData = new FormData();

    // const formattedData = {
    //   personalDetails: {
    //     employeeCode: data.employeeCode,
    //     firstName: data.firstName,
    //     middleName: data.middleName,
    //     lastName: data.lastName,
    //     gender: data.gender,
    //     niNumber: data.niNumber,
    //     dateOfBirth: data.dateOfBirth,
    //     maritalStatus: data.maritalStatus,
    //     nationality: data.nationality,
    //     email: data.email,
    //     contactNo: data.contactNumber,
    //     alternativeNo: data.alternativeNumber,
    //   },
    //   serviceDetails: {
    //     department: data.department,
    //     designation: data.designation,
    //     dateOfJoining: data.dateOfJoining,
    //     employeeType: data.employeeType,
    //     dateOfConfirmation: data.dateOfConfirmation,
    //     contractStartDate: data.contractStartDate,
    //     contractEndDate: data.contractEndDate,
    //     jobLocation: data.jobLocation,
    //     profilePicture: data.profilePicture,
    //   },
    //   trainingDetails: {
    //     department: data.department,
    //     startDate: data.startDate,
    //     endDate: data.endDate,
    //     jobDescription: data.jobDescription,
    //   },
    //   nextOfKinDetails: {
    //     nextOfKinContactName: data.nextOfKinContactName,
    //     nextOfKinContactRelationship: data.nextOfKinContactRelationship,
    //     nextOfKinContactEmail: data.nextOfKinContactEmail,
    //     nextOfKinContactNumber: data.nextOfKinContactNumber,
    //     nextOfKinContactAddress: data.nextOfKinContactAddress,
    //   },
    //   certifiedMembership: {
    //     licenseTitle: data.titleCertifiedLicense,
    //     licenseNo: data.licenseNumber,
    //     issueDate: data.issueDate,
    //     expiryDate: data.expiryDate,
    //   },
    //   contactiInfo: {
    //     postCode: data.postCode,
    //     addressLine1: data.addressLine1,
    //     addressLine2: data.addressLine2,
    //     addressLine3: data.addressLine3,
    //     city: data.city,
    //     country: data.country,
    //     proofOfAddress: data.proofOfAddress,
    //   },
    //   pasportDetails: {
    //     passportNo: data.passportNumber,
    //     nationality: data.passportNationality,
    //     placeOfBirth: data.placeOfBirth,
    //     issuedBy: data.passportIssuedBy,
    //     issueDate: data.passportIssueDate,
    //     expiryDate: data.passportExpiryDate,
    //     eligibleReviewDate: data.passportEligibleReviewDate,
    //     document: data.passportDocument,
    //     remarks: data.passportRemarks,
    //     isCurrentStatus: data.passportStatus,
    //   },
    //   visaDetails: {
    //     visaNo: data.visaNumber,
    //     nationality: data.visaNationality,
    //     countryOfResidence: data.countryOfResidence,
    //     issuedBy: data.visaIssuedBy,
    //     issueDate: data.visaIssueDate,
    //     expiryDate: data.visaExpiryDate,
    //     eligibleReviewDate: data.visaEligibleReviewDate,
    //     frontsideDocument: data.visaFrontsideDocument,
    //     backsideDocument: data.visaBacksideDocument,
    //     remarks: data.visaRemarks,
    //     isCurrentStatus: data.visaStatus,
    //   },
    //   eussDetails: {
    //     referenceNo: data.eussReferenceNumber,
    //     nationality: data.eussNationality,
    //     issueDate: data.eussIssueDate,
    //     expiryDate: data.eussExpiryDate,
    //     eligibleReviewDate: data.eussEligibleReviewDate,
    //     document: data.eussDocument,
    //     remarks: data.eussRemarks,
    //     isCurrentStatus: data.eussStatus,
    //   },
    //   dbsDetails: {
    //     type: data.dbsType,
    //     referenceNo: data.dbsReferenceNumber,
    //     nationality: data.dbsNationality,
    //     issueDate: data.dbsIssueDate,
    //     expiryDate: data.dbsExpiryDate,
    //     eligibleReviewDate: data.dbsEligibleReviewDate,
    //     document: data.dbsDocument,
    //     remarks: data.dbsRemarks,
    //     isCurrentStatus: data.dbsStatus,
    //   },
    //   nationalIdDetails: {
    //     nationalIdNo: data.nationalIdNumber,
    //     nationality: data.nationalIdNationality,
    //     countryOfResidence: data.nationalIdCountryOfResidence,
    //     issueDate: data.nationalIdIssueDate,
    //     expiryDate: data.nationalIdExpiryDate,
    //     eligibleReviewDate: data.nationalIdEligibleReviewDate,
    //     document: data.nationalIdDocument,
    //     remarks: data.nationalIdRemarks,
    //     isCurrentStatus: data.nationalIdStatus,
    //   },
    //   payDetails: {
    //     paymentGroup: data.payGroup,
    //     wedgesPaymentMode: data.wedgesPayMode,
    //     annualPay: data.annualPay,
    //     paymentType: data.paymentType,
    //     basicDailyWedges: data.basicDailyWedges,
    //     minWorkingHour: data.minWorkingHour,
    //     rate: data.rate,
    //     taxCode: data.taxCode,
    //     taxReference: data.taxReference,
    //     paymentMode: data.paymentMode,
    //     bankName: data.bankName,
    //     branchName: data.branchName,
    //     accountNo: data.accountNo,
    //     sortCode: data.sortCode,
    //     paymentCurrency: data.paymentCurrency,
    //   },
    //   payStructure: {
    //     taxablePayment: data.taxables,
    //     deductions: data.deductions,
    //   },
    //   educationDetails: educationalDetails,
    //   jobDetails: jobDetails,
    // };
    // console.log("Form Data:", formattedData);

    // formData.append("data", JSON.stringify(formattedData));

    // try {
    //   // Example: await axios.post('/api/submit', formData);
    //   // console.log("Education Details:", educationalDetails);
    //   // console.log("Job Details:", jobDetails);

    //   setSubmittedData(formattedData);
    //   // reset(); // Optional
    // } catch (error) {
    //   console.error("Submission error:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Your Documents
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Employee personal details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Personal Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Employee Code"
                labelPlacement="outside"
                placeholder="Enter employee code"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("employeeCode")}
              />
              {errors.employeeCode && (
                <span className="text-red-500 text-sm">
                  {errors.employeeCode.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="First Name"
                labelPlacement="outside"
                placeholder="Enter first name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Middle Name"
                labelPlacement="outside"
                placeholder="Enter middle name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("middleName")}
              />
              {errors.middleName && (
                <span className="text-red-500 text-sm">
                  {errors.middleName.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Last Name"
                labelPlacement="outside"
                placeholder="Enter last name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Gender"
                    radius="sm"
                    label="Gender"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select gender"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    <SelectItem key="Male" value="Male">
                      Male
                    </SelectItem>
                    <SelectItem key="Female" value="Female">
                      Female
                    </SelectItem>
                    <SelectItem key="Others" value="Others">
                      Others
                    </SelectItem>
                  </Select>
                )}
              />
              {errors.gender && (
                <span className="text-red-500 text-sm">
                  {errors.gender.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="NI Number"
                labelPlacement="outside"
                placeholder="Enter NI Number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("niNumber")}
              />
              {errors.niNumber && (
                <span className="text-red-500 text-sm">
                  {errors.niNumber.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Date of Birth"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Date of Birth"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dateOfBirth && (
                <span className="text-red-500 text-sm">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="maritalStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Marital Status"
                    radius="sm"
                    label="Marital Status"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {maritalStatus.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.maritalStatus && (
                <span className="text-red-500 text-sm">
                  {errors.maritalStatus.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="nationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nat) => (
                      <SelectItem key={nat.value} value={nat.value}>
                        {nat.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.nationality && (
                <span className="text-red-500 text-sm">
                  {errors.nationality.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter email"
                type="email"
                className="text-hrms-blue font-semibold"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Contact Number"
                labelPlacement="outside"
                placeholder="Enter contact number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("contactNumber")}
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-sm">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Alternative Number"
                labelPlacement="outside"
                placeholder="Enter alternative number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("alternativeNumber")}
              />
              {errors.alternativeNumber && (
                <span className="text-red-500 text-sm">
                  {errors.alternativeNumber.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Service details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Service Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Department"
                labelPlacement="outside"
                placeholder="Enter department"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("department")}
              />
              {errors.department && (
                <span className="text-red-500 text-sm">
                  {errors.department.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Designation"
                labelPlacement="outside"
                placeholder="Enter designation"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("designation")}
              />
              {errors.designation && (
                <span className="text-red-500 text-sm">
                  {errors.designation.message}
                </span>
              )}
            </div>
            <div>
              <Controller
                name="employeeType"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Employee Type"
                    radius="sm"
                    label="Employee Type"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select employee type"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {employmentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.employeeType && (
                <span className="text-red-500 text-sm">
                  {errors.employeeType.message}
                </span>
              )}
            </div>
            <div>
              <Controller
                name="dateOfJoining"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Date of Joining"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Date of Joining"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dateOfJoining && (
                <span className="text-red-500 text-sm">
                  {errors.dateOfJoining.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="dateOfConfirmation"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Date of Confirmation"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Date of Confirmation"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dateOfConfirmation && (
                <span className="text-red-500 text-sm">
                  {errors.dateOfConfirmation.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="contractStartDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Contract Start Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Contract Start Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.contractStartDate && (
                <span className="text-red-500 text-sm">
                  {errors.contractStartDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="contractEndDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Contract End Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Contract End Date (if applicable)"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.contractEndDate && (
                <span className="text-red-500 text-sm">
                  {errors.contractEndDate.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Job Location"
                labelPlacement="outside"
                placeholder="Enter job location"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("jobLocation")}
              />
              {errors.jobLocation && (
                <span className="text-red-500 text-sm">
                  {errors.jobLocation.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Profile Picture"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("profilePicture", file, { shouldValidate: true });
                  }
                }}
              />

              {errors.profilePicture && (
                <small className="text-red-700 font-medium">
                  {String(errors.profilePicture.message)}
                </small>
              )}
            </div>
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
                      {...register(`educationalDetails.${index}.qualification`)}
                    />
                    {errors.educationalDetails?.[index]?.qualification && (
                      <p className="text-xs text-red-500">
                        {errors.educationalDetails[index].qualification.message}
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
                      {...register(`educationalDetails.${index}.awardingBody`)}
                    />
                    {errors.educationalDetails?.[index]?.awardingBody && (
                      <p className="text-xs text-red-500">
                        {errors.educationalDetails[index].awardingBody.message}
                      </p>
                    )}
                  </td>

                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      {...register(`educationalDetails.${index}.yearOfPassing`)}
                    />
                    {errors.educationalDetails?.[index]?.yearOfPassing && (
                      <p className="text-xs text-red-500">
                        {errors.educationalDetails[index].yearOfPassing.message}
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
                    {errors.educationalDetails?.[index]?.transcriptDocument && (
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
            {jobDetails.map((detail, index) => (
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

        {/* <div className="pt-5">
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Training Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="Department"
              labelPlacement="outside"
              placeholder="Enter department"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("department")}
            />
            <Controller
              name="startDate"
              control={control}
              rules={{ required: "Start Date is required" }}
              render={({ field }) => (
                <DatePicker
                  aria-label="Start Date"
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="endDate"
              control={control}
              rules={{ required: "End Date is required" }}
              render={({ field }) => (
                <DatePicker
                  aria-label="End Date"
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="End Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Textarea
              radius="sm"
              label="Job Description"
              labelPlacement="outside"
              placeholder="Enter job description"
              maxRows={5}
              minRows={5}
              className="text-hrms-blue font-semibold col-span-1 row-span-2"
              {...register("jobDescription")}
            />
          </div>
        </div> */}

        {/*  Next of Kin Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Emergency / Next of Kin Contact Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Next of Kin Contact Name"
                labelPlacement="outside"
                placeholder="Enter name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("nextOfKinContactName")}
              />
              {errors.nextOfKinContactName && (
                <span className="text-red-500 text-sm">
                  {errors.nextOfKinContactName.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="nextOfKinContactRelationship"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Next of Kin Contact Relationship"
                    radius="sm"
                    label="Next of Kin Contact Relationship"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Relationship"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {kinRelationships.map((relation) => (
                      <SelectItem key={relation.value} value={relation.value}>
                        {relation.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.nextOfKinContactRelationship && (
                <span className="text-red-500 text-sm">
                  {errors.nextOfKinContactRelationship.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Next of Kin Contact Email"
                labelPlacement="outside"
                placeholder="Enter contact email"
                type="tel"
                className="text-hrms-blue font-semibold"
                {...register("nextOfKinContactEmail")}
              />
              {errors.nextOfKinContactEmail && (
                <span className="text-red-500 text-sm">
                  {errors.nextOfKinContactEmail.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Next of Kin Contact Number"
                labelPlacement="outside"
                placeholder="Enter contact number"
                type="tel"
                className="text-hrms-blue font-semibold"
                {...register("nextOfKinContactNumber")}
              />
              {errors.nextOfKinContactNumber && (
                <span className="text-red-500 text-sm">
                  {errors.nextOfKinContactNumber.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Next of Kin Contact Address"
                labelPlacement="outside"
                placeholder="Enter address"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("nextOfKinContactAddress")}
              />
              {errors.nextOfKinContactAddress && (
                <span className="text-red-500 text-sm">
                  {errors.nextOfKinContactAddress.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Certified Membership */}
        <div className="pt-5">
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Certified Membership
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Title of Certified License"
                labelPlacement="outside"
                placeholder="Enter Title of Certified License"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("titleCertifiedLicense")}
              />
              {errors.titleCertifiedLicense && (
                <span className="text-red-500 text-sm">
                  {errors.titleCertifiedLicense.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="License Number"
                labelPlacement="outside"
                placeholder="Enter License Number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("licenseNumber")}
              />
              {errors.licenseNumber && (
                <span className="text-red-500 text-sm">
                  {errors.licenseNumber.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="issueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.issueDate && (
                <span className="text-red-500 text-sm">
                  {errors.issueDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="expiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.expiryDate && (
                <span className="text-red-500 text-sm">
                  {errors.expiryDate.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Contact Information (Correspondence Address)
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Post Code"
                labelPlacement="outside"
                placeholder="Enter post code"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("postCode")}
              />
              {errors.postCode && (
                <span className="text-red-500 text-sm">
                  {errors.postCode.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Address Line 1"
                labelPlacement="outside"
                placeholder="Enter address line 1"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("addressLine1")}
              />
              {errors.addressLine1 && (
                <span className="text-red-500 text-sm">
                  {errors.addressLine1.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Address Line 2"
                labelPlacement="outside"
                placeholder="Enter address line 2"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("addressLine2")}
              />
              {errors.addressLine2 && (
                <span className="text-red-500 text-sm">
                  {errors.addressLine2.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Address Line 3"
                labelPlacement="outside"
                placeholder="Enter address line 3"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("addressLine3")}
              />
              {errors.addressLine3 && (
                <span className="text-red-500 text-sm">
                  {errors.addressLine3.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="City / County"
                labelPlacement="outside"
                placeholder="Enter city / county"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("city")}
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Country"
                    radius="sm"
                    label="Country"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select country"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Proof Of Address"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("proofOfAddress", file, { shouldValidate: true });
                  }
                }}
              />

              {errors.proofOfAddress && (
                <small className="text-red-700 font-medium">
                  {String(errors.proofOfAddress.message)}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* passport details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Passport Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Passport Number"
                labelPlacement="outside"
                placeholder="Enter passport number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("passportNumber")}
              />
              {errors.passportNumber && (
                <span className="text-red-500 text-sm">
                  {errors.passportNumber.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="passportNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Passport Nationality"
                    radius="sm"
                    label="Nationality (Passport)"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.passportNationality && (
                <span className="text-red-500 text-sm">
                  {errors.passportNationality.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Place of Birth"
                labelPlacement="outside"
                placeholder="Enter place of birth"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("placeOfBirth")}
              />
              {errors.placeOfBirth && (
                <span className="text-red-500 text-sm">
                  {errors.placeOfBirth.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Passport Issued By"
                labelPlacement="outside"
                placeholder="Enter issuing authority"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("passportIssuedBy")}
              />
              {errors.passportIssuedBy && (
                <span className="text-red-500 text-sm">
                  {errors.passportIssuedBy.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="passportIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Passport Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Passport Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.passportIssueDate && (
                <span className="text-red-500 text-sm">
                  {errors.passportIssueDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="passportExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Passport Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Passport Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.passportExpiryDate && (
                <span className="text-red-500 text-sm">
                  {errors.passportExpiryDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="passportEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Passport Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Passport Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.passportEligibleReviewDate && (
                <span className="text-red-500 text-sm">
                  {errors.passportEligibleReviewDate.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Passport Document"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("passportDocument", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />

              {errors.passportDocument && (
                <small className="text-red-700 font-medium">
                  {String(errors.passportDocument.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Passport Remarks"
                labelPlacement="outside"
                placeholder="Enter passport remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("passportRemarks")}
              />
              {errors.passportRemarks && (
                <span className="text-red-500 text-sm">
                  {errors.passportRemarks.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="passportStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.passportStatus && (
                <span className="text-red-500 text-sm">
                  {errors.passportStatus.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/*  Visa Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Visa/BRP Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="BPP/Visa Number"
                labelPlacement="outside"
                placeholder="Enter visa number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("visaNumber")}
              />
              {errors.visaNumber && (
                <span className="text-red-500 text-sm">
                  {errors.visaNumber.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="visaNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Visa Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.visaNationality && (
                <span className="text-red-500 text-sm">
                  {errors.visaNationality.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="countryOfResidence"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Country of Residence"
                    radius="sm"
                    label="Country of Residence"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select country"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.countryOfResidence && (
                <span className="text-red-500 text-sm">
                  {errors.countryOfResidence.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Visa Issued By"
                labelPlacement="outside"
                placeholder="Enter visa issuing authority"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("visaIssuedBy")}
              />
              {errors.visaIssuedBy && (
                <span className="text-red-500 text-sm">
                  {errors.visaIssuedBy.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="visaIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Visa Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Visa Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.visaIssueDate && (
                <span className="text-red-500 text-sm">
                  {errors.visaIssueDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="visaExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Visa Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Visa Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.visaExpiryDate && (
                <span className="text-red-500 text-sm">
                  {errors.visaExpiryDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="visaEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Visa Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Visa Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.visaEligibleReviewDate && (
                <span className="text-red-500 text-sm">
                  {errors.visaEligibleReviewDate.message}
                </span>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Visa Document Front Side"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("visaDocumentFrontSide", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />

              {errors.visaDocumentFrontSide && (
                <small className="text-red-700 font-medium">
                  {String(errors.visaDocumentFrontSide.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Visa Document Back Side"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("visaDocumentBackSide", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />

              {errors.visaDocumentBackSide && (
                <small className="text-red-700 font-medium">
                  {String(errors.visaDocumentBackSide.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Visa Remarks"
                labelPlacement="outside"
                placeholder="Enter visa remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("visaRemarks")}
              />
              {errors.visaRemarks && (
                <span className="text-red-500 text-sm">
                  {errors.visaRemarks.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                name="visaStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.visaStatus && (
                <span className="text-red-500 text-sm">
                  {errors.visaStatus.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/*EUSS (European Union Settlement Scheme) / Time Limit Details  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            EUSS/Time Limit Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Reference Number"
                labelPlacement="outside"
                placeholder="Enter reference number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("eussReferenceNumber")}
              />
              {errors.eussReferenceNumber && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussReferenceNumber.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="eussNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="EUSS Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.eussNationality && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussNationality.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="eussIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="EUSS Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.eussIssueDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussIssueDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="eussExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="EUSS Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.eussExpiryDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussExpiryDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="eussEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="EUSS Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.eussEligibleReviewDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussEligibleReviewDate.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="EUSS/Time Limit Document"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("eussDocument", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
              {errors.eussDocument && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussDocument.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="EUSS/Time Limit Remarks"
                labelPlacement="outside"
                placeholder="Enter remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("eussRemarks")}
              />
              {errors.eussRemarks && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussRemarks.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="eussStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.eussStatus && (
                <small className="text-red-700 font-medium">
                  {String(errors.eussStatus.message)}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* DBS (Disclosure and Barring Service) Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            DBS (Disclosure and Barring Service) Information
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Controller
                name="dbsType"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="DBS Type"
                    radius="sm"
                    label="DBS Type"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select dbs type"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {dbsTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.dbsType && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsType.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Reference Number"
                labelPlacement="outside"
                placeholder="Enter Reference Number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("dbsReferenceNumber")}
              />
              {errors.dbsReferenceNumber && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsReferenceNumber.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="dbsNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="DBS Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.dbsNationality && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsNationality.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="dbsIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="DBS Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dbsIssueDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsIssueDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="dbsExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="DBS Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dbsExpiryDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsExpiryDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="dbsEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="DBS Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.dbsEligibleReviewDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsEligibleReviewDate.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="DBS Document"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("dbsDocument", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
              {errors.dbsDocument && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsDocument.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="EUSS/Time Limit Remarks"
                labelPlacement="outside"
                placeholder="Enter remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("dbsRemarks")}
              />
              {errors.dbsRemarks && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsRemarks.message)}
                </small>
              )}
            </div>

            <div className="col-span-4">
              <Controller
                name="dbsStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.dbsStatus && (
                <small className="text-red-700 font-medium">
                  {String(errors.dbsStatus.message)}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* National ID Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            National ID Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="National ID Number"
                labelPlacement="outside"
                placeholder="Enter national id number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("nationalIdNumber")}
              />
              {errors.nationalIdNumber && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdNumber.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="nationalIdNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="National Id Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.nationalIdNationality && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdNationality.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="nationalIdCountryOfResidence"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Country of Residence"
                    radius="sm"
                    label="Country of Residence"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select country"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.nationalIdCountryOfResidence && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdCountryOfResidence.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="nationalIdIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="National Id Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.nationalIdIssueDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdIssueDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="nationalIdExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Visa Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Visa Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.nationalIdExpiryDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdExpiryDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="nationalIdEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Visa Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Visa Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.nationalIdEligibleReviewDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdEligibleReviewDate.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="National Id Document"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("nationalIdDocument", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
              {errors.nationalIdDocument && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdDocument.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="National Id Remarks"
                labelPlacement="outside"
                placeholder="Enter visa remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("nationalIdRemarks")}
              />
              {errors.nationalIdRemarks && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdRemarks.message)}
                </small>
              )}
            </div>

            <div className="col-span-4">
              <Controller
                name="nationalIdStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.nationalIdStatus && (
                <small className="text-red-700 font-medium">
                  {String(errors.nationalIdStatus.message)}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* other Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Other Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
              <Input
                radius="sm"
                label="Document name"
                labelPlacement="outside"
                placeholder="Enter Document name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("othersDocumentName")}
              />
              {errors.othersDocumentName && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersDocumentName.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Document reference number"
                labelPlacement="outside"
                placeholder="Enter document reference number"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("othersDocumentReferenceNumber")}
              />
              {errors.othersDocumentReferenceNumber && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersDocumentReferenceNumber.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="othersNationality"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Others Document Nationality"
                    radius="sm"
                    label="Nationality"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select nationality"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {nationalities.map((nationality) => (
                      <SelectItem
                        key={nationality.value}
                        value={nationality.value}
                      >
                        {nationality.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.othersNationality && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersNationality.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="othersIssueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Others Document Issue Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Issue Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.othersIssueDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersIssueDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="othersExpiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Others Document Expiry Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Expiry Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.othersExpiryDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersExpiryDate.message)}
                </small>
              )}
            </div>

            <div>
              <Controller
                name="othersEligibleReviewDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    aria-label="Eligible Review Date"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    label="Eligible Review Date"
                    labelPlacement="outside"
                    onChange={(date) =>
                      field.onChange(
                        date
                          ? format(
                              new Date(date.year, date.month - 1, date.day),
                              "dd-MM-yyyy"
                            )
                          : ""
                      )
                    }
                  />
                )}
              />
              {errors.othersEligibleReviewDate && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersEligibleReviewDate.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Upload Document"
                labelPlacement="outside"
                type="file"
                className="text-hrms-blue font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("othersUploadDocument", file, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
              {errors.othersUploadDocument && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersUploadDocument.message)}
                </small>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Remarks"
                labelPlacement="outside"
                placeholder="Enter remarks"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("remarks")}
              />
              {errors.remarks && (
                <small className="text-red-700 font-medium">
                  {String(errors.remarks.message)}
                </small>
              )}
            </div>

            <div className="col-span-4">
              <Controller
                name="othersStatus"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    aria-label="Is this your current status?"
                    label="Is this your current status?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />
              {errors.othersStatus && (
                <small className="text-red-700 font-medium">
                  {String(errors.othersStatus.message)}
                </small>
              )}
            </div>
          </div>
        </div>

        {/* Pay Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Pay Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <div>
              <Controller
                name="payGroup"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Pay Group"
                    radius="sm"
                    label="Pay Group"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select group"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {payGroups.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.payGroup && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.payGroup.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="wedgesPayMode"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Wedges Pay Mode"
                    radius="sm"
                    label="Wedges pay mode"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Wedges pay mode"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {wedgesPayModes.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.wedgesPayMode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.wedgesPayMode.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="annualPay"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Annual Pay"
                    radius="sm"
                    label="Annual Pay"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Annual Pay"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {annualPays.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.annualPay && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.annualPay.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="paymentType"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Payment Type"
                    radius="sm"
                    label="Payment Type"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Payment Type"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {paymentTypes.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.paymentType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentType.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Basic / Daily Wedges"
                labelPlacement="outside"
                placeholder="Enter Basic / Daily Wedges."
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("basicDailyWedges")}
              />
              {errors.basicDailyWedges && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.basicDailyWedges.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Min. Working Hour."
                labelPlacement="outside"
                placeholder="Enter Min. Working Hour."
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("minWorkingHour")}
              />
              {errors.minWorkingHour && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.minWorkingHour.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Rate."
                labelPlacement="outside"
                placeholder="Enter Rate."
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("rate")}
              />
              {errors.rate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rate.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="taxCode"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Tax Code"
                    radius="sm"
                    label="Tax Code"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Tax Code"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {taxCodes.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.taxCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.taxCode.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Tax Reference"
                labelPlacement="outside"
                placeholder="Enter Tax Reference"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("taxReference")}
              />
              {errors.taxReference && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.taxReference.message}
                </p>
              )}
            </div>
            <div>
              <Input
                radius="sm"
                label="Tax Percentage"
                labelPlacement="outside"
                placeholder="Tax Percentage"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("taxPercentage")}
              />
              {errors.taxPercentage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.taxPercentage.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="paymentMode"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Payment Mode"
                    radius="sm"
                    label="Payment Mode"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Payment Mode"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {paymentModes.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.paymentMode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentMode.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="bankName"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Bank Name"
                    radius="sm"
                    label="Bank Name"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Bank Name"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {bankNames.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.bankName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bankName.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Branch Name"
                labelPlacement="outside"
                placeholder="Enter Branch Name"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("branchName")}
              />
              {errors.branchName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.branchName.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Account No"
                labelPlacement="outside"
                placeholder="Account No"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("accountNo")}
              />
              {errors.accountNo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountNo.message}
                </p>
              )}
            </div>

            <div>
              <Input
                radius="sm"
                label="Sort Code"
                labelPlacement="outside"
                placeholder="Enter Sort Code"
                type="text"
                className="text-hrms-blue font-semibold"
                {...register("sortCode")}
              />
              {errors.sortCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sortCode.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="paymentCurrency"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Payment Currency"
                    radius="sm"
                    label="Payment Currency"
                    className="text-hrms-blue font-semibold"
                    labelPlacement="outside"
                    placeholder="Select Payment Currency"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    }
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    }
                  >
                    {paymentCurrencies.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.paymentCurrency && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentCurrency.message}
                </p>
              )}
            </div>
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

        {/* Verification Status */}
        {/* <div>
          <h1 className="text-xl font-medium py-4 border-b border-hrms-blue-light">
            Verification Status
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Controller
              name="verificationStatus"
              control={control}
              render={({ field }) => (
                <Select
                  aria-label="Verification Status"
                  radius="sm"
                  label="Verification Status"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select verification status"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Pending" value="Pending">
                    Pending
                  </SelectItem>
                  <SelectItem key="Verified" value="Verified">
                    Verified
                  </SelectItem>
                  <SelectItem key="Rejected" value="Rejected">
                    Rejected
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>  */}

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
    </main>
  );
};

export default AddDocuments;
