import { Button, Input } from "@heroui/react";

const CreateEmployee = () => {
  return (
    <div className="h-[calc(100%-64px)] flex items-center justify-center">
      <div className="w-80 bg-gray-50 py-8 px-5 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-semibold ">Create Employee</h1>
        <form className="space-y-10 mt-14">
          <Input
            radius="sm"
            label="Name"
            labelPlacement="outside"
            placeholder="Enter employee name"
            type="text"
            isRequired
            className="text-hrms-blue font-semibold"
          />
          <Input
            radius="sm"
            label="Email"
            labelPlacement="outside"
            placeholder="Enter employee email"
            type="email"
            isRequired
            className="text-hrms-blue font-semibold"
          />
          <Input
            radius="sm"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter password"
            type="password"
            isRequired
            className="text-hrms-blue font-semibold"
          />
          <Button className="w-full font-semibold">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
