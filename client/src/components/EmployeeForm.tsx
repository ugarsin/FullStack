import { useState } from "react";
import { type EmployeeDto } from "../models/employee";

const genderOptions = ["Male", "Female", "Other"];

interface Props {
  initialEmployee?: EmployeeDto;
  onSubmit: (employee: EmployeeDto) => void;
}

export default function EmployeeForm({ initialEmployee, onSubmit }: Props) {
  const [employee, setEmployee] = useState<EmployeeDto>(
    initialEmployee ?? {
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      dateHired: new Date().toISOString(),
      gender: "Male" // 👈 default value
    }
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(employee);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* --- First Name --- */}
      <input
        type="text"
        name="firstName"
        value={employee.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      {/* --- Last Name --- */}
      <input
        type="text"
        name="lastName"
        value={employee.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      {/* --- Email --- */}
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
      />

      {/* --- Position --- */}
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
      />

      {/* --- Date Hired --- */}
      <input
        type="date"
        name="dateHired"
        value={employee.dateHired.substring(0, 10)}
        onChange={handleChange}
      />

      {/* --- Gender Select (NEW) --- */}
      <select
        name="gender"
        value={employee.gender}
        onChange={handleChange}
      >
        {genderOptions.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <button type="submit">Save</button>
    </form>
  );
}
