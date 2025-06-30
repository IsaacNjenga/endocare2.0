import mongoose from "mongoose";
import ResponseModel from "../models/Response.js";

const createResponse = async (req, res) => {
  try {
    const newResponse = new ResponseModel({ ...req.body });
    const savedResponse = await newResponse.save();

    return res.status(200).json({ success: true, ...savedResponse._doc });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//fetching for the patient only
const fetchResponses = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const fetchedResponses = await ResponseModel.find({ patientId: objectId });

    return res.status(200).json({ success: true, fetchedResponses });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//fetching for the doctor
const fetchDoctorResponses = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const fetchedResponses = await ResponseModel.find({ createdBy: objectId })
      .populate("patientId", "firstName lastName avatar email ")
      .populate("reviewId", "review");

    return res.status(200).json({ success: true, fetchedResponses });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateResponse = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedReview = await ResponseModel.findOneAndUpdate(
      {
        reviewId: objectId,
      },
      { $set: req.body },
      { new: true }
    );

    return res.status(201).json({ success: true, updatedReview });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export { createResponse, fetchResponses, fetchDoctorResponses, updateResponse };
