import { Button, Checkbox, Input, Select, SelectItem } from "@heroui/react";
import {
  countries,
  organizationTypes,
  sectorsName,
  tradingPeriods,
} from "../../../data";

const AddOrgDocuments = () => {
  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Organaisation Documents
      </h1>
      <form>
        <div className="grid grid-cols-4 gap-5 pt-5">
          <Input
            radius="sm"
            label="Organisation Name"
            labelPlacement="outside"
            placeholder="Enter organisation name"
            type="text"
            isRequired
            className="text-hrms-blue font-semibold"
          />
          <Select
            radius="sm"
            label="Type of Organisation"
            className="text-hrms-blue font-semibold"
            labelPlacement="outside"
            placeholder="Select organisation type"
          >
            {organizationTypes.map((type, index) => (
              <SelectItem key={index} value={type.value}>
                {type.value}
              </SelectItem>
            ))}
          </Select>
          <Input
            radius="sm"
            label="Registration Number"
            labelPlacement="outside"
            placeholder="Enter organisation registration number"
            type="text"
            required
            className="text-hrms-blue font-semibold"
          />

          <Input
            radius="sm"
            label="Contact No"
            labelPlacement="outside"
            placeholder="Enter organisation contact number"
            type="text"
            required
            className="text-hrms-blue font-semibold"
          />
          <Input
            radius="sm"
            label="Organisation Email"
            labelPlacement="outside"
            placeholder="Enter organisation email"
            type="email"
            required
            className="text-hrms-blue font-semibold"
          />
          <Input
            radius="sm"
            label="Website URL"
            labelPlacement="outside"
            placeholder="Enter organisation website URL"
            type="text"
            className="text-hrms-blue font-semibold"
          />

          <Input
            radius="sm"
            label="Landline No"
            labelPlacement="outside"
            placeholder="Enter organisation landline number"
            type="number"
            required
            className="text-hrms-blue font-semibold"
          />
          <Input
            radius="sm"
            label="Trading Name"
            labelPlacement="outside"
            placeholder="Enter organisation trading name"
            type="text"
            required
            className="text-hrms-blue font-semibold"
          />
          <Select
            radius="sm"
            label="Type of Organisation"
            className="text-hrms-blue font-semibold"
            labelPlacement="outside"
            placeholder="Select trading period"
          >
            {tradingPeriods.map((period, index) => (
              <SelectItem key={index} value={period.value}>
                {period.value}
              </SelectItem>
            ))}
          </Select>

          <Select
            radius="sm"
            label="Name of Sector"
            className="text-hrms-blue font-semibold"
            labelPlacement="outside"
            placeholder="Select sector"
          >
            {sectorsName.map((sector, index) => (
              <SelectItem key={index} value={sector.value}>
                {sector.value}
              </SelectItem>
            ))}
          </Select>

          <Input
            radius="sm"
            label="Organisation Logo"
            labelPlacement="outside"
            type="file"
            required
            className="text-hrms-blue font-semibold"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 pt-5">
          <Select
            radius="sm"
            label="Have you changed Organisation Name/Trading Name in the last 5 years?"
            className="text-hrms-blue font-semibold"
            placeholder="Select Yes or No"
            labelPlacement="outside"
          >
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </Select>
          <Select
            radius="sm"
            label="Did your organisation faced penalty (e.g. recruiting illegal employee) in the last 3 years?"
            className="text-hrms-blue font-semibold"
            labelPlacement="outside"
            placeholder="Select Yes or No"
          >
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </Select>
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
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
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

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="number"
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
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />

            <Select
              radius="sm"
              label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              isRequired
              placeholder="Select Yes or No"
            >
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </Select>
          </div>
        </div>

        {/* key contact person details */}
        <div className="pt-5">
          <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Key Contact Person
          </h3>
          <Checkbox className="pt-5">If Same As Authorised Person</Checkbox>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
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

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="number"
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
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />

            <Select
              radius="sm"
              label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              isRequired
              placeholder="Select Yes or No"
            >
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </Select>
          </div>
        </div>

        {/* level 1 user details */}
        <div className="pt-5">
          <h3 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Level 1 User
          </h3>
          <Checkbox className="pt-5">If Same As Authorised Person</Checkbox>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
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

            <Input
              radius="sm"
              label="Phone No"
              labelPlacement="outside"
              placeholder="Enter phone number"
              type="number"
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
              label="Proof of ID"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />

            <Select
              radius="sm"
              label="Do you have a histroy of criminal conviction/Bankrupty/Disqualification?"
              className="text-hrms-blue font-semibold"
              labelPlacement="outside"
              isRequired
              placeholder="Select Yes or No"
            >
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </Select>
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
            />
            <Input
              radius="sm"
              label="Address Line 1"
              labelPlacement="outside"
              placeholder="Enter address line 1"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Address Line 2"
              labelPlacement="outside"
              placeholder="Enter address line 2"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Address Line 3"
              labelPlacement="outside"
              placeholder="Enter address line 3"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="City / County"
              labelPlacement="outside"
              placeholder="Enter city / county"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Select
              radius="sm"
              label="Country"
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
          </div>
        </div>

        {/* Treading Hours */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Trading Hours
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div className="space-y-2">
              <Input
                radius="sm"
                placeholder="Monday"
                label="Day"
                labelPlacement="outside"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Tuesday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Wednesday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Thursday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Friday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Saturday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Sunday"
                type="text"
                isDisabled
                className="text-hrms-blue font-semibold"
              />
            </div>
            <div className="space-y-2">
              <Select
                radius="sm"
                label="Status"
                className="text-hrms-blue font-semibold"
                labelPlacement="outside"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
              <Select
                radius="sm"
                className="text-hrms-blue font-semibold"
                placeholder="Select status"
              >
                <SelectItem value="Yes">Closed</SelectItem>
                <SelectItem value="No">Open</SelectItem>
              </Select>
            </div>
            <div className="space-y-2">
              <Input
                radius="sm"
                label="Opening Time"
                labelPlacement="outside"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter opening time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
            </div>
            <div className="space-y-2">
              <Input
                radius="sm"
                label="Closing Time"
                labelPlacement="outside"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
              />
              <Input
                radius="sm"
                placeholder="Enter closing time"
                type="time"
                className="text-hrms-blue font-semibold"
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
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Latest RTI from accountant"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Employer Liability Insurance Certificate"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Proof of Business Permises (Tenancy Agreement)"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Copy of Lease or Freehold Property"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Business Bank Statement for last 3 months"
              labelPlacement="outside"
              type="file"
              isRequired
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Signed Annual Account ( If the business is more than 18 months old)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="VAT Certificate (If Registered)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Copy of Health and Safty star Rating (Applicable for food business only)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Regulatory Body Certificate (If Applicable for your business)"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>
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
