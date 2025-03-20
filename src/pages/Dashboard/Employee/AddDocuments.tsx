import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { countries } from "../../../data";

const AddDocuments = () => {
  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Your Documents
      </h1>
      <form>
        {/* Employee details */}
        <div>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Employee Code"
              labelPlacement="outside"
              placeholder="Enter employee code"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Employee Name"
              labelPlacement="outside"
              placeholder="Enter employee name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Select
              radius="sm"
              label="Gender"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              placeholder="Select gender"
              isRequired
            >
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </Select>
            <Input
              radius="sm"
              label="NI Number"
              labelPlacement="outside"
              placeholder="Enter NI Number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Date of Birth"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="Marital Status"
              labelPlacement="outside"
              placeholder="Enter marital status"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Nationality"
              labelPlacement="outside"
              placeholder="Enter nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="tel"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Alternative Number"
              labelPlacement="outside"
              placeholder="Enter alternative number"
              type="tel"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Department"
              labelPlacement="outside"
              placeholder="Enter department"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Date of Joining"
              labelPlacement="outside"
              isRequired
            />
            <Select
              radius="sm"
              label="Employment Type"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              placeholder="Select employment type"
              isRequired
            >
              <SelectItem value="Full Time">Full Time</SelectItem>
              <SelectItem value="Part Time">Part Time</SelectItem>
              <SelectItem value="Contractual">Contractual</SelectItem>
            </Select>
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Date of Confirmation"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Contract Start Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Contract End Date"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="Job Location"
              labelPlacement="outside"
              placeholder="Enter job location"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
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
          </div>
        </div>

        {/*  Next of Kin Information */}
        <div>
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
        </div>

        {/* Address & Identification Details */}
        <div className="pt-5">
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
            <Input
              radius="sm"
              label="Passport Number"
              labelPlacement="outside"
              placeholder="Enter passport number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Nationality (Passport)"
              labelPlacement="outside"
              placeholder="Enter nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Place of Birth"
              labelPlacement="outside"
              placeholder="Enter place of birth"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Passport Issued By"
              labelPlacement="outside"
              placeholder="Enter issuing authority"
              type="text"
              isRequired
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
        </div>

        {/*  Visa Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Visa Information
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="BPP/Visa Number"
              labelPlacement="outside"
              placeholder="Enter visa number"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Nationality"
              labelPlacement="outside"
              placeholder="Enter nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Select
              radius="sm"
              label="Country of Residence"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              placeholder="Select country"
            >
              {countries.map((country, index) => (
                <SelectItem key={index} value={country.value}>
                  {country.value}
                </SelectItem>
              ))}
            </Select>
            <Input
              radius="sm"
              label="Visa Issued By"
              labelPlacement="outside"
              placeholder="Enter visa issuing authority"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Visa Issued Date"
              labelPlacement="outside"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Visa Expiry Date"
              labelPlacement="outside"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="Visa Eligible Review Date"
              labelPlacement="outside"
            />
            <Input
              radius="sm"
              label="Visa Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Visa Remarks"
              labelPlacement="outside"
              placeholder="Enter visa remarks"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>

        {/*EUSS (European Union Settlement Scheme) / Time Limit Details  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            EUSS (European Union Settlement Scheme) / Time Limit Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="EUSS/Time Limit Reference Number"
              labelPlacement="outside"
              placeholder="Enter reference number"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Nationality"
              labelPlacement="outside"
              placeholder="Enter nationality"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="EUSS/Time Limit Issued Date"
              labelPlacement="outside"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="EUSS/Time Limit Expiry Date"
              labelPlacement="outside"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="EUSS/Time Limit Eligible Review Date"
              labelPlacement="outside"
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>

        {/* DBS (Disclosure and Barring Service) Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            DBS (Disclosure and Barring Service) Information
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="DBS Type"
              labelPlacement="outside"
              placeholder="Enter DBS Type"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="DBS Reference Number"
              labelPlacement="outside"
              placeholder="Enter DBS Reference Number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="DBS Nationality"
              labelPlacement="outside"
              placeholder="Enter DBS Nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="DBS Issued Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="DBS Expiry Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="DBS Eligible Review Date"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="DBS Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="DBS Remarks"
              labelPlacement="outside"
              placeholder="Enter DBS Remarks"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>

        {/* National ID Details */}
        <div>
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            National ID Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="National ID Number"
              labelPlacement="outside"
              placeholder="Enter national ID number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="National ID Nationality"
              labelPlacement="outside"
              placeholder="Enter nationality"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Country of Residence"
              labelPlacement="outside"
              placeholder="Enter country of residence"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="National ID Issued Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="National ID Expiry Date"
              labelPlacement="outside"
              isRequired
            />
            <DatePicker
              radius="sm"
              className="text-hrms-blue font-semibold"
              label="National ID Eligible Review Date"
              labelPlacement="outside"
              isRequired
            />
            <Input
              radius="sm"
              label="National ID Document Upload"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="National ID Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="pt-5">
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
        </div>

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
