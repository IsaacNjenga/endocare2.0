import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    diaryId: { type: mongoose.Schema.Types.ObjectId, ref: "diary" },
    section: {
      type: String,
      enum: [
        "mealLogs",
        "bloodSugarLogs",
        "physicalActivityLogs",
        "symptomsLogs",
        "moodLogs",
        "medicationsLogs",
      ],
      required: true,
    },
    entryId: { type: mongoose.Schema.Types.ObjectId },
    feedback: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "feedback", timestamps: true }
);

const FeedbackModel = mongoose.model("feedback", feedbackSchema);
export default FeedbackModel;
