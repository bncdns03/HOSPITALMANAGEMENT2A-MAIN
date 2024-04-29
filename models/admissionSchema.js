const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admissionSchema = new Schema({
  
  admissionDate: {
    type: Date,
    default: Date.now
  }, 
  dischargeDate: Date,
  diagnosis: String
});



const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;
