app.post("/api/patient/:id/medication", async (req, res) => {
    // Extract requested fields 
    const { name, dosage, timesPerDay, startDate, endDate } = req.body;
    // Find the patient
    const patient = await Patient.findById(req.params.id);

    // Need to add new object to the array with the new medications for the patient
    patient.medications.push({
        name,
        dosage,
        timesPerDay,
        startDate,
        endDate
    });
    // Save changes to the database
    await patient.save();

    // Check to confirm save was sucessful
    res.json({ message: "Medication added", patient });
});