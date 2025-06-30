// components/RHFSelect.tsx

import { Select, SelectItem } from "@heroui/react";
import { Controller, Control, FieldPath, FieldValues } from "react-hook-form";

interface Option {
  value: string;
  label?: string;
}

interface RHFSelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  options: Option[];
  error?: string;
  disabled?: boolean;
}

const RHFSelect = <T extends FieldValues>({
  name,
  control,
  label,
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
          label={label}
          placeholder={placeholder}
          selectedKeys={field.value ? new Set([field.value]) : new Set()}
          onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
          labelPlacement="outside"
          isDisabled={disabled}
          radius="sm"
          className="text-hrms-blue font-semibold"
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label || option.value}
            </SelectItem>
          ))}
        </Select>
      )}
    />
    {error && <small className="text-red-700 font-medium">{error}</small>}
  </div>
);

export default RHFSelect;
