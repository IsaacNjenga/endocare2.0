import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    diagnosis: { type: String },
    emergencyName: { type: String },
    emergencyPhoneNumber: { type: String },
    emergencyEmail: { type: String },
    assignedPhysician: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "patients", timestamps: true }
);

const PatientModel = mongoose.model("patients", patientSchema);
export default PatientModel;
