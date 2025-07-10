import { DatePicker } from "@heroui/react";
import { format } from "date-fns";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

interface RHFInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  error?: string;
}

const RHFInput = <T extends FieldValues>({
  name,
  control,
  label,
  error,
}: RHFInputProps<T>) => (
  <div>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          radius="sm"
          className="text-hrms-blue font-semibold"
          label={label}
          labelPlacement="outside"
          onChange={(date) =>
            field.onChange(
              date
                ? format(
                    new Date(date.year, date.month - 1, date.day),
                    "dd-MM-yyyy"
                  )
                : ""
            )
          }
          // formatOutput="DD-MM-YYYY"
          // onChange={(date) => field.onChange(date)}
        />
      )}
    />
    {error && <small className="text-red-700 font-medium">{error}</small>}
  </div>
);

export default RHFInput;
