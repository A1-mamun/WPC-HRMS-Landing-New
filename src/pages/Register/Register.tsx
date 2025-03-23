/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "@heroui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../../redux/features/auth/registerApi";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Al Mamun",
      email: "almamun@gmail.com",
      password: "almamun",
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [registration] = useRegisterMutation();

  const handleRegistration = async (data: FieldValues) => {
    const toastId = toast.loading("Registering user...");
    try {
      await registration(data).unwrap();

      toast.success("Registration Successfull", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (err: any) {
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96 px-5 py-8 bg-bg-primary/50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-10">Register</h1>
        <Form
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
            Register
          </Button>
        </Form>
        <p className="mt-2">
          Have an acount?{" "}
          <Link to="/login" className="font-medium underline ">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
