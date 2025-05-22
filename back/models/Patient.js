import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    // Medical Info
    diagnosis: { type: String },
    chronicConditions: [{ type: String }], // e.g. Diabetes, Hypertension
    allergies: [{ type: String }],
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },

    currentMedications: [
      {
        name: { type: String },
        dosage: { type: String },
        frequency: { type: String },
        isOngoing: { type: Boolean, default: false },
        startDate: { type: Date },
      },
    ],

    treatmentHistory: [
      {
        condition: { type: String },
        diagnosisDate: { type: Date },
        treatmentDescription: { type: String },
        outcome: { type: String },
      },
    ],

    medicalProcedures: [
      {
        procedureName: { type: String },
        date: { type: Date },
        notes: { type: String },
      },
    ],

    familyMedicalHistory: [
      {
        relation: { type: String }, // e.g., "Mother", "Father"
        condition: { type: String },
        notes: { type: String },
      },
    ],

    previousHealthcareProviders: [
      {
        name: { type: String },
        contactInfo: { type: String },
        period: { type: String }, // e.g., "2018-2020"
      },
    ],

    lifestyle: {
      smoking: { type: Boolean, default: false },
      alcoholUse: { type: Boolean, default: false },
      exerciseFrequency: { type: String }, // e.g., "Daily", "Weekly"
      dietDescription: { type: String },
    },

    assignedPhysician: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // Better to reference a physician object

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "patients", timestamps: true }
);

const PatientModel = mongoose.model("patients", patientSchema);
export default PatientModel;
