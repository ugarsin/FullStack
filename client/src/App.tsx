import { Container, Typography } from "@mui/material";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { UncontrolledExample } from "./components/UncontrolledExample";
import type { EmployeeDto } from "./models/employee";
import UncontrolledEmployeeForm from "./components/UncontrolledEmployeeForm";
import EmployeeFormRQ from "./components/EmployeeFormRQ";

export default function App() {

  function handleEmployeeSubmit(employee: EmployeeDto) {
    console.log("Employee submitted from form:", employee);
    // In the future (React Query version):
    // mutation.mutate(employee);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h5" gutterBottom sx={{ background: "blue", color: "white"}}>
        Employee List
      </Typography>
      <EmployeeList />
      <Typography variant="h5" gutterBottom sx={{ background: "blue", color: "white"}}>
        Employee Controlled form
      </Typography>
      <EmployeeForm onSubmit={handleEmployeeSubmit} />
      <Typography variant="h5" gutterBottom sx={{ background: "blue", color: "white"}}>
        Uncontrolled form Example
      </Typography>
      <UncontrolledExample />
      <Typography variant="h5" gutterBottom sx={{ background: "blue", color: "white"}}>
        Employee Uncontrolled form
      </Typography>
      <UncontrolledEmployeeForm />
      <Typography variant="h5" gutterBottom sx={{ background: "blue", color: "white"}}>
        Employee form React Query + Zod validation
      </Typography>
      <EmployeeFormRQ />
    </Container>
  );
}
