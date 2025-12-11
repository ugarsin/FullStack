import { Container, Typography } from "@mui/material";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { UncontrolledExample } from "./components/UncontrolledExample";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Employee Manager
      </Typography>

      <EmployeeList />
      <EmployeeForm />
      <UncontrolledExample />
    </Container>
  );
}
