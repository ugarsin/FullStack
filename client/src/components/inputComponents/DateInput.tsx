import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { TextField } from "@mui/material";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
}

export default function DateInput<T extends FieldValues>({ name, label, control }: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          type="date"
          fullWidth
          margin="normal"
          label={label}
          InputLabelProps={{ shrink: true }}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
