import axios from "axios";
import type { Employee } from "../models/employee";
import type { EmployeeFormValues } from "../schemas/employeeSchema";

axios.defaults.baseURL = "https://localhost:7056/api";

export const agent = {
  list: () => axios.get("/employees").then(res => res.data),
  create: async (employee: Employee) => axios.post("/employees", employee).then(res => res.data),
  createRQ: async (data: EmployeeFormValues) => axios.post("/employees", data).then(res => res.data),
};
