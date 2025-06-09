import mongoose from "mongoose";
import DoctorModel from "../models/Doctor.js";
import PatientModel from "../models/Patient.js";

const createDoctor = async (req, res) => {
  try {
    const newDoctor = new DoctorModel({ ...req.body });
    const result = await newDoctor.save();
    return res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchAllDoctors = async (req, res) => {
  try {
    const allDoctors = await DoctorModel.find({}).populate(
      "createdBy",
      "firstName lastName avatar phoneNumber email gender"
    );
    return res.status(201).json({ success: true, allDoctors });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDoctor = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const doctorData = await DoctorModel.find({ createdBy: objectId }).populate(
      "createdBy",
      "firstName lastName avatar phoneNumber email gender"
    );
    return res.status(201).json({ success: true, doctorData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchMyPatients = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(404).json({ error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const myPatients = await PatientModel.find({ selectedPhysician: objectId });
    return res.status(200).json({ success: true, myPatients });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateDoctor = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "No ID specified" });
  //if (!userId) return res.status(400).json({ error: "No User ID specified" });

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedDoctor = await DoctorModel.findOneAndUpdate(
      { _id: objectId },
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json({ success: true, updatedDoctor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteDoctor = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createDoctor,
  fetchDoctor,
  updateDoctor,
  deleteDoctor,
  fetchAllDoctors,
  fetchMyPatients,
};
