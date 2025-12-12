import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
  position: z.string().optional(),
  dateHired: z.string().min(1, "Date hired is required"),
  gender: z.enum(["Male", "Female", "Other"])
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
