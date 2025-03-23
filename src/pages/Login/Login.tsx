/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button } from "@heroui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "almamun@gmail.com",
      password: "almamun",
    },
  });

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogIn = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();

      const user = verifyToken(res.data.token) as TUser;

      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Login Successfull", { id: toastId, duration: 2000 });
      navigate(location?.state ? location.state : "/");
    } catch (err: any) {
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96 px-5 py-8 bg-bg-primary/50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-10">Login</h1>
        <Form
          onSubmit={handleSubmit(handleLogIn)}
          className="w-full max-w-sm flex flex-col gap-5"
        >
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
              isRequired
              radius="sm"
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password?.message && (
              <p className="text-red-700">{String(errors.password.message)}</p>
            )}
          </div>

          <Button radius="sm" fullWidth color="primary" type="submit">
            LogIn
          </Button>
        </Form>
        <p className="mt-2">
          Don't have an acount?{" "}
          <Link to="/register" className="font-medium underline ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
