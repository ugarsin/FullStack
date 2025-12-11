import { useState } from "react";
import { employeeStore } from "../stores/employeeStore";
import { TextField, Button, Paper, Stack } from "@mui/material";

function EmployeeForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      alert("Required fields missing");
      return;
    }

    employeeStore.createEmployee({
      id: "",
      dateHired: new Date().toISOString(),
      ...form,
    });

    setForm({ firstName: "", lastName: "", email: "", position: "" });
  }

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            label="Position"
            name="position"
            value={form.position}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained">
            Save Employee
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default EmployeeForm;