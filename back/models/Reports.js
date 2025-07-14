import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    report: { type: String },
  },
  { collection: "reports", timestamps: true }
);

const ReportModel = mongoose.model("reports", reportSchema);
export default ReportModel;
