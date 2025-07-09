/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Checkbox, Input } from "@heroui/react";
import {
  countries,
  organizationTypes,
  sectorsName,
  tradingPeriods,
} from "../../../data";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { organizationFileFields } from "../../../constants/organisation";

import { useParams } from "react-router-dom";
import { useGetOrganisationByIdQuery } from "../../../redux/features/admin/adminApi";
import { RHFFileInput, RHFInput, RHFRadio } from "../../../components";
import RHFSelect from "../../../components/input/RHFSelect";
import { useUpdateOrganisationMutation } from "../../../redux/features/employer/createOrganisation";
import {
  EmployerUpdateFormSchemaType,
  updateOrgDocumentsSchema,
} from "../../../schemas/updateOrganisationSchema";

const EditOrganisation = () => {
  const { id } = useParams();
  //   console.log("Organisation ID:", id);

  const [isKeyPersonSameAsAuthorised, setIsKeyPersonSameAsAuthorised] =
    useState(false);
  const [isLevel1PersonSameAsAuthorised, setIsLevel1PersonSameAsAuthorised] =
    useState(false);

  const {
    // register,
    reset,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EmployerUpdateFormSchemaType>({
    resolver: zodResolver(updateOrgDocumentsSchema),
    // defaultValues: {},
  });

  // console.log("Form Errors:", errors);

  const {
    data: org,
    isLoading: orgLoading,
    error: orgError,
  } = useGetOrganisationByIdQuery(id);

  const [updateOrganisation] = useUpdateOrganisationMutation();

  // console.log("Organisation Data:", org);

  useEffect(() => {
    if (org?.data) {
      reset({
        organisationName: org?.data?.organisationDetails.name,
        organisationType: org?.data?.organisationDetails.type,
        registrationNumber: org?.data?.organisationDetails.registrationNo,
        contactNumber: org?.data?.organisationDetails.contactNo,
        organisationEmail: org?.data?.organisationDetails.organisationEmail,
        websiteURL: org?.data?.organisationDetails.websiteURL,
        landlineNumber: org?.data?.organisationDetails.landlineNo,
        tradingName: org?.data?.organisationDetails.tradingName,
        tradingPeriod: org?.data?.organisationDetails.tradingPeriod,
        sector: org?.data?.organisationDetails.nameOfSector,
        nameChangeLast5Years:
          org?.data?.organisationDetails.nameChangeLast5Years,
        penaltyLast3Years:
          org?.data?.organisationDetails.FacedPenaltyLast3Years,

        firstName: org?.data?.authorisedPerson.firstName,
        lastName: org?.data?.authorisedPerson.lastName,
        designation: org?.data?.authorisedPerson.designation,
        phoneNo: org?.data?.authorisedPerson.phoneNo,
        email: org?.data?.authorisedPerson.email,
        criminalHistory: org?.data?.authorisedPerson.criminalHistory,

        keyPersonFirstName: org?.data?.keyContactPerson.firstName,
        keyPersonLastName: org?.data?.keyContactPerson.lastName,
        keyPersonDesignation: org?.data?.keyContactPerson.designation,
        keyPersonPhoneNo: org?.data?.keyContactPerson.phoneNo,
        keyPersonEmail: org?.data?.keyContactPerson.email,
        keyPersonCriminalHistory: org?.data?.keyContactPerson.criminalHistory,

        level1PersonFirstName: org?.data?.level1User.firstName,
        level1PersonLastName: org?.data?.level1User.lastName,
        level1PersonDesignation: org?.data?.level1User.designation,
        level1PersonPhoneNo: org?.data?.level1User.phoneNo,
        level1PersonEmail: org?.data?.level1User.email,
        level1PersonCriminalHistory: org?.data?.level1User.criminalHistory,

        postCode: org?.data?.organisationAddress.postCode,
        addressLine1: org?.data?.organisationAddress.addressLine1,
        addressLine2: org?.data?.organisationAddress.addressLine2,
        addressLine3: org?.data?.organisationAddress.addressLine3,
        cityCounty: org?.data?.organisationAddress.city,
        country: org?.data?.organisationAddress.country,
        mondayStatus: org?.data?.tradingHours[0].status,
        mondayOpeningTime: org?.data?.tradingHours[0].startTime,
        mondayClosingTime: org?.data?.tradingHours[0].endTime,
        tuesdayStatus: org?.data?.tradingHours[1].status,
        tuesdayOpeningTime: org?.data?.tradingHours[1].startTime,
        tuesdayClosingTime: org?.data?.tradingHours[1].endTime,
        wednesdayStatus: org?.data?.tradingHours[2].status,
        wednesdayOpeningTime: org?.data?.tradingHours[2].startTime,
        wednesdayClosingTime: org?.data?.tradingHours[2].endTime,
        thursdayStatus: org?.data?.tradingHours[3].status,
        thursdayOpeningTime: org?.data?.tradingHours[3].startTime,
        thursdayClosingTime: org?.data?.tradingHours[3].endTime,
        fridayStatus: org?.data?.tradingHours[4].status,
        fridayOpeningTime: org?.data?.tradingHours[4].startTime,
        fridayClosingTime: org?.data?.tradingHours[4].endTime,
        saturdayStatus: org?.data?.tradingHours[5].status,
        saturdayOpeningTime: org?.data?.tradingHours[5].startTime,
        saturdayClosingTime: org?.data?.tradingHours[5].endTime,
        sundayStatus: org?.data?.tradingHours[6].status,
        sundayOpeningTime: org?.data?.tradingHours[6].startTime,
        sundayClosingTime: org?.data?.tradingHours[6].endTime,
      });
    }
  }, [org, reset]);

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
  //   console.log();

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
  }, [isKeyPersonSameAsAuthorised]);

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
  }, [isLevel1PersonSameAsAuthorised]);

  const handleSubmitForm = async (data: FieldValues) => {
    // Create FormData object for file uploads
    const formData = new FormData();

    // Organize form data by sections
    const formattedData = {
      employerData: {
        // Organization Details section
        organisationDetails: {
          name: data.organisationName,
          type: data.organisationType,
          registrationNo: data.registrationNumber,
          contactNo: data.contactNumber,

          organisationEmail: data.organisationEmail,
          websiteURL: data.websiteURL,
          landlineNo: data.landlineNumber,
          tradingName: data.tradingName,
          tradingPeriod: data.tradingPeriod,
          nameOfSector: data.sector,
          nameChangeLast5Years: data.nameChangeLast5Years,
          FacedPenaltyLast3Years: data.penaltyLast3Years,
          logo: org?.data?.organisationDetails.logo,
        },

        // Authorised Person Details section
        authorisedPerson: {
          firstName: data.firstName,
          lastName: data.lastName,
          designation: data.designation,
          phoneNo: data.phoneNo,
          email: data.email,
          criminalHistory: data.criminalHistory,
          proofOfId: org?.data?.authorisedPerson.proofOfId,
        },

        // Key Contact Person section
        keyContactPerson: {
          firstName: data.keyPersonFirstName,
          lastName: data.keyPersonLastName,
          designation: data.keyPersonDesignation,
          phoneNo: data.keyPersonPhoneNo,
          email: data.keyPersonEmail,
          criminalHistory: data.keyPersonCriminalHistory,
          proofOfId: org?.data?.keyContactPerson.proofOfId,
        },

        // Level 1 User section
        level1User: {
          firstName: data.level1PersonFirstName,
          lastName: data.level1PersonLastName,
          designation: data.level1PersonDesignation,
          phoneNo: data.level1PersonPhoneNo,
          email: data.level1PersonEmail,
          criminalHistory: data.level1PersonCriminalHistory,
          proofOfId: org?.data?.level1User.proofOfId,
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
          payeeAccountReference: org?.data?.documents.payeeAccountReference,
          latestRti: org?.data?.documents.latestRti,
          employerLiabilityInsurance:
            org?.data?.documents.employerLiabilityInsurance,
          proofOfBusinessPremises: org?.data?.documents.proofOfBusinessPremises,
          copyOfLease: org?.data?.documents.copyOfLease,
          businessBankStatement: org?.data?.documents.businessBankStatement,
          signedAnnualAccount: org?.data?.documents.signedAnnualAccount,
          vatCertificate: org?.data?.documents.vatCertificate,
          healthSafetyRating: org?.data?.documents.healthSafetyRating,
          regulatoryBodyCertificate:
            org?.data?.documents.regulatoryBodyCertificate,
          businessLicense: org?.data?.documents.businessLicense,
          franchiseAgreement: org?.data?.documents.franchiseAgreement,
          governingBodyRegistration:
            org?.data?.documents.governingBodyRegistration,
          auditedAnnualAccount: org?.data?.documents.auditedAnnualAccount,
          othersDocuments: org?.data?.documents.othersDocuments,
        },
      },
    };

    // console.log("Formatted Data:", formattedData);
    //append formattedData to formData as a JSON string
    formData.append("data", JSON.stringify(formattedData));

    // // Append files to FormData
    organizationFileFields.forEach((field) => {
      const file = data[field];

      if (file) {
        formData.append(field, file);
      }
    });

    if (!isKeyPersonSameAsAuthorised && data.keyPersonProofOfId) {
      formData.append("keyPersonProofOfId", data.keyPersonProofOfId);
    }
    if (!isLevel1PersonSameAsAuthorised && data.level1PersonProofOfId) {
      formData.append("level1PersonProofOfId", data.level1PersonProofOfId);
    }

    // console.log("FormData entries:");
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    const toastId = toast.loading("Updating organisation...");
    // console.log("id:", id);

    try {
      await updateOrganisation({ organisationId: id, data: formData }).unwrap();
      // const res = await addOrgDocuments(formattedData).unwrap();
      // console.log("Response:", res);
      toast.success("Organisation updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      // console.log("Error:", err);
      toast.error(err.data.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <main className="dashboard-padding ">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Edit Organaisation
      </h1>
      {orgLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-gray-500">
            Loading Organisation Details...
          </p>
        </div>
      ) : orgError ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold text-red-500">
            Internal server error! Please try again later.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* Organisation details */}
          <div>
            <div className="pb-2 border-b border-hrms-blue-light flex gap-5 items-center justify-between">
              <h1 className="text-xl font-medium  mt-5">
                Organisation Details
              </h1>
              <Button
                size="sm"
                as={Link}
                target="_blank"
                to="https://find-and-update.company-information.service.gov.uk/"
                className="bg-hrms-blue hover:bg-hrms-blue-dark text-white text-base font-bold"
              >
                Find
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
              <RHFInput
                name="organisationName"
                control={control}
                label="Organisation Name"
                placeholder="Enter organisation name"
                error={errors.organisationName?.message}
              />

              <RHFSelect
                name="organisationType"
                control={control}
                label="Type of Organisation"
                placeholder="Select organisation type"
                options={organizationTypes}
              />

              <RHFInput
                name="registrationNumber"
                control={control}
                label="Registration Number"
                placeholder="Enter registration number"
                error={errors.registrationNumber?.message}
              />

              <RHFInput
                name="contactNumber"
                control={control}
                label="Contact Number"
                placeholder="Enter contact number"
                error={errors.contactNumber?.message}
              />

              <RHFInput
                name="organisationEmail"
                control={control}
                label="Organisation Email"
                placeholder="Enter organisation email"
                type="email"
                error={errors.organisationEmail?.message}
              />

              <RHFInput
                name="websiteURL"
                control={control}
                label="Website URL"
                placeholder="Enter website URL"
                type="url"
                error={errors.websiteURL?.message}
              />

              <RHFInput
                name="landlineNumber"
                control={control}
                label="Landline Number"
                placeholder="Enter landline number"
                error={errors.landlineNumber?.message}
              />

              <RHFInput
                name="tradingName"
                control={control}
                label="Trading Name"
                placeholder="Enter trading name"
                error={errors.tradingName?.message}
              />

              <RHFSelect
                name="tradingPeriod"
                control={control}
                label="Trading Period"
                placeholder="Select trading period"
                options={tradingPeriods}
                error={errors.tradingPeriod?.message}
              />

              <RHFSelect
                name="sector"
                control={control}
                label="Name of Sector"
                placeholder="Select sector"
                options={sectorsName}
                error={errors.sector?.message}
              />

              <RHFFileInput
                name="logo"
                control={control}
                label="Organisation Logo"
                error={errors.logo?.message}
              />

              <RHFRadio
                name="nameChangeLast5Years"
                control={control}
                label="Have you changed Organisation Name/Trading Name in the last 5 years?"
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                error={errors.nameChangeLast5Years?.message}
              />

              <RHFRadio
                name="penaltyLast3Years"
                control={control}
                label="Did your organisation faced penalty (e.g. recruiting illegal employee) in the last 3 years?"
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                error={errors.penaltyLast3Years?.message}
              />
            </div>
          </div>

          {/* authorised person details */}
          <div className="pt-5">
            <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Authorised Person Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <RHFInput
                name="firstName"
                control={control}
                label="First Name"
                placeholder="Enter first name"
                error={errors.firstName?.message}
              />

              <RHFInput
                name="lastName"
                control={control}
                label="Last Name"
                placeholder="Enter last name"
                error={errors.lastName?.message}
              />

              <RHFInput
                name="designation"
                control={control}
                label="Designation"
                placeholder="Enter designation"
                error={errors.designation?.message}
              />

              <RHFInput
                name="phoneNo"
                control={control}
                label="Phone No"
                placeholder="Enter phone number"
                error={errors.phoneNo?.message}
              />

              <RHFInput
                name="email"
                control={control}
                label="Email"
                placeholder="Enter email"
                type="email"
                error={errors.email?.message}
              />

              <RHFFileInput
                name="proofOfId"
                control={control}
                label="Proof of ID"
                error={errors.keyPersonProofOfId?.message}
                disabled={isKeyPersonSameAsAuthorised}
              />
              <RHFRadio
                name="criminalHistory"
                control={control}
                label="Do you have a history of Criminal conviction
                    /Bankruptcy/Disqualification?"
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                error={errors.keyPersonCriminalHistory?.message}
                disabled={isKeyPersonSameAsAuthorised}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <RHFInput
                name="keyPersonFirstName"
                control={control}
                label="First Name"
                placeholder="Enter first name"
                disabled={isKeyPersonSameAsAuthorised}
                error={errors.keyPersonFirstName?.message}
              />

              <RHFInput
                name="keyPersonLastName"
                control={control}
                label="Last Name"
                placeholder="Enter last name"
                disabled={isKeyPersonSameAsAuthorised}
                error={errors.keyPersonLastName?.message}
              />

              <RHFInput
                name="keyPersonDesignation"
                control={control}
                label="Designation"
                placeholder="Enter designation"
                error={errors.keyPersonDesignation?.message}
                disabled={isKeyPersonSameAsAuthorised}
              />

              <RHFInput
                name="keyPersonPhoneNo"
                control={control}
                label="Phone No"
                placeholder="Enter phone number"
                error={errors.keyPersonPhoneNo?.message}
                disabled={isKeyPersonSameAsAuthorised}
              />

              <RHFInput
                name="keyPersonEmail"
                control={control}
                label="Email"
                placeholder="Enter email"
                type="email"
                error={errors.keyPersonEmail?.message}
                disabled={isKeyPersonSameAsAuthorised}
              />

              <RHFFileInput
                name="keyPersonProofOfId"
                control={control}
                label="Proof of ID"
                error={errors.keyPersonProofOfId?.message}
                disabled={isKeyPersonSameAsAuthorised}
              />

              <RHFRadio
                name="keyPersonCriminalHistory"
                control={control}
                label="Do you have a history of Criminal conviction
                    /Bankruptcy/Disqualification?"
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                error={errors.keyPersonCriminalHistory?.message}
                disabled={isKeyPersonSameAsAuthorised}
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
              onValueChange={(value) =>
                setIsLevel1PersonSameAsAuthorised(value)
              }
              className="pt-5"
            >
              If Same As Authorised Person
            </Checkbox>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <RHFInput
                name="level1PersonFirstName"
                control={control}
                label="First Name"
                placeholder="Enter first name"
                disabled={isLevel1PersonSameAsAuthorised}
                error={errors.level1PersonFirstName?.message}
              />

              <RHFInput
                name="level1PersonLastName"
                control={control}
                label="Last Name"
                placeholder="Enter last name"
                disabled={isLevel1PersonSameAsAuthorised}
                error={errors.level1PersonLastName?.message}
              />

              <RHFInput
                name="level1PersonDesignation"
                control={control}
                label="Designation"
                placeholder="Enter designation"
                error={errors.level1PersonDesignation?.message}
                disabled={isLevel1PersonSameAsAuthorised}
              />

              <RHFInput
                name="level1PersonPhoneNo"
                control={control}
                label="Phone No"
                placeholder="Enter phone number"
                error={errors.level1PersonPhoneNo?.message}
                disabled={isLevel1PersonSameAsAuthorised}
              />

              <RHFInput
                name="level1PersonEmail"
                control={control}
                label="Email"
                placeholder="Enter email"
                type="email"
                error={errors.level1PersonEmail?.message}
                disabled={isLevel1PersonSameAsAuthorised}
              />

              <RHFFileInput
                name="level1PersonProofOfId"
                control={control}
                label="Proof of ID"
                error={errors.level1PersonProofOfId?.message}
                disabled={isLevel1PersonSameAsAuthorised}
              />

              <RHFRadio
                name="level1PersonCriminalHistory"
                control={control}
                label="Do you have a history of Criminal conviction
                    /Bankruptcy/Disqualification?"
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
                error={errors.level1PersonCriminalHistory?.message}
                disabled={isLevel1PersonSameAsAuthorised}
              />
            </div>
          </div>

          {/* key contact person details */}
          {/* <div className="pt-5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isKeyPersonSameAsAuthorised}
                  defaultValue={org?.data?.keyContactPerson?.firstName}
                  {...register("keyPersonFirstName")}
                />
                {errors.keyPersonFirstName && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonFirstName?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="keyPersonLastName"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="keyPersonLastName"
                  placeholder="Enter last name"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isKeyPersonSameAsAuthorised}
                  {...register("keyPersonLastName")}
                />
                {errors.keyPersonLastName && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonLastName?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="keyPersonDesignation"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="keyPersonDesignation"
                  placeholder="Enter designation"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isKeyPersonSameAsAuthorised}
                  {...register("keyPersonDesignation")}
                />
                {errors.keyPersonDesignation && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonDesignation?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="keyPersonPhoneNo"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Phone No
                </label>
                <input
                  type="text"
                  id="keyPersonPhoneNo"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isKeyPersonSameAsAuthorised}
                  {...register("keyPersonPhoneNo")}
                />
                {errors.keyPersonPhoneNo && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonPhoneNo?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="keyPersonEmail"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="keyPersonEmail"
                  placeholder="Enter email"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isKeyPersonSameAsAuthorised}
                  {...register("keyPersonEmail")}
                />
                {errors.keyPersonEmail && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonEmail?.message}
                  </small>
                )}
              </div>

              <div>
                <Input
                  radius="sm"
                  label="Proof of ID"
                  labelPlacement="outside"
                  type="file"
                  className="text-hrms-blue font-semibold"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setValue("keyPersonProofOfId", file, {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
                {errors.keyPersonProofOfId && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonProofOfId?.message}
                  </small>
                )}
              </div>

              <div>
                <Controller
                  name="keyPersonCriminalHistory"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      aria-label="Do you have a history of Criminal conviction
                    /Bankruptcy/Disqualification?"
                      label="Do you have a history of Criminal conviction
                    /Bankruptcy/Disqualification?"
                      orientation="horizontal"
                      value={field.value}
                      onValueChange={field.onChange}
                      className="text-base font-medium "
                    >
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="No">No</Radio>
                    </RadioGroup>
                  )}
                />
                {errors.keyPersonCriminalHistory && (
                  <small className="text-red-700 font-medium">
                    {errors.keyPersonCriminalHistory?.message}
                  </small>
                )}
              </div>
            </div>
          </div> */}

          {/* level 1 user details */}
          {/* <div className="pt-5">
            <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Level 1 User
            </h3>
            <Checkbox
              isSelected={isLevel1PersonSameAsAuthorised}
              onValueChange={(value) =>
                setIsLevel1PersonSameAsAuthorised(value)
              }
              className="pt-5"
            >
              If Same As Authorised Person
            </Checkbox>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isLevel1PersonSameAsAuthorised}
                  {...register("level1PersonFirstName")}
                />
                {errors.level1PersonFirstName && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonFirstName?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isLevel1PersonSameAsAuthorised}
                  {...register("level1PersonLastName")}
                />
                {errors.level1PersonLastName && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonLastName?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  placeholder="Enter designation"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isLevel1PersonSameAsAuthorised}
                  {...register("level1PersonDesignation")}
                />
                {errors.level1PersonDesignation && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonDesignation?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Phone No
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isLevel1PersonSameAsAuthorised}
                  {...register("level1PersonPhoneNo")}
                />
                {errors.level1PersonPhoneNo && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonPhoneNo?.message}
                  </small>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-hrms-blue mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-[9px] bg-gray-100 rounded-md text-hrms-blue focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed "
                  disabled={isLevel1PersonSameAsAuthorised}
                  {...register("level1PersonEmail")}
                />
                {errors.level1PersonEmail && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonEmail?.message}
                  </small>
                )}
              </div>

              <div>
                <Input
                  radius="sm"
                  label="Proof of ID"
                  labelPlacement="outside"
                  type="file"
                  className="text-hrms-blue font-semibold"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setValue("level1PersonProofOfId", file, {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
                {errors.level1PersonProofOfId && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonProofOfId?.message}
                  </small>
                )}
              </div>

              <div>
                <Controller
                  name="level1PersonCriminalHistory"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      aria-label="Do you have a history of Criminal conviction
/Bankruptcy/Disqualification?"
                      label="Do you have a history of Criminal conviction
/Bankruptcy/Disqualification?"
                      orientation="horizontal"
                      value={field.value}
                      onValueChange={field.onChange}
                      className="text-base font-medium "
                    >
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="No">No</Radio>
                    </RadioGroup>
                  )}
                />
                {errors.level1PersonCriminalHistory && (
                  <small className="text-red-700 font-medium">
                    {errors.level1PersonCriminalHistory?.message}
                  </small>
                )}
              </div>
            </div>
          </div>  */}

          {/* Organisation Address */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Organisation Address
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
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
                error={errors.postCode?.message}
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
                name="cityCounty"
                control={control}
                label="City / County"
                placeholder="Select city / county"
                error={errors.cityCounty?.message}
              />

              <RHFSelect
                name="country"
                control={control}
                label="Country"
                placeholder="Select country"
                options={countries}
                error={errors.country?.message}
              />
            </div>
          </div>

          {/* Treading Hours */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Trading Hours
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
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
                  aria-label="Tuesday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
                <Input
                  radius="sm"
                  placeholder="Wednesday"
                  aria-label="Wednesday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
                <Input
                  radius="sm"
                  placeholder="Thursday"
                  aria-label="Thursday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
                <Input
                  radius="sm"
                  placeholder="Friday"
                  aria-label="Friday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
                <Input
                  radius="sm"
                  placeholder="Saturday"
                  aria-label="Saturday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
                <Input
                  radius="sm"
                  placeholder="Sunday"
                  aria-label="Sunday"
                  type="text"
                  isReadOnly
                  className="text-hrms-blue font-semibold"
                />
              </div>
              <div className="space-y-3">
                <RHFSelect
                  name="mondayStatus"
                  control={control}
                  label="Status"
                  placeholder="Select status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.mondayStatus?.message}
                />

                <RHFSelect
                  name="tuesdayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Tuesday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.tuesdayStatus?.message}
                />

                <RHFSelect
                  name="wednesdayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Wednesday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.wednesdayStatus?.message}
                />

                <RHFSelect
                  name="thursdayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Thursday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.thursdayStatus?.message}
                />

                <RHFSelect
                  name="fridayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Friday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.fridayStatus?.message}
                />

                <RHFSelect
                  name="saturdayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Saturday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.saturdayStatus?.message}
                />

                <RHFSelect
                  name="sundayStatus"
                  control={control}
                  placeholder="Select status"
                  ariaLabel="Sunday Status"
                  options={[
                    { value: "Close", label: "Close" },
                    { value: "Open", label: "Open" },
                  ]}
                  error={errors.sundayStatus?.message}
                />
              </div>
              <div className="space-y-3">
                <RHFInput
                  name="mondayOpeningTime"
                  control={control}
                  label="Opening Time"
                  type="time"
                  error={errors.mondayOpeningTime?.message}
                />

                <RHFInput
                  name="tuesdayOpeningTime"
                  control={control}
                  ariaLabel="Tuesday Opening Time"
                  type="time"
                  error={errors.tuesdayOpeningTime?.message}
                />

                <RHFInput
                  name="wednesdayOpeningTime"
                  control={control}
                  ariaLabel="Wednesday Opening Time"
                  type="time"
                  error={errors.wednesdayOpeningTime?.message}
                />
                <RHFInput
                  name="thursdayOpeningTime"
                  control={control}
                  ariaLabel="Thursday Opening Time"
                  type="time"
                  error={errors.thursdayOpeningTime?.message}
                />
                <RHFInput
                  name="fridayOpeningTime"
                  control={control}
                  ariaLabel="Friday Opening Time"
                  type="time"
                  error={errors.fridayOpeningTime?.message}
                />
                <RHFInput
                  name="saturdayOpeningTime"
                  control={control}
                  ariaLabel="Saturday Opening Time"
                  type="time"
                  error={errors.saturdayOpeningTime?.message}
                />
                <RHFInput
                  name="sundayOpeningTime"
                  control={control}
                  ariaLabel="Sunday Opening Time"
                  type="time"
                  error={errors.sundayOpeningTime?.message}
                />
              </div>
              <div className="space-y-3">
                <RHFInput
                  name="mondayClosingTime"
                  control={control}
                  label="Closing Time"
                  type="time"
                  error={errors.mondayClosingTime?.message}
                />

                <RHFInput
                  name="tuesdayClosingTime"
                  control={control}
                  ariaLabel="Tuesday Closing Time"
                  type="time"
                  error={errors.tuesdayClosingTime?.message}
                />

                <RHFInput
                  name="wednesdayClosingTime"
                  control={control}
                  ariaLabel="Wednesday Closing Time"
                  type="time"
                  error={errors.wednesdayClosingTime?.message}
                />
                <RHFInput
                  name="thursdayClosingTime"
                  control={control}
                  ariaLabel="Thursday Closing Time"
                  type="time"
                  error={errors.thursdayClosingTime?.message}
                />
                <RHFInput
                  name="fridayClosingTime"
                  control={control}
                  ariaLabel="Friday Closing Time"
                  type="time"
                  error={errors.fridayClosingTime?.message}
                />
                <RHFInput
                  name="saturdayClosingTime"
                  control={control}
                  ariaLabel="Saturday Closing Time"
                  type="time"
                  error={errors.saturdayClosingTime?.message}
                />
                <RHFInput
                  name="sundayClosingTime"
                  control={control}
                  ariaLabel="Sunday Closing Time"
                  type="time"
                  error={errors.sundayClosingTime?.message}
                />
              </div>
            </div>
          </div>

          {/* Upload documents */}
          <div className="pt-5">
            <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
              Upload Documents
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
              <RHFFileInput
                name="payeeAccountReference"
                control={control}
                label="PAYEE And Account Reference Letter From HMRC"
                error={errors.payeeAccountReference?.message}
              />

              <RHFFileInput
                name="latestRti"
                control={control}
                label="Latest RTI from accountant"
                error={errors.latestRti?.message}
              />

              <RHFFileInput
                name="employerLiabilityInsurance"
                control={control}
                label="Employer Liability Insurance Certificate"
                error={errors.latestRti?.message}
              />

              <RHFFileInput
                name="proofOfBusinessPremises"
                control={control}
                label="Proof of Business Premises (Tenancy Agreement)"
                error={errors.proofOfBusinessPremises?.message}
              />

              <RHFFileInput
                name="copyOfLease"
                control={control}
                label="Copy of Lease or Freehold Property"
                error={errors.copyOfLease?.message}
              />

              <RHFFileInput
                name="businessBankStatement"
                control={control}
                label="Business Bank Statement for last 1/2/3 months"
                error={errors.businessBankStatement?.message}
              />

              <RHFFileInput
                name="signedAnnualAccount"
                control={control}
                label="Signed Annual Account (If the business is more than 18 months old)"
                error={errors.signedAnnualAccount?.message}
              />

              <RHFFileInput
                name="vatCertificate"
                control={control}
                label="VAT Certificate (If Registered)"
                error={errors.vatCertificate?.message}
              />

              <RHFFileInput
                name="healthSafetyRating"
                control={control}
                label="Copy of Health and Safety Star Rating (Applicable for food business only)"
                error={errors.healthSafetyRating?.message}
              />

              <RHFFileInput
                name="regulatoryBodyCertificate"
                control={control}
                label="Regulatory Body Certificate (If Applicable for your business)"
                error={errors.regulatoryBodyCertificate?.message}
              />

              <RHFFileInput
                name="businessLicense"
                control={control}
                label="Registered business license or certificate"
                error={errors.businessLicense?.message}
              />

              <RHFFileInput
                name="franchiseAgreement"
                control={control}
                label="Franchise Agreement"
                error={errors.franchiseAgreement?.message}
              />

              <RHFFileInput
                name="governingBodyRegistration"
                control={control}
                label="Governing Body Registration"
                error={errors.governingBodyRegistration?.message}
              />

              <RHFFileInput
                name="auditedAnnualAccount"
                control={control}
                label="Audited Annual Account"
                error={errors.auditedAnnualAccount?.message}
              />

              <RHFFileInput
                name="othersDocuments"
                control={control}
                label="Others Documents"
                error={errors.othersDocuments?.message}
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
          </div>
        </form>
      )}
    </main>
  );
};

export default EditOrganisation;
