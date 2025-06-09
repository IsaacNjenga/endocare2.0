import PatientModel from "../models/Patient.js";
import mongoose from "mongoose";

const createPatientDetails = async (req, res) => {
  try {
    const newPatient = new PatientModel({ ...req.body });
    const result = await newPatient.save();

    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log("Error creating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchPatientDetails = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(404).json({ error: "No ID Specified" });
  }
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const patientData = await PatientModel.find({
      createdBy: objectId,
    }).populate(
      "createdBy",
      "firstName lastName email phoneNumber gender avatar"
    );
    return res.status(200).json({ success: true, patientData });
  } catch (error) {
    console.log("Error fetching patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchPatientsDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error fetching patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const updatePatientDetails = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(404).json({ error: "No ID Specified" });
  }
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedPatientLog = await PatientModel.findOneAndUpdate(
      { createdBy: objectId },
      { $set: req.body },
      { new: true }
    );
    if (!updatedPatientLog) {
      return res.status(404).json({ error: "Patient record not found" });
    }
    return res.status(201).json({ success: true, data: updatedPatientLog });
  } catch (error) {
    console.log("Error updating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const updatePatientPhysician = async (req, res) => {
  const { id, physId } = req.query;

  if (!id) return res.status(404).json({ error: "No ID Specified" });
  if (!physId) return res.status(404).json({ error: "No ID Specified" });

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const physicianId = new mongoose.Types.ObjectId(physId);
    const updatedPatientLog = await PatientModel.findOneAndUpdate(
      { createdBy: objectId },
      { selectedPhysician: physicianId },
      { new: true }
    );
    if (!updatedPatientLog) {
      return res.status(404).json({ error: "Patient record not found" });
    }
    return res.status(201).json({ success: true, data: updatedPatientLog });
  } catch (error) {
    console.log("Error updating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const deletePatientDetail = async (req, res) => {
  const { section, id, userId } = req.query;
  console.log(section);
  if (!id) {
    return res.status(400).json({ error: "ID is not specified. Try again" });
  }
  if (!section) {
    return res.status(400).json({ error: "Section is not. Try again" });
  }
  if (!userId) {
    return res
      .status(400)
      .json({ error: "User ID is not specified. Try again" });
  }
  try {
    const deleteDetail = await PatientModel.findOneAndUpdate(
      { createdBy: userId },
      {
        $pull: {
          [section]: { _id: id },
        },
      },
      { new: true }
    );

    if (!deleteDetail) {
      return res.status(404).json({ error: "Patient detail not found" });
    }
    return res.status(200).json({ success: true, data: deleteDetail });
  } catch (error) {
    console.log("Error deleting patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const deletePatientDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error deleting patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

export {
  createPatientDetails,
  fetchPatientDetails,
  fetchPatientsDetails,
  updatePatientDetails,
  deletePatientDetails,
  deletePatientDetail,
  updatePatientPhysician,
};
