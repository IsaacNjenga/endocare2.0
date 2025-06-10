import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    diaryId: { type: mongoose.Schema.Types.ObjectId, ref: "diary" },
    entryId,
    feedback: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "feedback", timestamps: true }
);

const FeedbackModel = mongoose.model("feedback", feedbackSchema);
