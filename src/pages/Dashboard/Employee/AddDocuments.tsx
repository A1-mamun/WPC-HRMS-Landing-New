import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import {
  countries,
  dbsTypes,
  employmentTypes,
  maritalStatus,
  nationalities,
} from "../../../data";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { format } from "date-fns";

const AddDocuments = () => {
  const { register, control, handleSubmit } = useForm();

  const handleSubmitForm = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Your Documents
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Employee personal details */}
        <div>
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
              isRequired
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
                  radius="sm"
                  label="Gender"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select gender"
                  isRequired
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
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("niNumber")}
            />

            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Birth"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  label="Marital Status"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select status"
                  isRequired
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
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  isRequired
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
        <div>
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
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("department")}
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
            <Controller
              name="dateOfJoining"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Joining"
                  labelPlacement="outside"
                  isRequired
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
              name="employeeType"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Employee Type"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select employee type"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Confirmation"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Contract Start Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Contract End Date (if applicable)"
                  labelPlacement="outside"
                  isRequired
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
              isRequired
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
            <Input
              radius="sm"
              label="Reporting Authority"
              labelPlacement="outside"
              placeholder="Enter reporting authority"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("reportingAuthority")}
            />
            <Input
              radius="sm"
              label="Leave Sanction Authority"
              labelPlacement="outside"
              placeholder="Enter leave sanction authority"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("leaveSanctionAuthority")}
            />
          </div>
        </div>

        {/* <div>
          {" "}
          <Input
            radius="sm"
            label="Job Title"
            labelPlacement="outside"
            placeholder="Enter job title"
            type="text"
            isRequired
            className="text-hrms-blue font-semibold"
          />
          <DatePicker
            radius="sm"
            className="text-hrms-blue font-semibold"
            label="Start Date"
            labelPlacement="outside"
            isRequired
          />
          <div className="flex flex-col gap-3">
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="End Date"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="Years of Experience"
              labelPlacement="outside"
              placeholder="Enter years of experience"
              type="number"
              isRequired
              className="text-hrms-blue font-semibold"
            />
          </div>
          <Textarea
            radius="sm"
            label="Job Description"
            labelPlacement="outside"
            placeholder="Enter job description"
            maxRows={5}
            minRows={5}
            isRequired
            className="text-hrms-blue font-semibold col-span-3 row-span-2"
          />
        </div> */}

        {/*  Next of Kin Information */}
        {/* <div>
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Next of Kin Information
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="Next of Kin Contact Name"
              labelPlacement="outside"
              placeholder="Enter name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Relationship"
              labelPlacement="outside"
              placeholder="Enter relationship"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Email"
              labelPlacement="outside"
              placeholder="Enter contact email"
              type="tel"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="tel"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Address"
              labelPlacement="outside"
              placeholder="Enter address"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div> */}

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
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("passportNumber")}
            />
            <Controller
              name="passportNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality (Passport)"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  isRequired
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
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("placeOfBirth")}
            />
            <Input
              radius="sm"
              label="Passport Issued By"
              labelPlacement="outside"
              placeholder="Enter issuing authority"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("passportIssuedBy")}
            />

            <Controller
              name="passportIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Issue Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Eligible Review Date"
                  labelPlacement="outside"
                  isRequired
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
              required
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
              name="isCurrentPassport"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current passport?"
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

        {/* Address & Identification Details */}
        {/* <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Address & Identification Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="COS Number"
              labelPlacement="outside"
              placeholder="Enter cos number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="COS Number Start Date"
              labelPlacement="outside"
              placeholder="Enter cos number start date"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="COS Number End Date"
              labelPlacement="outside"
              placeholder="Enter cos number end date"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Present Address"
              labelPlacement="outside"
              placeholder="Enter address"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Proof Of Present Address"
              labelPlacement="outside"
              type="file"
              required
              className="text-hrms-blue font-semibold"
            />
            
           
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Passport Issue Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Passport Expiry Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Passport Eligible Review Date"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="Passport Document"
              labelPlacement="outside"
              type="file"
              required
              className="text-hrms-blue font-semibold"
            />
            <Select
              radius="sm"
              label="Gender"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              placeholder="Select Yes or No"
              isRequired
            >
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </Select>
            <Input
              radius="sm"
              label="Passport Remarks"
              labelPlacement="outside"
              placeholder="Enter passport remarks"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div> */}

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
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  isRequired
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
            <Controller
              name="visaIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Issue Date"
                  labelPlacement="outside"
                  isRequired
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
              name="visaExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
              name="visaEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Eligible Review Date"
                  labelPlacement="outside"
                  isRequired
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
              name="isCurrentVisa"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current Visa?"
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
              name="eussIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  isRequired
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
              name="eussExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
              name="eussEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Eligible Review Date"
                  labelPlacement="outside"
                  isRequired
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
              name="isCurrentEussStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
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
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("dbsReferenceNumber")}
            />
            <Input
              radius="sm"
              label="Nationality"
              labelPlacement="outside"
              placeholder="Enter Nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("dbsNationality")}
            />
            <Controller
              name="dbsIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
              name="isCurrentDbsStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
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
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Expiry Date"
                  labelPlacement="outside"
                  isRequired
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
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Eligible Review Date"
                  labelPlacement="outside"
                  isRequired
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
              {...register("nationalIdDocumentFrontSide")}
            />
            <Input
              radius="sm"
              label="National Id Document Back Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdDocumentBackSide")}
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
              name="isCurrentNationalIdStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
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

        {/* Bank Details */}
        {/* <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Bank Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Bank Name"
              labelPlacement="outside"
              placeholder="Enter bank name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Branch Name"
              labelPlacement="outside"
              placeholder="Enter branch name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />

            <Input
              radius="sm"
              label="Sort Code"
              labelPlacement="outside"
              placeholder="Enter sort code"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Account Number"
              labelPlacement="outside"
              placeholder="Enter account number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div> */}

        {/* submit button */}
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

export default AddDocuments;
