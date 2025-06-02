import mongoose from "mongoose";
import DiaryModel from "../models/Diary.js";

const createDiaryEntry = async (req, res) => {
  try {
    const newDiary = await DiaryModel({ ...req.body });
    const results = newDiary.save();
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
      { _id: objectId, },
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
};
