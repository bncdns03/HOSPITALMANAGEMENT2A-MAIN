const express = require("express");
const router = express.Router();
const admissionController = require("../controllers/admissionController");

router.get("/", admissionController.getAllAdmissions);
router.get("/:id", admissionController.getAdmissionById);
router.post("/create", admissionController.createAdmission);
router.delete("/delete/:admissionID", admissionController.deleteAdmission);
router.put("/update/:id", admissionController.updateAdmission);

module.exports = router;
