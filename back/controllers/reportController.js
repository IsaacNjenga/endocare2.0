import mongoose from "mongoose";
import ReportModel from "../models/Reports.js";

const createReport = async (req, res) => {
  try {
    const newReport = new ReportModel({ ...req.body });
    const result = await newReport.save();

    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};

const fetchReports = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const fetchedReport = await ReportModel.findOne({ patientId: objectId });

    return res.status(200).json({ success: true, fetchedReport });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};

const updateReport = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({ success: false, error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedReport = await ReportModel.findOneAndUpdate(
      { _id: objectId },
      { $set: req.body },
      { new: true },
    );
    return res.status(201).json({ success: true, updatedReport });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};

export { createReport, fetchReports, updateReport };
