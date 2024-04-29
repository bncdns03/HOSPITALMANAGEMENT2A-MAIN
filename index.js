// index.js
require("dotenv").config();
const express = require("express");
const app = express();
const portNumber = 4000;

const mongoose = require("mongoose");

// Middleware
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

console.log('new change 1')
console.log('new change 2')
console.log('new change 3')
console.log('new change 4')
console.log('new change 5')
console.log('new change 6')

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("open", () => {
  console.log("connected to MongoDB");
});

// Routes
const patientRoute = require("./routes/patientRoute");
const doctorRoute = require("./routes/doctorRoute");
const admissionRoute = require("./routes/admissionRoute"); // Import admission routes

app.use("/api/v1/patients", patientRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/admissions", admissionRoute); // Use admission routes

app.listen(portNumber, () => {
  console.log(`Server is running on http://localhost:${portNumber}`);
});
