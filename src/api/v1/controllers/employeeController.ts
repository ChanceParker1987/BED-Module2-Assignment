import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

/**
 * Get all employees
 */
export const getAllEmployees = (req: Request, res: Response): void => {
  const employees = employeeService.getAllEmployees();
  res.status(200).json({ message: "Employees retrieved", data: employees });
};

/**
 * Get employee by ID
 */
export const getEmployeeById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const employee = employeeService.getEmployeeById(id);

  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json({ message: "Employee found", data: employee });
};

/**
 * Create a new employee
 */
export const createEmployee = (req: Request, res: Response): void => {
  const employeeData = req.body;
  const newEmployee = employeeService.createEmployee(employeeData);

  res.status(201).json({ message: "Employee created", data: newEmployee });
};

/**
 * Update an employee
 */
export const updateEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;

  const updatedEmployee = employeeService.updateEmployee(id, updates);

  if (!updatedEmployee) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json({ message: "Employee updated", data: updatedEmployee });
};

/**
 * Delete an employee
 */
export const deleteEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);

  const deleted = employeeService.deleteEmployee(id);

  if (!deleted) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }

  res.status(200).json({ message: "Employee deleted" });
};
