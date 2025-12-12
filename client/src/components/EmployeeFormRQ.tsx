import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { employeeSchema, type EmployeeFormValues } from "../schemas/employeeSchema";
import TextInput from "../components/inputComponents/TextInput";
import SelectInput from "../components/inputComponents/SelectInput";
import DateInput from "../components/inputComponents/DateInput";
import { Button } from "@mui/material";

const genderOptions = ["Male", "Female", "Other"];

export default function EmployeeFormRQ() {
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: EmployeeFormValues) =>
      axios.post("http://localhost:5000/api/employees", data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["employees"]});
      alert("Employee created!");
    },
    onError: () => {
      alert("Failed to create employee");
    },
  });

  const { control, handleSubmit } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      dateHired: new Date().toISOString().substring(0, 10),
      gender: "Male",
    },
  });

  function onSubmit(data: EmployeeFormValues) {
    mutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="firstName" label="First Name" control={control} />
      <TextInput name="lastName" label="Last Name" control={control} />
      <TextInput name="email" label="Email" control={control} />
      <TextInput name="position" label="Position" control={control} />
      <DateInput name="dateHired" label="Date Hired" control={control} />
      <SelectInput
        name="gender"
        label="Gender"
        options={genderOptions}
        control={control}
      />
      <Button 
        variant="contained"
        type="submit"
        disabled={mutation.isPending}
      >
        Save
      </Button>
    </form>
  );
}
