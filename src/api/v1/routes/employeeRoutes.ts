import { Router } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController";

const router: Router = Router();

// CRUD Endpoints for Employees
router.get("/employees", getAllEmployees);        // GET all employees
router.get("/employees/:id", getEmployeeById);    // GET employee by id
router.post("/employees", createEmployee);        // CREATE new employee
router.put("/employees/:id", updateEmployee);     // UPDATE employee
router.delete("/employees/:id", deleteEmployee);  // DELETE employee

export default router;
