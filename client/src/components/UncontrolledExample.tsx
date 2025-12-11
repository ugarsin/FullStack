import { useRef } from "react";
import { TextField, Button, Stack } from "@mui/material";

export function UncontrolledExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const showValue = () => {
    alert(inputRef.current?.value);
  };

  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      <TextField label="Uncontrolled Input" inputRef={inputRef} />
      <Button variant="outlined" onClick={showValue}>Show Value</Button>
    </Stack>
  );
}
