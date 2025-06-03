import mongoose from "mongoose";
import DoctorModel from "../models/Doctor.js";

const createDoctor = async (req, res) => {
  try {
    const newDoctor = new DoctorModel({ ...req.body });
    const result = newDoctor.save();
    return res.status(200).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDoctor = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "No ID specified" });
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const fetchedDoctor = await DoctorModel.find({ createdBy: objectId });
    return res.status(201).json({ success: true, fetchedDoctor });
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

export { createDoctor, fetchDoctor, updateDoctor, deleteDoctor };
