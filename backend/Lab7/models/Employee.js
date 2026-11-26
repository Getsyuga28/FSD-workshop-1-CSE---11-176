import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    designation: {
      type: String,
      required: true,
      trim: true
    },
    dateOfJoining: {
      type: Date,
      required: true
    },
    mobile: {
      type: String,
      required: true,
      match: /^\d{10}$/
    },
    salary: {
      type: Number,
      required: true,
      min: 0
    },
    projectCoordinator: {
      type: String,
      trim: true,
      default: ""
    }
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;