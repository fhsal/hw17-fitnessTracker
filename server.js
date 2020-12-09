const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// app.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/exercise.html"));
// });

// app.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/stats.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
