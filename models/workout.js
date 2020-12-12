const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: { type: String, trim: true },
      name: { type: String, trim: true },
      weight: { type: Number, default: 0 },
      reps: { type: Number, default: 0 },
      sets: { type: Number, default: 0 },
      duration: Number,
      distance: { type: Number, default: 0 },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
