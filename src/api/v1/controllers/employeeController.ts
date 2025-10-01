import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export const getAllEmployees = (req: Request, res: Response): void => {
  const employees = employeeService.getAllEmployees();
  res.status(200).json(employees);
};

export const getEmployeeById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const employee = employeeService.getEmployeeById(id);

  if (!employee) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }
  res.status(200).json(employee);
};

export const createEmployee = (req: Request, res: Response): void => {
  const newEmployee = employeeService.createEmployee(req.body);
  res.status(201).json(newEmployee);
};

export const updateEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const updated = employeeService.updateEmployee(id, req.body);

  if (!updated) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }
  res.status(200).json(updated);
};

export const deleteEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const success = employeeService.deleteEmployee(id);

  if (!success) {
    res.status(404).json({ message: "Employee not found" });
    return;
  }
  res.status(200).json({ message: "Employee deleted" });
};
