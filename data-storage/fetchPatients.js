// Retrieving the patients data 
app.get("/api/doctor/:doctorId/patients", async (req, res) => {
    // Query Mongoose
      const patients = await Patient.find({ doctorId: req.params.doctorId });
    // Once array is obtained send back to client
    res.json(patients);
});