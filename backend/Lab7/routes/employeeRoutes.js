import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

function validateEmployee(data, isUpdate = false) {
  const { employeeId, name, designation, dateOfJoining, mobile, salary } = data;
  const errors = {};

  if (!isUpdate && (!employeeId || !String(employeeId).trim())) {
    errors.employeeId = "Employee ID is required";
  }

  if (!name || !String(name).trim()) {
    errors.name = "Name is required";
  }

  if (!designation || !String(designation).trim()) {
    errors.designation = "Designation is required";
  }

  if (!dateOfJoining || isNaN(Date.parse(dateOfJoining))) {
    errors.dateOfJoining = "Valid date of joining is required (YYYY-MM-DD)";
  }

  if (!/^\d{10}$/.test(String(mobile ?? ""))) {
    errors.mobile = "Mobile number must contain exactly 10 digits";
  }

  if (salary === undefined || salary === "" || isNaN(Number(salary)) || Number(salary) < 0) {
    errors.salary = "Salary must be a valid positive number";
  }

  return errors;
}

// GET /api/employees - fetch all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Data received", employees });
  } catch (err) {
    console.error("error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/employees/:employeeId - fetch one employee
router.get("/:employeeId", async (req, res) => {
  try {
    const employee = await Employee.findOne({ employeeId: req.params.employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Data received", employee });
  } catch (err) {
    console.error("error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/employees - add an employee
router.post("/", async (req, res) => {
  try {
    const errors = validateEmployee(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }

    const employeeId = String(req.body.employeeId).trim();
    const existing = await Employee.findOne({ employeeId });
    if (existing) {
      return res.status(409).json({ message: "Employee ID must be unique" });
    }

    const newEmployee = await Employee.create({
      employeeId,
      name: req.body.name.trim(),
      designation: req.body.designation.trim(),
      dateOfJoining: new Date(req.body.dateOfJoining),
      mobile: String(req.body.mobile),
      salary: Number(req.body.salary),
      projectCoordinator: req.body.projectCoordinator ? String(req.body.projectCoordinator).trim() : ""
    });

    res.status(201).json({
      message: "Employee added successfully",
      employee: newEmployee
    });
  } catch (err) {
    console.error("error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT /api/employees/:employeeId - update an employee
router.put("/:employeeId", async (req, res) => {
  try {
    const errors = validateEmployee(req.body, true);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }

    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeId: req.params.employeeId },
      {
        name: req.body.name.trim(),
        designation: req.body.designation.trim(),
        dateOfJoining: new Date(req.body.dateOfJoining),
        mobile: String(req.body.mobile),
        salary: Number(req.body.salary),
        projectCoordinator: req.body.projectCoordinator ? String(req.body.projectCoordinator).trim() : ""
      },
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee
    });
  } catch (err) {
    console.error("error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE /api/employees/:employeeId - delete an employee
router.delete("/:employeeId", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findOneAndDelete({ employeeId: req.params.employeeId });
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee
    });
  } catch (err) {
    console.error("error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;