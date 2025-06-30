import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    diaryId: { type: mongoose.Schema.Types.ObjectId, ref: "diary" },
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: "reviews" },
    response: { type: String },
  },
  { collection: "responses", timestamps: true }
);

const ResponseModel = mongoose.model("responses", responseSchema);
export default ResponseModel;
