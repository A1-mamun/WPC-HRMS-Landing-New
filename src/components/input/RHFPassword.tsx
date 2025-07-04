import { Input } from "@heroui/react";
import { useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface RHFInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  error?: string;
}

const RHFPassword = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  ...rest
}: RHFInputProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            value={field.value ?? ""}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            }
            radius="sm"
            label={label}
            labelPlacement="outside"
            placeholder={placeholder}
            type={isVisible ? "text" : "password"}
            {...rest}
          />
        )}
      />
      {error && <small className="text-red-700 font-medium">{error}</small>}
    </div>
  );
};

export default RHFPassword;
