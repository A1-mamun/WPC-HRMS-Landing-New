import { Input } from "@heroui/react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface RHFFileInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  disabled?: boolean;
  error?: string;
}

const RHFFileInput = <T extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
  error,
}: RHFFileInputProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type="file"
            label={label}
            labelPlacement="outside"
            isDisabled={disabled}
            radius="sm"
            className="text-hrms-blue font-semibold"
            onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
          />
        )}
      />

      {error && <small className="text-red-700 font-medium">{error}</small>}
    </div>
  );
};

export default RHFFileInput;
