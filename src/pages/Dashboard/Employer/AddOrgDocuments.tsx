/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Checkbox, Input, Select, SelectItem } from "@heroui/react";
import {
  countries,
  organizationFileFields,
  organizationTypes,
  sectorsName,
  tradingPeriods,
} from "../../../data";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddOrgDocumentsMutation } from "../../../redux/features/employer/addOrgDocumentsApi";
import { toast } from "sonner";
// import { useAppSelector } from "../../../redux/hooks";
// import { useCurrentUser } from "../../../redux/features/auth/authSlice";

const AddOrgDocuments = () => {
  const [isKeyPersonSameAsAuthorised, setIsKeyPersonSameAsAuthorised] =
    useState(false);
  const [isLevel1PersonSameAsAuthorised, setIsLevel1PersonSameAsAuthorised] =
    useState(false);

  const { register, control, handleSubmit, watch, setValue } = useForm();

  const [addOrgDocuments] = useAddOrgDocumentsMutation();
  // const user = useAppSelector(useCurrentUser);
  // console.log("user", user?.email);

  // watch authorise person details
  const watchAuthorisedPerson = watch([
    "firstName",
    "lastName",
    "designation",
    "phoneNo",
    "email",
    "proofOfId",
    "criminalHistory",
  ]);

  // update key contact person details when checkbox is checked
  useEffect(() => {
    if (isKeyPersonSameAsAuthorised) {
      setValue("keyPersonFirstName", watchAuthorisedPerson[0]);
      setValue("keyPersonLastName", watchAuthorisedPerson[1]);
      setValue("keyPersonDesignation", watchAuthorisedPerson[2]);
      setValue("keyPersonPhoneNo", watchAuthorisedPerson[3]);
      setValue("keyPersonEmail", watchAuthorisedPerson[4]);
      setValue("keyPersonProofOfId", watchAuthorisedPerson[5]);
      setValue("keyPersonCriminalHistory", watchAuthorisedPerson[6]);
    } else {
      setValue("keyPersonFirstName", "");
      setValue("keyPersonLastName", "");
      setValue("keyPersonDesignation", "");
      setValue("keyPersonPhoneNo", "");
      setValue("keyPersonEmail", "");
      setValue("keyPersonProofOfId", null);
      setValue("keyPersonCriminalHistory", "");
    }
  }, [isKeyPersonSameAsAuthorised, watchAuthorisedPerson]);

  // update level 1 user details when checkbox is checked
  useEffect(() => {
    if (isLevel1PersonSameAsAuthorised) {
      setValue("level1PersonFirstName", watchAuthorisedPerson[0]);
      setValue("level1PersonLastName", watchAuthorisedPerson[1]);
      setValue("level1PersonDesignation", watchAuthorisedPerson[2]);
      setValue("level1PersonPhoneNo", watchAuthorisedPerson[3]);
      setValue("level1PersonEmail", watchAuthorisedPerson[4]);
      setValue("level1PersonProofOfId", watchAuthorisedPerson[5]);
      setValue("level1PersonCriminalHistory", watchAuthorisedPerson[6]);
    } else {
      setValue("level1PersonFirstName", "");
      setValue("level1PersonLastName", "");
      setValue("level1PersonDesignation", "");
      setValue("level1PersonPhoneNo", "");
      setValue("level1PersonEmail", "");
      setValue("level1PersonProofOfId", null);
      setValue("level1PersonCriminalHistory", "");
    }
  }, [isLevel1PersonSameAsAuthorised, watchAuthorisedPerson]);

  const handleSubmitForm = async (data: FieldValues) => {
    // Create FormData object for file uploads
    const formData = new FormData();

    // Organize form data by sections
    const formattedData = {
      // Organization Details section
      organisationDetails: {
        name: data.organizationName,
        type: data.organizationType,
        registrationNo: data.registrationNumber,
        contactNo: data.contactNumber,
        loginEmail: data.loginEmail,
        organisationEmail: data.organizationEmail,
        websiteURL: data.websiteURL,
        landlineNo: data.landlineNumber,
        tradingName: data.tradingName,
        tradingPeriod: data.tradingPeriod,
        nameOfSector: data.sector,
        nameChangeLast5Years: data.nameChangeLast5Years,
        FacedPenaltyLast3Years: data.penaltyLast3Years,
      },

      // Authorised Person Details section
      authorisedPerson: {
        firstName: data.firstName,
        lastName: data.lastName,
        designation: data.designation,
        phoneNo: data.phoneNo,
        email: data.email,
        criminalHistory: data.criminalHistory,
      },

      // Key Contact Person section
      keyContactPerson: {
        firstName: data.keyPersonFirstName,
        lastName: data.keyPersonLastName,
        designation: data.keyPersonDesignation,
        phoneNo: data.keyPersonPhoneNo,
        email: data.keyPersonEmail,
        criminalHistory: data.keyPersonCriminalHistory,
      },

      // Level 1 User section
      level1User: {
        firstName: data.level1PersonFirstName,
        lastName: data.level1PersonLastName,
        designation: data.level1PersonDesignation,
        phoneNo: data.level1PersonPhoneNo,
        email: data.level1PersonEmail,
        criminalHistory: data.level1PersonCriminalHistory,
      },

      // Organisation Address section
      organisationAddress: {
        postCode: data.postCode,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        addressLine3: data.addressLine3,
        city: data.cityCounty,
        country: data.country,
      },

      // Trading Hours section
      tradingHours: [
        {
          day: "Monday",
          status: data.mondayStatus,
          startTime: data.mondayOpeningTime,
          endTime: data.mondayClosingTime,
        },
        {
          day: "Tuesday",
          status: data.tuesdayStatus,
          startTime: data.tuesdayOpeningTime,
          endTime: data.tuesdayClosingTime,
        },
        {
          day: "Wednesday",
          status: data.wednesdayStatus,
          startTime: data.wednesdayOpeningTime,
          endTime: data.wednesdayClosingTime,
        },
        {
          day: "Thursday",
          status: data.thursdayStatus,
          startTime: data.thursdayOpeningTime,
          endTime: data.thursdayClosingTime,
        },
        {
          day: "Friday",
          status: data.fridayStatus,
          startTime: data.fridayOpeningTime,
          endTime: data.fridayClosingTime,
        },
        {
          day: "Saturday",
          status: data.saturdayStatus,
          startTime: data.saturdayOpeningTime,
          endTime: data.saturdayClosingTime,
        },
        {
          day: "Sunday",
          status: data.sundayStatus,
          startTime: data.sundayOpeningTime,
          endTime: data.sundayClosingTime,
        },
      ],

      // documents section
      documents: {
        payeeAccountReference: "",
        latestRti: "",
        employerLiabilityInsurance: "",
        proofOfBusinessPremises: "",
        copyOfLease: "",
        businessBankStatement: "",
        signedAnnualAccounts: "",
        vatCertificate: "",
        healthSafetyRating: "",
        regulatoryBodyCertificate: "",
        businessLicense: "",
        franchiseAgreement: "",
        governingBodyRegistration: "",
        auditedAnnualAccounts: "",
        othersDocuments: "",
      },
    };

    console.log("Formatted Data:", formattedData);
    //append formattedData to formData as a JSON string
    formData.append("data", JSON.stringify(formattedData));

    // Append files to FormData
    organizationFileFields.forEach((field) => {
      const file = data[field]?.[0];
      if (file) {
        formData.append(field, file);
      }
    });

    if (!isKeyPersonSameAsAuthorised && data.keyPersonProofOfId) {
      formData.append("keyPersonProofOfId", data.keyPersonProofOfId?.[0]);
    }
    if (!isLevel1PersonSameAsAuthorised && data.level1PersonProofOfId) {
      formData.append("level1PersonProofOfId", data.level1PersonProofOfId?.[0]);
    }

    // console.log("FormData entries:");
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    const toastId = toast.loading("Adding organisation documents...");

    try {
      const res = await addOrgDocuments(formData).unwrap();
      // const res = await addOrgDocuments(formattedData).unwrap();
      console.log("Response:", res);
      toast.success("Organisation documents added successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      console.log("Error:", err);
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Organaisation Documents
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Organisation details */}
        <div>
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light mt-5">
            Organisation Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Organisation Name"
              labelPlacement="outside"
              placeholder="Enter organisation name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("organizationName")}
            />
            <Controller
              name="organizationType"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Type of Organisation"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  placeholder="Select organisation type"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {organizationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Registration Number"
              labelPlacement="outside"
              placeholder="Enter organisation registration number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("registrationNumber")}
            />

            <Input
              radius="sm"
              label="Contact No"
              labelPlacement="outside"
              placeholder="Enter organisation contact number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("contactNumber")}
            />
            <Input
              radius="sm"
              label="LogIn Email"
              labelPlacement="outside"
              placeholder="Enter LogIn email"
              type="email"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("loginEmail")}
            />
            <Input
              radius="sm"
              label="Organisation Email"
              labelPlacement="outside"
              placeholder="Enter organisation email"
              type="email"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("organizationEmail")}
            />
            <Input
              radius="sm"
              label="Website URL"
              labelPlacement="outside"
              placeholder="Enter organisation website URL"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("websiteURL")}
            />

            <Input
              radius="sm"
              label="Landline No"
              labelPlacement="outside"
              placeholder="Enter organisation landline number"
              type="text"
              required
              className="text-hrms-blue font-semibold"
              {...register("landlineNumber")}
            />
            <Input
              radius="sm"
              label="Trading Name"
              labelPlacement="outside"
              placeholder="Enter organisation trading name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("tradingName")}
            />
            <Controller
              name="tradingPeriod"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Trading Period"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  placeholder="Select trading period"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {tradingPeriods.map((period) => (
                    <SelectItem key={period.value} value={period.value}>
                      {period.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              name="sector"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Name of Sector"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  placeholder="Select sector"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {sectorsName.map((sector) => (
                    <SelectItem key={sector.value} value={sector.value}>
                      {sector.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Organisation Logo"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("logo")}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 pt-5">
            <Controller
              name="nameChangeLast5Years"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Have you changed Organisation Name/Trading Name in the last 5 years?"
                  className="text-hrms-blue font-semibold"
                  placeholder="Select Yes or No"
                  isRequired
                  labelPlacement="outside"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />

            <Controller
              name="penaltyLast3Years"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Did your organisation faced penalty (e.g. recruiting illegal employee) in the last 3 years?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* authorised person details */}
        <div className="pt-5">
          <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Authorised Person Details
          </h3>
          <div className="grid grid-cols-3 gap-5 pt-5">
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
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("lastName")}
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("designation")}
            />

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("phoneNo")}
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
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("proofOfId")}
            />

            <Controller
              name="criminalHistory"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* key contact person details */}
        <div className="pt-5">
          <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Key Contact Person
          </h3>
          <Checkbox
            isSelected={isKeyPersonSameAsAuthorised}
            onValueChange={(value) => setIsKeyPersonSameAsAuthorised(value)}
            className="pt-5"
          >
            If Same As Authorised Person
          </Checkbox>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              isDisabled={isKeyPersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("keyPersonFirstName")}
            />
            {/* <input
              type="text"
              required
              className="text-hrms-blue font-semibold border border-hrms-blue-light rounded-md"
              {...register("keyPersonFirstName")}
            /> */}
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
              type="text"
              isRequired
              isDisabled={isKeyPersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("keyPersonLastName")}
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              isRequired
              isDisabled={isKeyPersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("keyPersonDesignation")}
            />

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="text"
              isRequired
              isDisabled={isKeyPersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("keyPersonPhoneNo")}
            />
            <Input
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
              isRequired
              isDisabled={isKeyPersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("keyPersonEmail")}
            />
            <Input
              radius="sm"
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("keyPersonProofOfId")}
            />

            <Controller
              name="keyPersonCriminalHistory"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  isDisabled={isKeyPersonSameAsAuthorised}
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* level 1 user details */}
        <div className="pt-5">
          <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Level 1 User
          </h3>
          <Checkbox
            isSelected={isLevel1PersonSameAsAuthorised}
            onValueChange={(value) => setIsLevel1PersonSameAsAuthorised(value)}
            className="pt-5"
          >
            If Same As Authorised Person
          </Checkbox>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              isDisabled={isLevel1PersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("level1PersonFirstName")}
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
              type="text"
              isRequired
              isDisabled={isLevel1PersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("level1PersonLastName")}
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              isRequired
              isDisabled={isLevel1PersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("level1PersonDesignation")}
            />

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="text"
              isRequired
              isDisabled={isLevel1PersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("level1PersonPhoneNo")}
            />
            <Input
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
              isRequired
              isDisabled={isLevel1PersonSameAsAuthorised}
              className="text-hrms-blue font-semibold"
              {...register("level1PersonEmail")}
            />
            <Input
              radius="sm"
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("level1PersonProofOfId")}
            />

            <Controller
              name="level1PersonCriminalHistory"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  isRequired
                  isDisabled={isLevel1PersonSameAsAuthorised}
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Organisation Address */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Organisation Address
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
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
              {...register("cityCounty")}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
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
          </div>
        </div>

        {/* Treading Hours */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Trading Hours
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div className="space-y-3">
              <Input
                radius="sm"
                placeholder="Monday"
                label="Day"
                labelPlacement="outside"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Tuesday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Wednesday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Thursday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Friday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Saturday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Sunday"
                type="text"
                isReadOnly
                className="text-hrms-blue font-semibold"
              />
            </div>
            <div className="space-y-3">
              <Controller
                name="mondayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Monday Status"
                    radius="sm"
                    label="Status"
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
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />

              <Controller
                name="tuesdayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Tuesday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="wednesdayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Wednesday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="thursdayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Thursday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="fridayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Friday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="saturdayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Saturday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="sundayStatus"
                control={control}
                render={({ field }) => (
                  <Select
                    aria-label="Sunday Status"
                    radius="sm"
                    className="text-hrms-blue font-semibold"
                    placeholder="Select status"
                    selectedKeys={
                      field.value ? new Set([field.value]) : new Set()
                    } // Ensure proper binding
                    onSelectionChange={(keys) =>
                      field.onChange(Array.from(keys)[0])
                    } // Extract single value from Set
                  >
                    <SelectItem key="Close" value="Close">
                      Close
                    </SelectItem>
                    <SelectItem key="Open" value="Open">
                      Open
                    </SelectItem>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-3">
              <Input
                radius="sm"
                label="Opening Time"
                labelPlacement="outside"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("mondayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("tuesdayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("wednesdayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("thursdayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("fridayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("saturdayOpeningTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("sundayOpeningTime")}
              />
            </div>
            <div className="space-y-3">
              <Input
                radius="sm"
                label="Closing Time"
                labelPlacement="outside"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("mondayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("tuesdayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("wednesdayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("thursdayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("fridayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("saturdayClosingTime")}
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
                {...register("sundayClosingTime")}
              />
            </div>
          </div>
        </div>

        {/* Upload documents */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Upload Documents
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="PAYEE And Account Reference Letter From HMRC"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("payeeAccountReference")}
            />
            <Input
              radius="sm"
              label="Latest RTI from accountant"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("latestRti")}
            />
            <Input
              radius="sm"
              label="Employer Liability Insurance Certificate"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("employerLiabilityInsurance")}
            />
            <Input
              radius="sm"
              label="Proof of Business Permises (Tenancy Agreement)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("proofOfBusinessPremises")}
            />
            <Input
              radius="sm"
              label="Copy of Lease or Freehold Property"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("copyOfLease")}
            />
            <Input
              radius="sm"
              label="Business Bank Statement for last 1/2/3 months"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("businessBankStatement")}
            />
            <Input
              radius="sm"
              label="Signed Annual Account ( If the business is more than 18 months old)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("signedAnnualAccount")}
            />
            <Input
              radius="sm"
              label="VAT Certificate (If Registered)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("vatCertificate")}
            />
            <Input
              radius="sm"
              label="Copy of Health and Safty star Rating (Applicable for food business only)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("healthSafetyRating")}
            />
            <Input
              radius="sm"
              label="Regulatory Body Certificate (If Applicable for your business)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("regulatoryBodyCertificate")}
            />
            <Input
              radius="sm"
              label="Registered business license or certificate"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("businessLicense")}
            />
            <Input
              radius="sm"
              label="Franchise Agreement"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("franchiseAgreement")}
            />
            <Input
              radius="sm"
              label="Governing Body Registration "
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("governingBodyRegistration")}
            />
            <Input
              radius="sm"
              label="Audited annual account"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("auditedAnnualAccount")}
            />
            <Input
              radius="sm"
              label="Others Documents"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("othersDocuments")}
            />
          </div>
        </div>

        {/* submit button area */}
        <div className="flex justify-between items-center pt-5 pb-10">
          <Button
            className="bg-hrms-blue text-white text-lg font-semibold mt-4"
            type="submit"
          >
            Submit
          </Button>
          <h5 className="text-lg font-medium text-red-600">
            (*) Marked fields are mandatory fields
          </h5>
        </div>
      </form>
    </main>
  );
};

export default AddOrgDocuments;
