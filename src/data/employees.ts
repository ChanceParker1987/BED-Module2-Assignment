export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}

// Sample employees (subset for now, you can add all later)
export const employees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Branch Manager",
    department: "Management",
    email: "alice.johnson@pixell-river.com",
    phone: "604-555-0148",
    branchId: 1,
  },
  {
    id: 2,
    name: "Amandeep Singh",
    position: "Customer Service Representative",
    department: "Customer Service",
    email: "amandeep.singh@pixell-river.com",
    phone: "780-555-0172",
    branchId: 2,
  },
];
