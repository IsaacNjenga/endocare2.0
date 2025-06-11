import mongoose from "mongoose";
import FeedbackModel from "../models/Feedback.js";

const createFeedback = async (req, res) => {
  try {
    const newFeedback = new FeedbackModel({ ...req.body });
    const result = await newFeedback.save();
    return res.status(200).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//all feedback for a single diary
const fetchFeedback = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const feedback = await FeedbackModel.find({ diaryId: objectId });
    return res.status(201).json({ success: true, feedback });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//fetching feedback for a specific entry
const fetchFeedbackForEntry = async (req, res) => {
  const { id, section } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  if (!section) return res.status(404).json({ error: "No section specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const entryFeedback = await FeedbackModel.find({
      diaryId: objectId,
      section: section,
    });
    return res.status(201).json({ success: true, entryFeedback });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//feedback by a specific doctor
const fetchDoctorFeedback = async (req, res) => {
  const { id, doctorId } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  if (!doctorId) return res.status(404).json({ error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const docObjectId = new mongoose.Types.ObjectId(doctorId);
    const doctorFeedback = await FeedbackModel.find({
      diaryId: objectId,
      createdBy: docObjectId,
    });
    return res.status(201).json({ success: true, doctorFeedback });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFeedback = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createFeedback,
  fetchFeedback,
  fetchFeedbackForEntry,
  fetchDoctorFeedback,
  updateFeedback,
  deleteFeedback,
};
