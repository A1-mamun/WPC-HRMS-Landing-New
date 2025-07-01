import { Input } from "@heroui/react";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface RHFInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  error?: string;
}

const RHFInput = <T extends FieldValues>({
  name,
  control,
  type = "text",
  label,
  placeholder,
  disabled = false,
  error,
  ...rest
}: RHFInputProps<T>) => (
  <div>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          label={label}
          placeholder={placeholder}
          labelPlacement="outside"
          isDisabled={disabled}
          radius="sm"
          className="text-hrms-blue font-semibold"
          {...rest}
        />
      )}
    />
    {error && <small className="text-red-700 font-medium">{error}</small>}
  </div>
);

export default RHFInput;
