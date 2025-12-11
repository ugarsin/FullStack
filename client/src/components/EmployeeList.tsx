import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { employeeStore } from "../stores/employeeStore";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";

const EmployeeList = observer(function EmployeeList() {

  useEffect(() => {
    employeeStore.loadEmployees();
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Position</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employeeStore.employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.firstName} {emp.lastName}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
});

export default EmployeeList;
    