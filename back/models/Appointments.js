import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    appointmentDate: { type: String },
    appointmentTime: { type: String },
    appointmentReason: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    physician: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "appointments", timestamps: true }
);

const AppointmentModel = mongoose.model("appointments", appointmentSchema);
export default AppointmentModel;
