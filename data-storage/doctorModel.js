// Creating a schema of the doctors
const DoctorData = new mongoose.Schema({
    name: String,
    email: String,
    patients: [mongoose.Schema.Types.ObjectId] // An array for the list of patients the doctor has
});

// Create a mongoose model
module.exports=mongoose.model("Doctor", DoctorData)