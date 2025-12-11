export type EmployeeDto = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  position?: string;
  dateHired: string; // or Date, depending on API
  gender: string;
}
