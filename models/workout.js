const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    { type: { type: String, trim: true, required: "Exercise type?" } },
    { name: { type: String, trim: true, required: "Exercise name?" } },
    { weight: { type: Number } },
    { duration: { type: Number, required: "Duration (minutes) ?" } },
    { reps: { type: Number } },
    { distance: { type: Number } },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
