import ReviewModel from "../models/AIReview.js";

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

const fetchReview = async (req, res) => {
  try {
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

export { createReview, fetchReview };
