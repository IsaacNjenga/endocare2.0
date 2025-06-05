import mongoose from "mongoose";
import AppointmentModel from "../models/Appointments.js";

const createAppointment = async (req, res) => {
  try {
    const newAppointment = new AppointmentModel({ ...req.body });
    const result = newAppointment.save();

    return res.status(200).json({ success: true, ...result._doc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchPatientAppointments = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(404).json({ error: "No ID specified" });
  }
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const patientAppointments = await AppointmentModel.find({
      createdBy: objectId,
    });
    return res.status(200).json({ success: true, patientAppointments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchDoctorAppointments = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(404).json({ error: "No ID specified" });
  }
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const doctorAppointments = await AppointmentModel.find({
      physician: objectId,
    });
    return res.status(200).json({ success: true, doctorAppointments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAppointment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAppointment = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createAppointment,
  fetchPatientAppointments,
  fetchDoctorAppointments,
  updateAppointment,
  deleteAppointment,
};
