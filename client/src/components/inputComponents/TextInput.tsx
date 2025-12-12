import { TextField } from "@mui/material";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
}

export default function TextInput<T extends FieldValues>({
  name,
  label,
  control
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          margin="normal"
          label={label}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
