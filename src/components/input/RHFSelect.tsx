// components/RHFSelect.tsx

import { Select, SelectItem } from "@heroui/react";
import { Controller, Control, FieldPath, FieldValues } from "react-hook-form";

interface Option {
  _id: string;
  name: string;
}

interface RHFSelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  options: Option[];
  error?: string;
  disabled?: boolean;
}

const RHFSelect = <T extends FieldValues>({
  name,
  control,
  label,
  ariaLabel,
  placeholder,
  options,
  disabled = false,
  error,
}: RHFSelectProps<T>) => (
  <div>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          value={field.value ?? ""}
          label={label}
          aria-label={label ? undefined : ariaLabel}
          placeholder={placeholder}
          selectedKeys={new Set([field.value ?? ""])}
          onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
          labelPlacement="outside"
          isDisabled={disabled}
          radius="sm"
          className="text-hrms-blue font-semibold"
        >
          {options.map((option) => (
            <SelectItem key={option._id} value={option.name}>
              {option.name}
            </SelectItem>
          ))}
        </Select>
      )}
    />
    {error && <small className="text-red-700 font-medium">{error}</small>}
  </div>
);

export default RHFSelect;
