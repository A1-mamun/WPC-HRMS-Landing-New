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
  maritalStatus,
  nationalities,
  payGroups,
  paymentCurrencies,
  paymentModes,
  paymentTypes,
  taxables,
  taxCodes,
  wedgesPaymodes,
} from "../../../data";
import { Controller, type FieldValues, useForm } from "react-hook-form";
import { format } from "date-fns";
import { useState } from "react";

const AddDocuments = () => {
  const { register, control, handleSubmit } = useForm();
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
      jobTitle: "",
      startDate: "",
      endDate: "",
      yearsOfExperience: "",
      jobDescription: "",
      responsibilities: "",
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
        jobTitle: "",
        startDate: "",
        endDate: "",
        yearsOfExperience: "",
        jobDescription: "",
        responsibilities: "",
      },
    ]);
  };

  const handleRemoveJobRow = (index: any) => {
    setJobDetails(jobDetails.filter((_, i) => i !== index));
  };

  const handleSubmitForm = async (data: FieldValues) => {
    console.log("Form submission triggered");
    // setLoading(true);

    const formData = new FormData();

    const formattedData = {
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
        email: data.email,
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
        profilePicture: data.profilePicture,
      },
      trainingDetails: {
        department: data.department,
        startDate: data.startDate,
        endDate: data.endDate,
        jobDescription: data.jobDescription,
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
      contactiInfo: {
        postCode: data.postCode,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        addressLine3: data.addressLine3,
        city: data.city,
        country: data.country,
        proofOfAddress: data.proofOfAddress,
      },
      pasportDetails: {
        passportNo: data.passportNumber,
        nationality: data.passportNationality,
        placeOfBirth: data.placeOfBirth,
        issuedBy: data.passportIssuedBy,
        issueDate: data.passportIssueDate,
        expiryDate: data.passportExpiryDate,
        eligibleReviewDate: data.passportEligibleReviewDate,
        document: data.passportDocument,
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
        frontsideDocument: data.visaFrontsideDocument,
        backsideDocument: data.visaBacksideDocument,
        remarks: data.visaRemarks,
        isCurrentStatus: data.visaStatus,
      },
      eussDetails: {
        referenceNo: data.eussReferenceNumber,
        nationality: data.eussNationality,
        issueDate: data.eussIssueDate,
        expiryDate: data.eussExpiryDate,
        eligibleReviewDate: data.eussEligibleReviewDate,
        document: data.eussDocument,
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
        document: data.dbsDocument,
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
        document: data.nationalIdDocument,
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
      educationDetails: educationalDetails,
      jobDetails: jobDetails,
    };
    console.log("Form Data:", formattedData);

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
            <Input
              radius="sm"
              label="Employee Code"
              labelPlacement="outside"
              placeholder="Enter employee code"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("employeeCode")}
            />
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("firstName")}
            />
            <Input
              radius="sm"
              label="Middle Name"
              labelPlacement="outside"
              placeholder="Enter middle name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("middleName")}
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("lastName")}
            />

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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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

            <Input
              radius="sm"
              label="NI Number"
              labelPlacement="outside"
              placeholder="Enter NI Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("niNumber")}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {maritalStatus.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="Nationality"
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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
            <Input
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("email")}
            />
            <Input
              radius="sm"
              label="Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("contactNumber")}
            />
            <Input
              radius="sm"
              label="Alternative Number"
              labelPlacement="outside"
              placeholder="Enter alternative number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("alternativeNumber")}
            />
          </div>
        </div>

        {/* Service details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Service Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Department"
              labelPlacement="outside"
              placeholder="Enter department"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("department")}
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("designation")}
            />
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
                  // Don't pass ref to DatePicker
                />
              )}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {employmentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
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
            <Input
              radius="sm"
              label="Job Location"
              labelPlacement="outside"
              placeholder="Enter job location"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("jobLocation")}
            />
            <Input
              radius="sm"
              label="Profile Picture"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("profilePicture")}
            />
            {/* <Input
              radius="sm"
              label="Reporting Authority"
              labelPlacement="outside"
              placeholder="Enter reporting authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("reportingAuthority")}
            />
            <Input
              radius="sm"
              label="Leave Sanction Authority"
              labelPlacement="outside"
              placeholder="Enter leave sanction authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("leaveSanctionAuthority")}
            /> */}
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
              {educationalDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.qualification}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].qualification = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.subject}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].subject = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.institutionName}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].institutionName = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.awardingBody}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].awardingBody = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.yearOfPassing}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].yearOfPassing = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.percentage}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].percentage = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full p-1 border rounded"
                      value={detail.grade}
                      onChange={(e) => {
                        const newDetails = [...educationalDetails];
                        newDetails[index].grade = e.target.value;
                        setEducationalDetails(newDetails);
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <Input
                      radius="sm"
                      labelPlacement="outside"
                      type="file"
                      className="text-hrms-blue font-semibold"
                      onChange={(e) => {
                        // File handling is excluded as per requirements
                      }}
                    />
                  </td>
                  <td className="border p-2">
                    <Input
                      radius="sm"
                      labelPlacement="outside"
                      type="file"
                      className="text-hrms-blue font-semibold"
                      onChange={(e) => {
                        // File handling is excluded as per requirements
                      }}
                    />
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
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={detail.jobTitle}
                      onChange={(e) => {
                        const newDetails = [...jobDetails];
                        newDetails[index].jobTitle = e.target.value;
                        setJobDetails(newDetails);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded"
                      value={detail.startDate}
                      onChange={(e) => {
                        const newDetails = [...jobDetails];
                        newDetails[index].startDate = e.target.value;
                        setJobDetails(newDetails);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded"
                      value={detail.endDate}
                      onChange={(e) => {
                        const newDetails = [...jobDetails];
                        newDetails[index].endDate = e.target.value;
                        setJobDetails(newDetails);
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Year of Experience
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      value={detail.yearsOfExperience}
                      onChange={(e) => {
                        const newDetails = [...jobDetails];
                        newDetails[index].yearsOfExperience = e.target.value;
                        setJobDetails(newDetails);
                      }}
                    >
                      <option value="">Select</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div className="col-span-2 relative">
                    <label className="block text-sm font-medium mb-1">
                      Job Description
                    </label>
                    <textarea
                      className="w-full p-2 border rounded"
                      rows={5}
                      value={detail.jobDescription}
                      onChange={(e) => {
                        const newDetails = [...jobDetails];
                        newDetails[index].jobDescription = e.target.value;
                        setJobDetails(newDetails);
                      }}
                    />
                    {index === jobDetails.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddJobRow}
                        className="absolute right-0 top-0 bg-green-500 text-white p-1 w-6 h-6 flex items-center justify-center rounded"
                        aria-label="Add job"
                      >
                        +
                      </button>
                    )}
                    {jobDetails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveJobRow(index)}
                        className="absolute right-8 top-0 bg-red-500 text-white p-1  w-6 h-6 flex items-center justify-center rounded"
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
        </div>

        {/*  Next of Kin Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Emergency / Next of Kin Contact Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Next of Kin Contact Name"
              labelPlacement="outside"
              placeholder="Enter name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nextOfKinContactName")}
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Relationship"
              labelPlacement="outside"
              placeholder="Enter relationship"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nextOfKinContactRelationship")}
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Email"
              labelPlacement="outside"
              placeholder="Enter contact email"
              type="tel"
              className="text-hrms-blue font-semibold"
              {...register("nextOfKinContactEmail")}
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="tel"
              className="text-hrms-blue font-semibold"
              {...register("nextOfKinContactNumber")}
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Address"
              labelPlacement="outside"
              placeholder="Enter address"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nextOfKinContactAddress")}
            />
          </div>
        </div>

        {/* Certified Membership */}
        <div className="pt-5">
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Certified Membership
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Title of Certified License"
              labelPlacement="outside"
              placeholder="Enter Title of Certified License"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("titleCertifiedLicense")}
            />
            <Input
              radius="sm"
              label="License Number"
              labelPlacement="outside"
              placeholder="Enter License Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("licenseNumber")}
            />
            <Controller
              name="issueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  aria-lable="Issue Date"
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

            {/* Expiry Date */}
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
          </div>
        </div>

        {/* Contact Information  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Contact Information (Correspondence Address)
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Post Code"
              labelPlacement="outside"
              placeholder="Enter post code"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("postCode")}
            />
            <Input
              radius="sm"
              label="Address Line 1"
              labelPlacement="outside"
              placeholder="Enter address line 1"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine1")}
            />
            <Input
              radius="sm"
              label="Address Line 2"
              labelPlacement="outside"
              placeholder="Enter address line 2"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine2")}
            />
            <Input
              radius="sm"
              label="Address Line 3"
              labelPlacement="outside"
              placeholder="Enter address line 3"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine3")}
            />
            <Input
              radius="sm"
              label="City / County"
              labelPlacement="outside"
              placeholder="Enter city / county"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("city")}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Proof Of Address"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("proofOfAddress")}
            />
          </div>
        </div>

        {/* passport details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Passport Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Passport Number"
              labelPlacement="outside"
              placeholder="Enter passport number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportNumber")}
            />
            <Controller
              name="passportNationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="Passport Nationlity"
                  radius="sm"
                  label="Nationality (Passport)"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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
            <Input
              radius="sm"
              label="Place of Birth"
              labelPlacement="outside"
              placeholder="Enter place of birth"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("placeOfBirth")}
            />
            <Input
              radius="sm"
              label="Passport Issued By"
              labelPlacement="outside"
              placeholder="Enter issuing authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportIssuedBy")}
            />

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

            <Input
              radius="sm"
              label="Passport Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("passportDocument")}
            />
            <Input
              radius="sm"
              label="Passport Remarks"
              labelPlacement="outside"
              placeholder="Enter passport remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportRemarks")}
            />
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
          </div>
        </div>

        {/*  Visa Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Visa/BRP Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="BPP/Visa Number"
              labelPlacement="outside"
              placeholder="Enter visa number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaNumber")}
            />
            <Controller
              name="visaNationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="Visa Nationality"
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Visa Issued By"
              labelPlacement="outside"
              placeholder="Enter visa issuing authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaIssuedBy")}
            />
            {/* Visa Issue Date */}
            <Controller
              name="visaIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  aria-lable="Visa Issue Date"
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

            {/* Visa Expiry Date */}
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

            {/* Visa Eligible Review Date */}
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
            <Input
              radius="sm"
              label="Visa Document Front Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("visaDocumentFrontSide")}
            />
            <Input
              radius="sm"
              label="Visa Document Back Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("visaDocumentBackSide")}
            />
            <Input
              radius="sm"
              label="Visa Remarks"
              labelPlacement="outside"
              placeholder="Enter visa remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaRemarks")}
            />
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
          </div>
        </div>

        {/*EUSS (European Union Settlement Scheme) / Time Limit Details  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            EUSS/Time Limit Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Reference Number"
              labelPlacement="outside"
              placeholder="Enter reference number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("eussReferenceNumber")}
            />
            <Controller
              name="eussNationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="EUSS Nationality"
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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

            {/* EUSS Issue Date */}
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

            {/* EUSS Expiry Date */}
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

            {/* EUSS Eligible Review Date */}
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
            <Input
              radius="sm"
              label="EUSS/Time Limit Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("eussDocument")}
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("eussRemarks")}
            />
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
          </div>
        </div>

        {/* DBS (Disclosure and Barring Service) Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            DBS (Disclosure and Barring Service) Information
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {dbsTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Reference Number"
              labelPlacement="outside"
              placeholder="Enter Reference Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsReferenceNumber")}
            />
            <Input
              radius="sm"
              label="Nationality"
              labelPlacement="outside"
              placeholder="Enter Nationality"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsNationality")}
            />
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
            <Input
              radius="sm"
              label="DBS Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("dbsDocument")}
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsRemarks")}
            />
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
          </div>
        </div>

        {/* National ID Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            National ID Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="National ID Number"
              labelPlacement="outside"
              placeholder="Enter national id number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdNumber")}
            />
            <Controller
              name="nationalIdNationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="National Id Nationality"
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

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
            <Input
              radius="sm"
              label="National Id Document Front Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdDocument")}
            />
            <Input
              radius="sm"
              label="National Id Remarks"
              labelPlacement="outside"
              placeholder="Enter visa remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdRemarks")}
            />
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
          </div>
        </div>

        {/* other Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Other Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Document name."
              labelPlacement="outside"
              placeholder="Enter Document name."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("othersDocumentName")}
            />
            <Input
              radius="sm"
              label="Document reference number."
              labelPlacement="outside"
              placeholder="Enter document reference number."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("othersDocumentReferenceNumber")}
            />
            <Controller
              name="othersNationality"
              control={control}
              render={({ field }) => (
                <Select
                  aria-lable="Others Document Nationality"
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
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

            {/* Expiry Date */}
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

            {/* Eligible Review Date */}
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

            <Input
              radius="sm"
              label="Upload Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("othersUploadDocument")}
            />
            <Input
              radius="sm"
              label="Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("remarks")}
            />
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
          </div>
        </div>

        {/* Pay Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Pay Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {payGroups.map((payGroup) => (
                    <SelectItem key={payGroup.value} value={payGroup.value}>
                      {payGroup.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {wedgesPaymodes.map((wedgesPaymode) => (
                    <SelectItem
                      key={wedgesPaymode.value}
                      value={wedgesPaymode.value}
                    >
                      {wedgesPaymode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {annualPays.map((annualPay) => (
                    <SelectItem key={annualPay.value} value={annualPay.value}>
                      {annualPay.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentTypes.map((paymentType) => (
                    <SelectItem
                      key={paymentType.value}
                      value={paymentType.value}
                    >
                      {paymentType.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Basic / Daily Wedges"
              labelPlacement="outside"
              placeholder="Enter Basic / Daily Wedges."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("basicDailyWedges")}
            />
            <Input
              radius="sm"
              label="Min. Working Hour."
              labelPlacement="outside"
              placeholder="Enter Min. Working Hour."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("minWorkingHour")}
            />
            <Input
              radius="sm"
              label="Rate."
              labelPlacement="outside"
              placeholder="Enter Rate."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("rate")}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {taxCodes.map((taxCode) => (
                    <SelectItem key={taxCode.value} value={taxCode.value}>
                      {taxCode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Tax Reference"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("taxReference")}
            />

            <Input
              radius="sm"
              label="Tax Percentage"
              labelPlacement="outside"
              placeholder="Tax Percentage"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("taxPercentage")}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentModes.map((paymentMode) => (
                    <SelectItem
                      key={paymentMode.value}
                      value={paymentMode.value}
                    >
                      {paymentMode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {bankNames.map((bankName) => (
                    <SelectItem key={bankName.value} value={bankName.value}>
                      {bankName.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Branch Name"
              labelPlacement="outside"
              placeholder="Enter Branch Name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("branchName")}
            />
            <Input
              radius="sm"
              label="Account No"
              labelPlacement="outside"
              placeholder="Account No"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("accountNo")}
            />
            <Input
              radius="sm"
              label="Sort Code"
              labelPlacement="outside"
              placeholder="Enter Sort Code"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("sortCode")}
            />

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
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentCurrencies.map((paymentCurrency) => (
                    <SelectItem
                      key={paymentCurrency.value}
                      value={paymentCurrency.value}
                    >
                      {paymentCurrency.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
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

        {/* Verification Status */}
        <div>
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
          <h5 className="text-lg font-medium text-red-600">
            (*) Marked fields are mandatory fields
          </h5>
        </div>
      </form>
    </main>
  );
};

export default AddDocuments;
