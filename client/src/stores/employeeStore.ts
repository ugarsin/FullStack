import { makeAutoObservable, runInAction } from "mobx";
import { EmployeeApi } from "../api/agent";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position?: string;
  dateHired: string;
}

class EmployeeStore {
  employees: Employee[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadEmployees = async () => {
    this.loading = true;

    try {
      const list = await EmployeeApi.list();

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
      const created = await EmployeeApi.create(employee);

      runInAction(() => {
        this.employees.push(created);
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const employeeStore = new EmployeeStore();
