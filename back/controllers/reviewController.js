import mongoose from "mongoose";
import ReviewModel from "../models/AIReview.js";
import ResponseModel from "../models/Response.js";

const createReview = async (req, res) => {
  try {
    const newReview = new ReviewModel({ ...req.body });
    const savedReview = await newReview.save();

    return res.status(200).json({ success: true, ...savedReview._doc });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

//fetching by doctor's id
const fetchReviews = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const fetchedReviews = await ReviewModel.find({
      physicianId: objectId,
    }).populate("createdBy", "firstName lastName avatar email");

    return res.status(200).json({ success: true, fetchedReviews });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchUnrespondedReviews = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const reviews = await ReviewModel.find({
      physicianId: objectId,
    }).populate("createdBy", "firstName lastName avatar email");

    const reviewIds = reviews.map((r) => r._id);

    const responses = await ResponseModel.find({
      reviewId: { $in: reviewIds },
    }).distinct("reviewId");

    const responseSet = new Set(responses.map((id) => id.toString()));

    //reviews without responses
    const fetchedReviews = reviews.filter(
      (r) => !responseSet.has(r._id.toString())
    );

    return res.status(200).json({ success: true, fetchedReviews });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

export { createReview, fetchReviews, fetchUnrespondedReviews };
