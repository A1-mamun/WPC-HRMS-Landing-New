import { Button, Input } from "@heroui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../redux/features/auth/registerApi";
import { toast } from "sonner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const CreateEmployee = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Al Mamun",
      email: "1155almamun@gmail.com",
      password: "almamun",
      role: "employee",
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [registration] = useRegisterMutation();

  const handleRegistration = async (data: FieldValues) => {
    const toastId = toast.loading("Creating employee...");
    try {
      await registration(data).unwrap();

      toast.success("Employee created Successfully", {
        id: toastId,
        duration: 2000,
      });
      // navigate("/login");
    } catch (err: any) {
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="h-[calc(100%-64px)] flex items-center justify-center">
      <div className="w-80 bg-gray-50 py-8 px-5 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-semibold mb-8">
          Create Employee
        </h1>
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="w-full max-w-sm flex flex-col gap-5"
        >
          <div className="w-full">
            <Input
              isRequired
              radius="sm"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: "Please enter your name" })}
            />
            {errors.name?.message && (
              <p className="text-red-700">{String(errors.name.message)}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              isRequired
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: "Please enter a valid Email" })}
            />
            {errors.email?.message && (
              <p className="text-red-700">{String(errors.email.message)}</p>
            )}
          </div>
          <div className="w-full">
            <Input
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              }
              isRequired
              radius="sm"
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password?.message && (
              <p className="text-red-700">{String(errors.password.message)}</p>
            )}
          </div>

          <Button radius="sm" fullWidth color="primary" type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
