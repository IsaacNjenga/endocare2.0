import mongoose from "mongoose";

const diarySchema = new mongoose.Schema(
  {
    mealLogs: [
      {
        meal: { type: String },
        mealType: { type: String },
        mealExperience: { type: String },
        timeOfMeal: { type: String },
        moodAfter: { type: String },
        cravingLevel: { type: Number },
      },
    ],
    medicationLogs: [
      {
        medicationName: { type: String },
        medicationType: { type: String },
        dosage: { type: String },
        timeOfMedication: { type: String },
        route: { type: String },
        purpose: { type: String },
        sideEffects: { type: String },
        compliance: { type: String },
      },
    ],
    bloodSugarLogs: [
      {
        context: { type: String },
        timeOfTest: { type: String },
        sugarLevel: { type: String },
        unit: { type: String },
        activityBefore: { type: String },
        symptoms: { type: String },
        notes: { type: String },
      },
    ],
    physicalActivityLogs: [
      {
        activity: { type: String },
        activityType: { type: String },
        durationOfActivity: { type: String },
        moodAfter: { type: String },
        activityExperience: { type: String },
      },
    ],
    symptomsLogs: [
      {
        symptoms: { type: [String] },
        severity: { type: String },
        reliefMeasures: { type: String },
      },
    ],
    moodLogs: [
      {
        overallMood: { type: String },
        intensityLevel: { type: Number },
        trigger: { type: [String] },
        timeOfMood: { type: String },
        notes: { type: String },
        reliefMeasures: { type: String },
      },
    ],
    entryDate: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "diary", timestamps: true }
);

const DiaryModel = mongoose.model("diary", diarySchema);
export default DiaryModel;
