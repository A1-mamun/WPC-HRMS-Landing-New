// components/form/RHFSingleSelectRadio.tsx
import { Radio, RadioGroup } from "@heroui/react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface RHFSingleSelectRadioProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: { label: string; value: string }[];

  error?: string;
}

const RHFRadio = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
}: RHFSingleSelectRadioProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            aria-label={label}
            label={label}
            orientation="horizontal"
            value={field.value}
            onValueChange={field.onChange}
            className="text-base font-medium"
          >
            {options.map((option) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        )}
      />
      {error && <small className="text-red-700 font-medium">{error}</small>}
    </div>
  );
};

export default RHFRadio;
