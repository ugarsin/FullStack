import { makeAutoObservable, runInAction } from "mobx";
import { agent } from "../api/agent";
import type { Employee } from "../models/employee";
import type { EmployeeFormValues } from "../schemas/employeeSchema";

class EmployeeStore {
  employees: Employee[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadEmployees = async () => {
    this.loading = true;
    try {
      const list = await agent.list();
      runInAction(() => {
        this.employees = list;
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  createEmployee = async (employee: Employee) => {
    try {
      const created = await agent.create(employee);
      runInAction(() => {
        this.employees.push(created);
      });
    } catch (error) {
      console.error(error);
    }
  };

  createEmployeeRQ = async (data: EmployeeFormValues) => {
    try {
      const created = await agent.createRQ(data);
      runInAction(() => {
        this.employees.push(created);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const employeeStore = new EmployeeStore();
