import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options: string[];
  control: Control<T>;
}

export default function SelectInput<T extends FieldValues>({ name, label, options, control }: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth margin="normal" error={!!fieldState.error}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <p style={{ color: "red", marginTop: "4px" }}>
              {fieldState.error.message}
            </p>
          )}
        </FormControl>
      )}
    />
  );
}
