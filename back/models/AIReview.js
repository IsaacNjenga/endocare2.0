import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: "users" },
    physicianId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    review: { type: String },
  },
  { collection: "reviews", timestamps: true }
);

const ReviewModel = mongoose.model("reviews", reviewSchema);
export default ReviewModel;
