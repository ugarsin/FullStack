import { useRef } from "react";
import axios from "axios";
import type { EmployeeDto } from "../models/employee";

const genderOptions = ["Male", "Female", "Other"];

export default function UncontrolledEmployeeForm() {
  
  // Create refs for each field
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const dateHiredRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const employee: EmployeeDto = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      position: positionRef.current?.value ?? "",
      dateHired: dateHiredRef.current?.value ?? new Date().toISOString(),
      gender: genderRef.current?.value ?? "Male"
    };

    console.log("Uncontrolled form submitted:", employee);

    // Example axios POST
    try {
      await axios.post("http://localhost:5000/api/employees", employee);
      alert("Employee saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to save employee.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      
      {/* --- First Name --- */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={firstNameRef}
      />

      {/* --- Last Name --- */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={lastNameRef}
      />

      {/* --- Email --- */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        ref={emailRef}
      />

      {/* --- Position --- */}
      <input
        type="text"
        name="position"
        placeholder="Position"
        ref={positionRef}
      />

      {/* --- Date Hired --- */}
      <input
        type="date"
        name="dateHired"
        ref={dateHiredRef}
        defaultValue={new Date().toISOString().substring(0, 10)}
      />

      {/* --- Gender Select --- */}
      <select name="gender" ref={genderRef}>
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
