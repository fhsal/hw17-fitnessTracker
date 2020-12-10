const Workout = require("../models/workout");

var router = require("express").Router();

router.get("/api/workouts", function (req, res) {
  console.log("hitting get workouts route ");

  Workout.find()
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", function (req, res) {
  console.log("hitting post workouts route ");
  console.log(req.body);

  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  console.log("hitting stats route ");
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/range", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
