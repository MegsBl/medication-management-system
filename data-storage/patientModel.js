// Import Mongoose
const mongoose = require("mongoose")

// Creating patient schema for interaction with database 
const PatientData = new mongoose.Schema({
    name: String, // Patient Name
    email: String, // Patient Email
    doctorId: mongoose.Schema.Type.ObjectId, // Doctor reference number
    medications: [ // Array for medications patient is taking
        {
            name: String, // Name of medication
            dosage: String, // The amount to take 
            timesPerDay: [String], // Times the medicine should be taken
            startDate: Date,
            endDate: Date
        }
    ]
});

// Create a mongoose model
module.exports = mongoose.model("Patient", PatientData)