import PatientModel from "../models/Patient.js";

const createPatientDetails = async (req, res) => {
  try {
    const newPatient = new PatientModel({ ...req.body });
    const result = await newPatient.save();

    return res.status(200).json({ success: true, ...result._doc });
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
    const patientData = await PatientModel.find({ createdBy: id });
    return res.status(201).json({ success: true, patientData });
  } catch (error) {
    console.log("Error creating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchPatientsDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error creating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const updatePatientDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error creating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

const deletePatientDetails = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error creating patient information", error);
    return res.status(500).json({ error: error.message });
  }
};

export {
  createPatientDetails,
  fetchPatientDetails,
  fetchPatientsDetails,
  updatePatientDetails,
  deletePatientDetails,
};
