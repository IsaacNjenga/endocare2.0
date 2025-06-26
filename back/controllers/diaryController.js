import mongoose from "mongoose";
import DiaryModel from "../models/Diary.js";
import FeedbackModel from "../models/Feedback.js";

const createDiaryEntry = async (req, res) => {
  try {
    const newDiary = new DiaryModel({ ...req.body });
    const results = await newDiary.save();
    return res.status(200).json({ success: true, ...results._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDiaryEntry = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(404).json({ error: "No ID specified" });
  }
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const entry = await DiaryModel.find({ createdBy: objectId });

    return res.status(200).json({ success: true, entry });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDiaryEntries = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateDiaryEntry = async (req, res) => {
  const { id, userId } = req.query;
  if (!id) return res.status(400).json({ error: "No ID specified" });
  if (!userId) return res.status(400).json({ error: "No User ID specified" });

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const userObjectId = new mongoose.Types.ObjectId(userId);
    const updatedEntry = await DiaryModel.findOneAndUpdate(
      { _id: objectId },
      { $set: req.body },
      { new: true }
    );
    if (!updatedEntry) {
      console.log("No matching entry found for update");
      return res.status(404).json({ error: "Entry record not found" });
    }
    return res.status(201).json({ success: true, updatedEntry });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const diaryWithNoFeedback = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const diaries = await DiaryModel.find({ createdBy: objectId }).populate(
      "createdBy",
      "firstName avatar lastName email"
    );
    const diaryIds = diaries.map((d) => d._id);

    //get unique diaryIds with feedback
    const feedbacks = await FeedbackModel.find({
      diaryId: { $in: diaryIds },
    }).distinct("diaryId");

    const feedbackDiarySet = new Set(feedbacks.map((id) => id.toString()));

    //diariesWithoutFeedback
    const fetchedDiaries = diaries.filter(
      (d) => !feedbackDiarySet.has(d._id.toString())
    );
    return res.status(200).json({ success: true, fetchedDiaries });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteDiaryEntry = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export {
  createDiaryEntry,
  fetchDiaryEntries,
  fetchDiaryEntry,
  updateDiaryEntry,
  deleteDiaryEntry,
  diaryWithNoFeedback,
};
