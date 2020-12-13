const Workout = require("../models/workout");

var router = require("express").Router();

// route to retrieve workouts, use on home page load

router.get("/api/workouts", function (req, res) {
  console.log("hitting get workouts route ");

  Workout.find()
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

// route to create new workout

router.post("/api/workouts", function (req, res) {
  console.log("hitting post workouts route ");
  console.log(req.body);

  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

// route to get all workouts for stats page

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

// route to add an individual exercise

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
