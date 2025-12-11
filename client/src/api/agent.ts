import axios from "axios";
import type { Employee } from "../stores/employeeStore";

axios.defaults.baseURL = "https://localhost:7056/api";

export const EmployeeApi = {
  list: () => axios.get("/employees").then(res => res.data),
  create: (employee: Employee) => axios.post("/employees", employee).then(res => res.data),
};
