const Admission = require("../models/admissionSchema");

exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().select('-__v'); // Exclude the __v field
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};


exports.getAdmissionById = async (req, res) => {
  const admissionId = req.params.id;
  try {
    const admission = await Admission.findById(admissionId);
    if (!admission) {
      return res.status(404).json({ error: "Admission not found" });
    }
    res.json(admission);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

exports.createAdmission = async (req, res) => {
  const { patient, doctor, admissionDate, dischargeDate, diagnosis } = req.body;
  try {
    const newAdmission = await Admission.create({
      patient,
      doctor,
      admissionDate,
      dischargeDate,
      diagnosis
    });
    res.status(201).json(newAdmission);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

exports.deleteAdmission = async (req, res) => {
  const admissionId = req.params.admissionID;
  try {
    const deletedAdmission = await Admission.findByIdAndDelete(admissionId);
    if (!deletedAdmission) {
      return res.status(404).json({ error: "Admission not found" });
    }
    res.json(deletedAdmission);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

exports.updateAdmission = async (req, res) => {
  const admissionId = req.params.id;
  const { patient, doctor, admissionDate, dischargeDate, diagnosis } = req.body;
  const updatedFields = { patient, doctor, admissionDate, dischargeDate, diagnosis };
  try {
    const updatedAdmission = await Admission.findByIdAndUpdate(admissionId, updatedFields, { new: true });
    if (!updatedAdmission) {
      return res.status(404).json({ error: "Admission not found" });
    }
    res.json(updatedAdmission);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};