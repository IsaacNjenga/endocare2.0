import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    medicalLicenseNumber: { type: String },
    specialty: { type: [String] },
    yearsOfExperience: { type: String },
    currentHospital: { type: String },
    boardCertifications: { type: [String] },
    education: [
      {
        bachelorsDegree: { type: String },
        medicalSchool: { type: String },
        residency: { type: String },
        certification: { type: String },
      },
    ],
    languagesSpoken: { type: [String] },
    practiceLicenseExpiry: { type: String },
    practiceName: { type: String },
    practiceAddress: { type: String },
    officeHours: { type: [String] },
    contactInformation: [
      {
        officePhone: { type: String },
        officeEmail: { type: String },
        website: { type: String },
      },
    ],
    servicesOffered: { type: [String] },
    acceptedInsurancePlans: { type: [String] },
  },
  { collection: "doctor", timestamps: true }
);

const DoctorModel = mongoose.model("doctor", doctorSchema);
export default DoctorModel;
